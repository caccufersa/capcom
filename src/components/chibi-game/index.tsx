import { useEffect, useRef, useState } from 'react';

/**
 * 🎮 CODE RUNNER - Jogo de Plataforma Estilo Retro
 * Corra, pule e colete tokens de código em um mundo pixel art único
 */

interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    collected?: boolean;
    type?: number;
}

interface Platform {
    x: number;
    y: number;
    width: number;
    height: number;
}

export function ChibiGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameState, setGameState] = useState<'intro' | 'playing' | 'gameover'>('intro');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(45);
    
    // Load high score from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('code-runner-high-score');
        if (saved) setHighScore(parseInt(saved));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Game constants
        const CANVAS_WIDTH = 600;
        const CANVAS_HEIGHT = 400;
        const PLAYER_WIDTH = 28;
        const PLAYER_HEIGHT = 32;
        const COLLECTIBLE_SIZE = 24;
        const PLAYER_SPEED = 5;
        const JUMP_FORCE = -12;
        const GRAVITY = 0.6;
        const GROUND_Y = CANVAS_HEIGHT - 60;

        // Game state
        let animationFrameId: number;
        let player = { 
            x: 50, 
            y: GROUND_Y - PLAYER_HEIGHT, 
            vx: 0,
            vy: 0,
            onGround: true,
            frame: 0,
            direction: 1 // 1 = right, -1 = left
        };
        let platforms: Platform[] = [];
        let collectibles: GameObject[] = [];
        let particles: Array<{ 
            x: number; 
            y: number; 
            vx: number; 
            vy: number; 
            life: number; 
            color: string;
            size: number;
        }> = [];
        let keys: { [key: string]: boolean } = {};
        let gameTime = 0;
        let stars: Array<{ x: number; y: number; speed: number; size: number }> = [];

        // Keyboard input
        const handleKeyDown = (e: KeyboardEvent) => {
            keys[e.key] = true;
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            keys[e.key] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // Initialize stars for parallax background
        for (let i = 0; i < 40; i++) {
            stars.push({
                x: Math.random() * CANVAS_WIDTH,
                y: Math.random() * CANVAS_HEIGHT,
                speed: Math.random() * 0.5 + 0.2,
                size: Math.random() * 2 + 1
            });
        }

        // Initialize platforms
        platforms = [
            { x: 0, y: GROUND_Y + 40, width: CANVAS_WIDTH, height: 20 }, // ground
            { x: 150, y: GROUND_Y - 60, width: 100, height: 12 },
            { x: 350, y: GROUND_Y - 100, width: 120, height: 12 },
            { x: 500, y: GROUND_Y - 40, width: 80, height: 12 },
        ];

        /**
         * 🎨 ENHANCED PIXEL ART DRAWING FUNCTIONS
         */

        // Draw modern runner character
        const drawPlayer = (px: number, py: number, frame: number, direction: number, isMoving: boolean, onGround: boolean) => {
            ctx.save();
            
            // Shadow
            ctx.fillStyle = 'rgba(88, 166, 255, 0.3)';
            ctx.beginPath();
            ctx.ellipse(px + PLAYER_WIDTH/2, py + PLAYER_HEIGHT + 2, PLAYER_WIDTH * 0.4, 4, 0, 0, Math.PI * 2);
            ctx.fill();

            // Flip horizontal based on direction
            if (direction === -1) {
                ctx.translate(px + PLAYER_WIDTH, py);
                ctx.scale(-1, 1);
                ctx.translate(-px, -py);
            }

            const walkCycle = Math.floor((frame / 8) % 4);
            const bobbing = onGround && isMoving ? Math.sin(frame * 0.3) * 2 : 0;
            
            // Glow effect
            const gradient = ctx.createRadialGradient(px + PLAYER_WIDTH/2, py + PLAYER_HEIGHT/2, 0, px + PLAYER_WIDTH/2, py + PLAYER_HEIGHT/2, PLAYER_WIDTH);
            gradient.addColorStop(0, 'rgba(88, 166, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(88, 166, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(px - 8, py - 8, PLAYER_WIDTH + 16, PLAYER_HEIGHT + 16);

            // Body (torso) - neon blue
            ctx.fillStyle = '#58a6ff';
            ctx.fillRect(px + 6, py + 14 + bobbing, 16, 12);
            
            // Body accent
            ctx.fillStyle = '#1f6feb';
            ctx.fillRect(px + 8, py + 16 + bobbing, 12, 2);
            ctx.fillRect(px + 10, py + 20 + bobbing, 8, 2);

            // Head - light blue
            ctx.fillStyle = '#79c0ff';
            ctx.fillRect(px + 8, py + 6 + bobbing, 12, 10);
            
            // Headband/visor
            ctx.fillStyle = '#1f6feb';
            ctx.fillRect(px + 6, py + 8 + bobbing, 16, 4);
            
            // Visor glow
            ctx.fillStyle = '#58a6ff';
            ctx.fillRect(px + 9, py + 9 + bobbing, 10, 2);

            // Eyes (cybernetic)
            ctx.fillStyle = '#58a6ff';
            ctx.fillRect(px + 10, py + 10 + bobbing, 2, 2);
            ctx.fillRect(px + 16, py + 10 + bobbing, 2, 2);

            // Arms - animated
            ctx.fillStyle = '#58a6ff';
            const armSwing = isMoving ? Math.sin(frame * 0.3) * 2 : 0;
            ctx.fillRect(px + 4, py + 16 + bobbing + armSwing, 4, 8);
            ctx.fillRect(px + 20, py + 16 + bobbing - armSwing, 4, 8);

            // Legs - walking animation
            ctx.fillStyle = '#1f6feb';
            if (isMoving && onGround) {
                const legOffset = walkCycle < 2 ? 0 : 2;
                ctx.fillRect(px + 9, py + 26 + bobbing, 4, 8 - legOffset);
                ctx.fillRect(px + 15, py + 26 + bobbing, 4, 8 - (2 - legOffset));
            } else {
                ctx.fillRect(px + 9, py + 26 + bobbing, 4, 8);
                ctx.fillRect(px + 15, py + 26 + bobbing, 4, 8);
            }

            // Feet glow
            if (onGround) {
                ctx.fillStyle = 'rgba(88, 166, 255, 0.5)';
                ctx.fillRect(px + 8, py + 33, 3, 2);
                ctx.fillRect(px + 17, py + 33, 3, 2);
            }

            ctx.restore();
        };

        // Draw floating code tokens (geometric style)
        const drawCollectible = (col: GameObject, frame: number) => {
            const yOffset = Math.sin(frame * 0.08 + col.x) * 4;
            const rotation = frame * 0.02 + col.x;
            const pulse = Math.sin(frame * 0.1) * 0.2 + 0.8;
            
            ctx.save();
            ctx.translate(col.x + COLLECTIBLE_SIZE/2, col.y + yOffset + COLLECTIBLE_SIZE/2);
            ctx.rotate(rotation);

            // Outer glow
            const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, COLLECTIBLE_SIZE * pulse);
            const colors = ['#3fb950', '#58a6ff', '#ffa657', '#f85149', '#a371f7'];
            const color = colors[col.type! % colors.length];
            
            glowGradient.addColorStop(0, color + '80');
            glowGradient.addColorStop(0.5, color + '30');
            glowGradient.addColorStop(1, color + '00');
            ctx.fillStyle = glowGradient;
            ctx.fillRect(-COLLECTIBLE_SIZE, -COLLECTIBLE_SIZE, COLLECTIBLE_SIZE * 2, COLLECTIBLE_SIZE * 2);

            // Main hexagon shape
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const x = Math.cos(angle) * 10 * pulse;
                const y = Math.sin(angle) * 10 * pulse;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();

            // Inner symbol
            ctx.fillStyle = '#0d1117';
            ctx.font = 'bold 14px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const symbols = ['{', '(', '<', '[', ';'];
            ctx.fillText(symbols[col.type! % symbols.length], 0, 0);

            ctx.restore();
        };

        // Create enhanced particle explosion
        const createParticles = (x: number, y: number, color: string) => {
            for (let i = 0; i < 12; i++) {
                const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.5;
                const speed = Math.random() * 4 + 2;
                particles.push({
                    x: x + COLLECTIBLE_SIZE / 2,
                    y: y + COLLECTIBLE_SIZE / 2,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 2,
                    life: 1,
                    color: color,
                    size: Math.random() * 4 + 2
                });
            }
        };

        // Spawn collectibles on platforms or in air
        const spawnCollectible = () => {
            const type = Math.floor(Math.random() * 5);
            
            if (Math.random() < 0.6 && platforms.length > 1) {
                // Spawn on platform
                const platform = platforms[Math.floor(Math.random() * (platforms.length - 1)) + 1];
                collectibles.push({
                    x: platform.x + Math.random() * (platform.width - COLLECTIBLE_SIZE),
                    y: platform.y - COLLECTIBLE_SIZE - 10,
                    width: COLLECTIBLE_SIZE,
                    height: COLLECTIBLE_SIZE,
                    collected: false,
                    type: type
                });
            } else {
                // Spawn in air
                collectibles.push({
                    x: Math.random() * (CANVAS_WIDTH - COLLECTIBLE_SIZE - 100) + 50,
                    y: Math.random() * (GROUND_Y - 150 - COLLECTIBLE_SIZE) + 50,
                    width: COLLECTIBLE_SIZE,
                    height: COLLECTIBLE_SIZE,
                    collected: false,
                    type: type
                });
            }
        };

        // Initialize collectibles
        for (let i = 0; i < 6; i++) {
            spawnCollectible();
        }

        /**
         * 🎮 GAME LOOP WITH PLATFORM PHYSICS
         */
        const gameLoop = () => {
            if (gameState !== 'playing') return;

            // Clear canvas with gradient
            const bgGradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
            bgGradient.addColorStop(0, '#0d1117');
            bgGradient.addColorStop(1, '#161b22');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            // Animated stars background (parallax)
            stars.forEach(star => {
                star.x -= star.speed;
                if (star.x < 0) star.x = CANVAS_WIDTH;
                
                ctx.fillStyle = `rgba(88, 166, 255, ${star.speed * 0.4})`;
                ctx.fillRect(star.x, star.y, star.size, star.size);
            });

            gameTime++;

            // Horizontal movement
            const isMoving = keys['ArrowLeft'] || keys['a'] || keys['A'] || keys['ArrowRight'] || keys['d'] || keys['D'];
            
            if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
                player.vx = -PLAYER_SPEED;
                player.direction = -1;
            } else if (keys['ArrowRight'] || keys['d'] || keys['D']) {
                player.vx = PLAYER_SPEED;
                player.direction = 1;
            } else {
                player.vx *= 0.8; // friction
            }

            // Jump
            if ((keys['ArrowUp'] || keys['w'] || keys['W'] || keys[' ']) && player.onGround) {
                player.vy = JUMP_FORCE;
                player.onGround = false;
            }

            // Apply gravity
            player.vy += GRAVITY;
            
            // Update position
            player.x += player.vx;
            player.y += player.vy;

            // Boundary check
            if (player.x < 0) player.x = 0;
            if (player.x > CANVAS_WIDTH - PLAYER_WIDTH) player.x = CANVAS_WIDTH - PLAYER_WIDTH;

            // Platform collision
            player.onGround = false;
            platforms.forEach(platform => {
                if (
                    player.x + PLAYER_WIDTH > platform.x &&
                    player.x < platform.x + platform.width &&
                    player.y + PLAYER_HEIGHT > platform.y &&
                    player.y + PLAYER_HEIGHT < platform.y + platform.height &&
                    player.vy >= 0
                ) {
                    player.y = platform.y - PLAYER_HEIGHT;
                    player.vy = 0;
                    player.onGround = true;
                }
            });

            // Draw platforms
            platforms.forEach((platform, idx) => {
                if (idx === 0) {
                    // Ground platform - special style
                    const groundGrad = ctx.createLinearGradient(0, platform.y, 0, platform.y + platform.height);
                    groundGrad.addColorStop(0, '#1f6feb');
                    groundGrad.addColorStop(1, '#0d1117');
                    ctx.fillStyle = groundGrad;
                    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
                    
                    // Ground glow
                    ctx.fillStyle = 'rgba(88, 166, 255, 0.2)';
                    ctx.fillRect(platform.x, platform.y - 2, platform.width, 2);
                } else {
                    // Floating platforms
                    ctx.fillStyle = '#1f6feb';
                    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
                    
                    // Platform border/glow
                    ctx.fillStyle = '#58a6ff';
                    ctx.fillRect(platform.x, platform.y, platform.width, 2);
                    
                    // Side glow
                    const sideGlow = ctx.createLinearGradient(platform.x, 0, platform.x + platform.width, 0);
                    sideGlow.addColorStop(0, 'rgba(88, 166, 255, 0.3)');
                    sideGlow.addColorStop(0.5, 'rgba(88, 166, 255, 0)');
                    sideGlow.addColorStop(1, 'rgba(88, 166, 255, 0.3)');
                    ctx.fillStyle = sideGlow;
                    ctx.fillRect(platform.x, platform.y + 2, platform.width, platform.height - 2);
                }
            });

            // Draw and check collectibles
            collectibles.forEach((col) => {
                if (col.collected) return;

                drawCollectible(col, gameTime);

                // Collision detection
                if (
                    player.x < col.x + col.width &&
                    player.x + PLAYER_WIDTH > col.x &&
                    player.y < col.y + col.height &&
                    player.y + PLAYER_HEIGHT > col.y
                ) {
                    col.collected = true;
                    const colors = ['#3fb950', '#58a6ff', '#ffa657', '#f85149', '#a371f7'];
                    createParticles(col.x, col.y, colors[col.type! % colors.length]);
                    setScore(s => s + 15);
                    spawnCollectible();
                }
            });

            // Remove collected items
            collectibles = collectibles.filter(c => !c.collected);

            // Draw and update particles
            particles = particles.filter(p => p.life > 0);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.015;
                p.vy += 0.3; // gravity
                p.vx *= 0.98; // air resistance

                const alpha = p.life * 0.8;
                ctx.fillStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
                
                // Glow
                ctx.fillStyle = p.color + '40';
                ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
                ctx.globalAlpha = 1;
            });

            // Draw player
            player.frame++;
            drawPlayer(player.x, player.y, player.frame, player.direction, isMoving, player.onGround);

            animationFrameId = requestAnimationFrame(gameLoop);
        };

        if (gameState === 'playing') {
            gameLoop();
        }

        // Timer
        if (gameState === 'playing') {
            const timer = setInterval(() => {
                setTimeLeft(t => {
                    if (t <= 1) {
                        setGameState('gameover');
                        if (score > highScore) {
                            setHighScore(score);
                            localStorage.setItem('code-runner-high-score', score.toString());
                        }
                        return 0;
                    }
                    return t - 1;
                });
            }, 1000);

            return () => {
                clearInterval(timer);
                cancelAnimationFrame(animationFrameId);
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [gameState, score, highScore]);

    const startGame = () => {
        setGameState('playing');
        setScore(0);
        setTimeLeft(45);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Canvas */}
            <div className="relative">
                <canvas
                    ref={canvasRef}
                    width={600}
                    height={400}
                    className="w-full border border-[#30363d] rounded-lg bg-[#0d1117]"
                    style={{ imageRendering: 'pixelated' }}
                />

                {/* Intro Overlay */}
                {gameState === 'intro' && (
                    <div className="absolute inset-0 bg-[#0d1117]/98 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-6 p-6">
                        <div className="text-center space-y-4">
                            <div className="text-7xl mb-2">🚀</div>
                            <h4 className="text-3xl font-bold text-[#e6edf3] mb-2">CODE RUNNER</h4>
                            <div className="bg-[#161b22] border border-[#30363d] rounded px-4 py-2 font-mono text-sm text-[#7d8590] mb-4">
                                <span className="text-[#3fb950]">&gt;</span> A plataforma está pronta...
                            </div>
                            <p className="text-[#7d8590] max-w-md text-sm leading-relaxed">
                                Corra, pule e colete tokens de código! Use <span className="text-[#58a6ff] font-mono">WASD</span> ou <span className="text-[#58a6ff] font-mono">setas</span> para mover, <span className="text-[#58a6ff] font-mono">Espaço/W</span> para pular.
                            </p>
                            <div className="flex gap-3 text-xs text-[#7d8590] justify-center mt-4">
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-[#3fb950]"></span> = 15 pts
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-[#58a6ff]"></span> = 15 pts
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-[#ffa657]"></span> = 15 pts
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={startGame}
                            className="group px-6 py-3 bg-[#238636] hover:bg-[#2ea043] border border-[#2ea043] text-white font-medium rounded transition-all hover:scale-105"
                        >
                            <span className="flex items-center gap-2">
                                <span>▶</span>
                                <span>Iniciar Jogo</span>
                            </span>
                        </button>
                    </div>
                )}

                {/* Game Over Overlay */}
                {gameState === 'gameover' && (
                    <div className="absolute inset-0 bg-[#0d1117]/98 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-6 p-6">
                        <div className="text-center space-y-4">
                            <div className="text-7xl mb-2">
                                {score > highScore - 15 && score === highScore ? '🏆' : '⏱️'}
                            </div>
                            <h4 className="text-3xl font-bold text-[#e6edf3]">
                                {score > highScore - 15 && score === highScore ? 'NOVO RECORDE!' : 'TEMPO ESGOTADO!'}
                            </h4>
                            <div className="space-y-3">
                                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
                                    <div className="text-[#7d8590] text-xs uppercase mb-1">Pontuação Final</div>
                                    <div className="text-4xl font-bold text-[#58a6ff]">{score}</div>
                                </div>
                                {score > highScore - 15 && score === highScore && (
                                    <div className="text-[#ffa657] font-mono text-sm animate-pulse">
                                        <span className="text-[#3fb950]">✓</span> Recorde salvo com sucesso!
                                    </div>
                                )}
                                <div className="flex justify-center gap-6 text-xs text-[#7d8590]">
                                    <div>
                                        <div className="text-[#7d8590] mb-1">Recorde</div>
                                        <div className="text-[#ffa657] font-bold text-lg">{highScore}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={startGame}
                            className="px-6 py-3 bg-[#238636] hover:bg-[#2ea043] border border-[#2ea043] text-white font-medium rounded transition-all hover:scale-105"
                        >
                            <span className="flex items-center gap-2">
                                <span>↻</span>
                                <span>Jogar Novamente</span>
                            </span>
                        </button>
                    </div>
                )}

                {/* In-game HUD */}
                {gameState === 'playing' && (
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
                        <div className="flex gap-2">
                            <div className="bg-[#161b22]/95 backdrop-blur border border-[#30363d] rounded px-3 py-1.5">
                                <div className="text-[#7d8590] text-[10px] uppercase mb-0.5">Score</div>
                                <div className="text-[#58a6ff] font-bold text-lg font-mono">{score}</div>
                            </div>
                            <div className="bg-[#161b22]/95 backdrop-blur border border-[#30363d] rounded px-3 py-1.5">
                                <div className="text-[#7d8590] text-[10px] uppercase mb-0.5">Recorde</div>
                                <div className="text-[#ffa657] font-bold text-lg font-mono">{highScore}</div>
                            </div>
                        </div>
                        <div className="bg-[#161b22]/95 backdrop-blur border border-[#30363d] rounded px-3 py-1.5">
                            <div className="text-[#7d8590] text-[10px] uppercase mb-0.5">Tempo</div>
                            <div className={`font-bold text-lg font-mono ${timeLeft <= 10 ? 'text-[#f85149] animate-pulse' : 'text-[#3fb950]'}`}>
                                {timeLeft}s
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
