/**
 * Obtiene la URL de embed para YouTube o Vimeo.
 * @param {string} url - URL del video (YouTube o Vimeo)
 * @returns {{ embedUrl: string, type: 'youtube' | 'vimeo' | 'direct' } | null}
 */
export function getVideoEmbed(url) {
  if (!url || typeof url !== 'string') return null
  const u = url.trim()
  if (!u) return null

  // YouTube: watch?v=ID o youtu.be/ID
  const ytMatch = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  if (ytMatch) {
    return {
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}`,
      type: 'youtube',
    }
  }

  // Vimeo: vimeo.com/ID
  const vimeoMatch = u.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeoMatch) {
    return {
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
      type: 'vimeo',
    }
  }

  // Video directo (mp4, webm)
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(u)) {
    return { embedUrl: u, type: 'direct' }
  }

  return null
}
