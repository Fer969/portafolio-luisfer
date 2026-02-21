import { useEffect, useRef } from 'react'
import { contact } from '../data/content'
import './Contact.css'

export default function Contact() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact" id="contacto" ref={ref}>
      <div className="contact__container">
        <h2 className="contact__heading reveal">Contacto profesional</h2>
        <p className="contact__intro reveal">
          Disponible para proyectos freelance y oportunidades laborales. Puedes escribirme o revisar mi perfil en las siguientes redes.
        </p>
        <div className="contact__links reveal">
          <a
            href={`mailto:${contact.email}`}
            className="contact__link"
            aria-label="Enviar email"
          >
            <span className="contact__label">Email</span>
            <span className="contact__value">{contact.email}</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
            aria-label="LinkedIn"
          >
            <span className="contact__label">LinkedIn</span>
            <span className="contact__value">Perfil profesional</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
            aria-label="GitHub"
          >
            <span className="contact__label">GitHub</span>
            <span className="contact__value">Repositorios</span>
          </a>
        </div>
      </div>
    </section>
  )
}
