import { useEffect, useRef } from 'react'
import { techStack } from '../data/content'
import './TechStack.css'

export default function TechStack() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="tech" id="stack" ref={ref}>
      <div className="tech__container">
        <h2 className="tech__heading reveal">Stack tecnológico</h2>
        <div className="tech__grid reveal">
          <div className="tech__group">
            <h3 className="tech__group-title">Backend</h3>
            <ul className="tech__list">
              {techStack.backend.map((item) => (
                <li key={item} className="tech__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="tech__group">
            <h3 className="tech__group-title">Frontend</h3>
            <ul className="tech__list">
              {techStack.frontend.map((item) => (
                <li key={item} className="tech__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="tech__group">
            <h3 className="tech__group-title">Herramientas</h3>
            <ul className="tech__list">
              {techStack.tools.map((item) => (
                <li key={item} className="tech__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
