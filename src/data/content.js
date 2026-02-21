/**
 * Contenido centralizado del portafolio.
 * Facilita mantenimiento y posibles futuras traducciones.
 */

export const hero = {
  name: 'Luisfer Fuentes Montoya',
  title: 'Desarrollador de sistemas web para negocios',
  stack: ['Laravel', 'PHP', 'React', 'MySQL'],
  message: 'Desarrollo sistemas web que automatizan procesos, organizan la información y mejoran la operación de los negocios.',
}

export const about = {
  paragraphs: [
    'Soy desarrollador de software enfocado en crear sistemas web que realmente se usan en el día a día de los negocios.',
    'Me especializo en construir soluciones completas con Laravel y React que automatizan procesos, organizan la información y facilitan la operación de las empresas.',
  ],
}

export const experience = {
  company: 'PISCIMAYAS LTDA',
  role: 'Desarrollador de Software – Aprendiz SENA',
  period: 'Experiencia en formación dual',
  description: 'Desarrollo completo de un sistema web de gestión piscícola para apoyo a la operación de la empresa.',
  highlights: [
    'Implementación de autenticación y control de acceso por roles.',
    'Desarrollo de módulos administrativos para gestión de datos del negocio.',
    'Generación de reportes y sistema de alertas para seguimiento operativo.',
    'Trazabilidad de procesos y gestión de base de datos MySQL.',
    'Control de versiones y trabajo en equipo con Git.',
  ],
  impact: 'El sistema aporta impacto funcional y organizacional: centraliza la información, automatiza tareas repetitivas y ofrece visibilidad en tiempo real sobre el estado de los procesos, apoyando la toma de decisiones con datos confiables.',
}

/**
 * Estructura de evidencia por proyecto.
 * - images: array de { src, alt } para capturas del sistema.
 * - videoUrl: opcional, URL de YouTube, Vimeo o video directo.
 * - resultados: array de strings (bullets orientados a negocio).
 */
export const projects = [
  {
    id: 'montero-sports',
    title: 'Sistema de Gestión para Gimnasios (Montero Sports)',
    subtitle: 'Sistema comercial implementado en negocio real',
    description: 'Sistema web desarrollado para gimnasio real: gestión de membresías, control de acceso, registro de usuarios y asistencia, pagos y reportes. Solución completa que el negocio usa en su operación diaria.',
    stack: ['Laravel', 'PHP', 'MySQL', 'React'],
    featured: true,
    realClient: true,
    images: [
      { src: '/evidence/montero-sports/01.png', alt: 'Dashboard principal del gimnasio' },
      { src: '/evidence/montero-sports/02.png', alt: 'Gestión de membresías' },
      { src: '/evidence/montero-sports/03.png', alt: 'Sección de clientes' },
      { src: '/evidence/montero-sports/04.png', alt: 'Accesos rápidos y métricas' },
    ],
    videoUrl: '/evidence/montero-sports/1.mp4',
    resultados: [
      'Centralización de la información de socios y pagos.',
      'Control de acceso y registro de asistencia en un solo sistema.',
      'Reducción de errores manuales en cobros y vencimientos.',
      'Reportes claros para la toma de decisiones del negocio.',
    ],
  },
  {
    id: 'piscicola',
    title: 'Sistema de Gestión Piscícola',
    subtitle: 'Sistema empresarial completo · Pisci-Mayas',
    description: 'Sistema web de gestión para empresa piscícola: autenticación, módulos administrativos, reportes, alertas y trazabilidad. Backend en Laravel, base de datos MySQL, frontend integrado.',
    stack: ['Laravel', 'PHP', 'MySQL', 'React', 'Git'],
    featured: true,
    realClient: true,
    images: [
      { src: '/evidence/piscicola/01.png', alt: 'Dashboard principal Pisci-Mayas' },
      { src: '/evidence/piscicola/02.png', alt: 'Traslados entre lotes' },
      { src: '/evidence/piscicola/03.png', alt: 'Muestreos y biomasa' },
      { src: '/evidence/piscicola/04.png', alt: 'Reportes y análisis' },
    ],
    videoUrl: '/evidence/piscicola/1.mp4',
    resultados: [
      'Centralización de la información operativa.',
      'Trazabilidad de procesos y datos en tiempo real.',
      'Alertas automáticas para seguimiento operativo.',
      'Menos tiempo en tareas repetitivas y reportes manuales.',
    ],
  },
  {
    id: 'sga-almuerzos',
    title: 'Sistema de Gestión para Almuerzos (SGA)',
    subtitle: 'Proyecto de validación etapa lectiva SENA · CEFA Angostura',
    description: 'Sistema web de gestión de almuerzos con identificación biométrica para el SENA Angostura. Digitaliza el registro (reemplaza el sistema manual con largas filas y errores). Incluye módulos por rol (Administrador, Funcionario, Aprendiz), registro de asistencia por huella digital, gestión contable, reportes automáticos y administración de usuarios. Desarrollado y entregado satisfactoriamente.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Biometría'],
    featured: false,
    realClient: true,
    images: [
      { src: '/evidence/sga-almuerzos/01.jpg', alt: 'Registro biométrico de almuerzos' },
      { src: '/evidence/sga-almuerzos/02.jpg', alt: 'Panel por roles' },
      { src: '/evidence/sga-almuerzos/03.jpg', alt: 'Reportes y gestión contable' },
    ],
    videoUrl: '',
    resultados: [
      'Validación más rápida en recepción con biometría.',
      'Reducción de errores y filas del sistema manual.',
      'Mejor control de pagos y asistencia por rol.',
      'Reportes automáticos para la institución.',
    ],
  },
  {
    id: 'crud-usuarios',
    title: 'Sistema CRUD de Usuarios',
    subtitle: 'Gestión de usuarios y perfiles · Proyecto académico',
    description: 'Módulo completo de administración de usuarios con creación, edición, listado y eliminación. Incluye validaciones, paginación y búsqueda. Integrable en sistemas empresariales.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    featured: false,
    realClient: false,
    images: [
      { src: '/evidence/crud-usuarios/01.jpg', alt: 'Listado de usuarios' },
      { src: '/evidence/crud-usuarios/02.jpg', alt: 'Formulario de edición' },
    ],
    videoUrl: '',
    resultados: [
      'Gestión centralizada de usuarios y perfiles.',
      'Validaciones y búsqueda para operación ágil.',
      'Base reutilizable para sistemas más grandes.',
    ],
  },
  {
    id: 'panel-admin',
    title: 'Panel Administrativo con Autenticación',
    subtitle: 'Dashboard seguro · Base para sistemas internos',
    description: 'Panel de administración con login, recuperación de contraseña y dashboard protegido por roles. Diseñado para ser la base de sistemas internos o de gestión.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    featured: false,
    realClient: false,
    images: [
      { src: '/evidence/panel-admin/01.jpg', alt: 'Login y dashboard' },
      { src: '/evidence/panel-admin/02.jpg', alt: 'Vista protegida por roles' },
    ],
    videoUrl: '',
    resultados: [
      'Acceso seguro con roles y recuperación de contraseña.',
      'Base lista para extender con módulos de negocio.',
    ],
  },
]

export const techStack = {
  backend: ['Laravel', 'PHP', 'MySQL'],
  frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
  tools: ['Git', 'XAMPP'],
}

export const contact = {
  email: 'luisferfuentesmontoya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luisferfuentesmontoya202506',
  github: 'https://github.com/Fer969',
  cvUrl: '/cv/Luisfer-Montoya-HojaVida-2026.pdf',
}
