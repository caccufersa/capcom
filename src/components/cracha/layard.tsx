/* eslint-disable react/no-unknown-property */
'use client';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useLoader, type ReactThreeFiber, type RootState } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
      meshLineMaterial: ReactThreeFiber.Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  cardImage?: string;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  cardImage
}: LanyardProps) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={(state: RootState) => state.gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI * 0.5} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={0.3} castShadow color="#ef4444" />
        <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.3} castShadow color="#eab308" />
        <spotLight position={[0, 5, -5]} angle={0.3} penumbra={1} intensity={0.2} castShadow color="#a855f7" />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Suspense fallback={null}>
            <Band cardImage={cardImage} />
          </Suspense>
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={0.5}
            color="#ef4444"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={0.8}
            color="#eab308"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={0.8}
            color="#a855f7"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="#ffffff"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  cardImage?: string;
}

function Band({ maxSpeed = 50, minSpeed = 0, cardImage }: BandProps) {
  // Using "any" for refs since the exact types depend on Rapier's internals
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const cardGeometry = useMemo(() => new THREE.PlaneGeometry(1.4, 2.2, 1, 1), []);
  
  // Load texture if cardImage is provided
  const texture = cardImage ? useLoader(THREE.TextureLoader, cardImage) : null;
  
  // Enhance texture colors
  useEffect(() => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
    }
  }, [texture]);
  
  const cardMaterial = useMemo(
    () => {
      if (texture) {
        return new THREE.MeshStandardMaterial({
          map: texture,
          metalness: 0,
          roughness: 0.5,
          toneMapped: false,
          color: '#ffffff',
        });
      }
      return new THREE.MeshPhysicalMaterial({
        color: '#111827',
        metalness: 0.2,
        roughness: 0.45,
        clearcoat: 1,
        clearcoatRoughness: 0.18
      });
    },
    [texture]
  );
  
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = (): void => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  useFrame((state: RootState, delta: number) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  useEffect(() => {
    return () => {
      cardGeometry.dispose();
      cardMaterial.dispose();
    };
  }, [cardGeometry, cardMaterial]);

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            {/* Front side with texture/decoration */}
            <mesh geometry={cardGeometry} material={cardMaterial}>
              {/* Card decoration - only show if no texture */}
              {!texture && (
                <>
                  <mesh position={[0, 0.4, 0.01]}>
                    <planeGeometry args={[0.6, 0.6]} />
                    <meshStandardMaterial color="#1e40af" />
                  </mesh>
                  <mesh position={[0, -0.2, 0.01]}>
                    <planeGeometry args={[0.8, 0.1]} />
                    <meshStandardMaterial color="#10b981" />
                  </mesh>
                  <mesh position={[0, -0.4, 0.01]}>
                    <planeGeometry args={[0.6, 0.05]} />
                    <meshStandardMaterial color="#6b7280" />
                  </mesh>
                </>
              )}
            </mesh>
            {/* Back side - white */}
            <mesh geometry={cardGeometry} rotation={[0, Math.PI, 0]}>
              <meshStandardMaterial 
                color="#ffffff" 
                side={THREE.FrontSide}
                roughness={0.3}
                metalness={0}
              />
            </mesh>
            {/* Lanyard clip/hook - black accent */}
            <mesh position={[0, 1.1, 0]} scale={[0.8, 0.08, 1]}>
              <boxGeometry args={[0.7, 0.1, 0.05]} />
              <meshStandardMaterial 
                color="#1a1a1a" 
                metalness={0.7} 
                roughness={0.2} 
              />
            </mesh>
            <mesh position={[0, 0.95, 0.03]} scale={[0.3, 0.05, 1]}>
              <boxGeometry args={[0.35, 0.12, 0.04]} />
              <meshStandardMaterial 
                color="#2a2a2a" 
                metalness={0.6} 
                roughness={0.3}
              />
            </mesh>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#000000"
          depthTest={false}
          transparent
          blending={THREE.NormalBlending}
          resolution={new THREE.Vector2(isSmall ? 1000 : 1000, isSmall ? 2000 : 1000)}
          lineWidth={3}
          opacity={0.9}
        />
      </mesh>
    </>
  );
}
