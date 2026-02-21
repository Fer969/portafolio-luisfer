import { useState, useCallback } from 'react'
import './EvidenceCarousel.css'

/**
 * Carrusel de imágenes con lazy loading y controles accesibles.
 * @param {{ images: { src: string, alt: string }[] }} props
 */
export default function EvidenceCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [failedIndices, setFailedIndices] = useState(() => new Set())
  const length = images.length

  const markFailed = useCallback((index) => {
    setFailedIndices((prev) => new Set(prev).add(index))
  }, [])

  const goTo = useCallback(
    (index) => {
      if (length <= 0) return
      setCurrentIndex((prev) => {
        if (index < 0) return length - 1
        if (index >= length) return 0
        return index
      })
    },
    [length]
  )

  const goPrev = () => goTo(currentIndex - 1)
  const goNext = () => goTo(currentIndex + 1)

  if (length === 0) return null

  return (
    <div className="evidence-carousel" aria-label="Galería de capturas">
      <div className="evidence-carousel__viewport">
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="evidence-carousel__slide"
            data-active={i === currentIndex}
            aria-hidden={i !== currentIndex}
          >
            {failedIndices.has(i) ? (
              <div className="evidence-carousel__fallback">
                <span className="evidence-carousel__fallback-icon" aria-hidden>🖼</span>
                <span className="evidence-carousel__fallback-text">Captura no cargada</span>
                <span className="evidence-carousel__fallback-hint">Añade la imagen en public/evidence/</span>
              </div>
            ) : (
              <img
                src={img.src}
                alt={img.alt || `Captura ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="evidence-carousel__image"
                onError={() => markFailed(i)}
              />
            )}
          </div>
        ))}
      </div>

      {length > 1 && (
        <>
          <button
            type="button"
            className="evidence-carousel__btn evidence-carousel__btn--prev"
            onClick={goPrev}
            aria-label="Imagen anterior"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            className="evidence-carousel__btn evidence-carousel__btn--next"
            onClick={goNext}
            aria-label="Siguiente imagen"
          >
            <span aria-hidden>›</span>
          </button>

          <div className="evidence-carousel__dots" role="tablist" aria-label="Seleccionar imagen">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Ir a imagen ${i + 1}`}
                className="evidence-carousel__dot"
                data-active={i === currentIndex}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
