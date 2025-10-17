import { useEffect, useRef, useState } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholder?: React.ReactNode
}

export default function LazyImage({ src, alt, className, placeholder, ...rest }: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!imgRef.current) return
    if ('loading' in HTMLImageElement.prototype) {
      // browser supports native lazy loading
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      })
    })

    obs.observe(imgRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {!visible && placeholder}
      <img
        ref={imgRef}
        src={visible ? src : undefined}
        data-src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    </>
  )
}
