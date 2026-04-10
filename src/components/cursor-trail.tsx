import { useEffect, useRef } from "react"

const MAX_TRAIL = 28

export function CursorTrail() {
  const orbRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])
  const positions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: MAX_TRAIL }, () => ({ x: -100, y: -100 }))
  )
  const mouse = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMove)

    const animate = () => {
      positions.current[0] = { ...mouse.current }
      for (let i = 1; i < MAX_TRAIL; i++) {
        const prev = positions.current[i - 1]
        const curr = positions.current[i]
        positions.current[i] = {
          x: curr.x + (prev.x - curr.x) * 0.1,
          y: curr.y + (prev.y - curr.y) * 0.1,
        }
      }

      if (orbRef.current) {
        orbRef.current.style.left = `${mouse.current.x}px`
        orbRef.current.style.top = `${mouse.current.y}px`
      }

      trailRefs.current.forEach((el, i) => {
        if (!el) return
        const ratio = 1 - i / MAX_TRAIL
        const size = Math.max(3, 22 * ratio * ratio)
        const opacity = Math.pow(ratio, 1.5) * 0.9
        el.style.left = `${positions.current[i].x}px`
        el.style.top = `${positions.current[i].y}px`
        el.style.width = `${size}px`
        el.style.height = `${size}px`
        el.style.opacity = `${opacity}`
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={orbRef} className="cursor-orb" />
      {Array.from({ length: MAX_TRAIL }).map((_, i) => (
        <div
          key={i}
          className="cursor-trail"
          ref={(el) => {
            if (el) trailRefs.current[i] = el
          }}
        />
      ))}
    </>
  )
}

export default CursorTrail