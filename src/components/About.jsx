import { useEffect, useRef } from 'react'
import { about } from '../data/content'
import './About.css'

export default function About() {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="sobre-mi" ref={ref}>
      <div className="about__container">
        <h2 className="about__heading reveal">Sobre mí</h2>
        <div className="about__content">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="about__text reveal">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
