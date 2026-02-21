import { useEffect, useRef } from 'react'
import EvidenceCarousel from './EvidenceCarousel'
import { getVideoEmbed } from '../utils/videoEmbed'
import './ProjectEvidenceModal.css'

/**
 * Modal de evidencia por proyecto: galería, demo (video) y resultados.
 * Cierra con Escape, clic en overlay o botón Cerrar. Atrapa foco para accesibilidad.
 */
export default function ProjectEvidenceModal({ project, onClose }) {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  const hasImages = project?.images?.length > 0
  const videoEmbed = project?.videoUrl ? getVideoEmbed(project.videoUrl) : null
  const hasResultados = project?.resultados?.length > 0
  const hasContent = hasImages || videoEmbed || hasResultados

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const focusables = el.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusables[0]
    if (first) first.focus()
  }, [project?.id])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  if (!project) return null

  return (
    <div
      ref={overlayRef}
      className="evidence-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="evidence-modal-title"
      onClick={handleOverlayClick}
    >
      <div ref={contentRef} className="evidence-modal__content" onClick={(e) => e.stopPropagation()}>
        <header className="evidence-modal__header">
          <div className="evidence-modal__title-wrap">
            <h2 id="evidence-modal-title" className="evidence-modal__title">
              {project.title}
            </h2>
            {project.realClient && (
              <span className="evidence-modal__badge">En producción</span>
            )}
          </div>
          <button
            type="button"
            className="evidence-modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </header>

        <div className="evidence-modal__body">
          {!hasContent && (
            <p className="evidence-modal__empty">Evidencia en preparación.</p>
          )}

          {hasImages && (
            <section className="evidence-modal__section">
              <h3 className="evidence-modal__section-title">Evidencia del sistema</h3>
              <EvidenceCarousel images={project.images} />
            </section>
          )}

          {videoEmbed && (
            <section className="evidence-modal__section">
              <h3 className="evidence-modal__section-title">Demo</h3>
              <div className="evidence-modal__video-wrap">
                {videoEmbed.type === 'direct' ? (
                  <video
                    src={videoEmbed.embedUrl}
                    controls
                    muted
                    className="evidence-modal__video"
                    preload="metadata"
                  >
                    Tu navegador no soporta video.
                  </video>
                ) : (
                  <iframe
                    src={videoEmbed.embedUrl}
                    title="Demo en video"
                    className="evidence-modal__iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </section>
          )}

          {hasResultados && (
            <section className="evidence-modal__section">
              <h3 className="evidence-modal__section-title">Resultados obtenidos</h3>
              <ul className="evidence-modal__resultados">
                {project.resultados.map((item, i) => (
                  <li key={i} className="evidence-modal__resultado-item">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
