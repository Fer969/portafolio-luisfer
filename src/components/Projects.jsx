import { useEffect, useRef } from 'react'
import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
            const cards = entry.target.querySelectorAll('.projects__card')
            cards.forEach((card, i) => {
              card.style.transitionDelay = `${i * 0.08}s`
            })
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects" id="proyectos" ref={ref}>
      <div className="projects__container">
        <h2 className="projects__heading reveal">Proyectos</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`projects__card ${project.featured ? 'projects__card--featured' : ''} reveal`}
            >
              {project.featured && <span className="projects__badge">Principal</span>}
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__subtitle">{project.subtitle}</p>
              <p className="projects__description">{project.description}</p>
              <ul className="projects__stack">
                {project.stack.map((tech) => (
                  <li key={tech} className="projects__stack-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
