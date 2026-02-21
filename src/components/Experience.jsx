import { useEffect, useRef } from 'react'
import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {
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
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="experience" id="experiencia" ref={ref}>
      <div className="experience__container">
        <h2 className="experience__heading reveal">Experiencia profesional</h2>
        <article className="experience__card reveal">
          <header className="experience__header">
            <div>
              <h3 className="experience__company">{experience.company}</h3>
              <p className="experience__role">{experience.role}</p>
            </div>
            <span className="experience__period">{experience.period}</span>
          </header>
          <p className="experience__description">{experience.description}</p>
          <ul className="experience__highlights">
            {experience.highlights.map((item, i) => (
              <li key={i} className="experience__item">
                {item}
              </li>
            ))}
          </ul>
          <p className="experience__impact">{experience.impact}</p>
        </article>
      </div>
    </section>
  )
}
