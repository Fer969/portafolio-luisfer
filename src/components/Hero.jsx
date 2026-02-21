import { useEffect, useRef } from 'react'
import { hero } from '../data/content'
import './Hero.css'

export default function Hero() {
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="inicio" ref={ref}>
      <div className="hero__inner">
        <div className="hero__photo-wrap reveal">
          <img src="/profile.png" alt="Luisfer Fuentes Montoya" className="hero__photo" width={240} height={240} />
        </div>
        <p className="hero__label reveal">Desarrollador de Software</p>
        <h1 className="hero__name reveal">{hero.name}</h1>
        <p className="hero__title reveal">{hero.title}</p>
        <div className="hero__stack reveal">
          {hero.stack.map((tech) => (
            <span key={tech} className="hero__stack-item">
              {tech}
            </span>
          ))}
        </div>
        <p className="hero__message reveal">{hero.message}</p>
        <div className="hero__actions reveal">
          <a href="#contacto" className="hero__cta">
            Contactar
          </a>
          <a href="#proyectos" className="hero__cta hero__cta--secondary">
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  )
}
