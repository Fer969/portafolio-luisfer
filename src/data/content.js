/**
 * Contenido centralizado del portafolio.
 * Facilita mantenimiento y posibles futuras traducciones.
 */

export const hero = {
  name: 'Luisfer Fuentes Montoya',
  title: 'Desarrollador Web Full Stack',
  stack: ['Laravel', 'PHP', 'React', 'MySQL'],
  message: 'Diseño y desarrollo de sistemas empresariales funcionales que resuelven problemas reales y mejoran la operación de las organizaciones.',
}

export const about = {
  paragraphs: [
    'Desarrollador de software con experiencia real en entorno empresarial. Me especializo en el diseño e implementación de sistemas web completos que cubren desde la autenticación y control de acceso hasta módulos administrativos, reportes y trazabilidad de procesos.',
    'Trabajo con Laravel como backend principal, construyendo APIs robustas y lógica de negocio mantenible. En frontend, aplico React para interfaces modernas y responsivas. El resultado: sistemas que se integran en el día a día de las empresas y facilitan la toma de decisiones con datos confiables.',
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

export const projects = [
  {
    id: 'sga-almuerzos',
    title: 'Sistema de Gestión para Almuerzos (SGA)',
    subtitle: 'Proyecto de validación etapa lectiva SENA · CEFA Angostura',
    description: 'Sistema web de gestión de almuerzos con identificación biométrica para el SENA Angostura. Digitaliza el registro (reemplaza el sistema manual con largas filas y errores). Incluye módulos por rol (Administrador, Funcionario, Aprendiz), registro de asistencia por huella digital, gestión contable, reportes automáticos y administración de usuarios. Desarrollado y entregado satisfactoriamente.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Biometría'],
    featured: true,
  },
  {
    id: 'piscicola',
    title: 'Sistema de Gestión Piscícola',
    subtitle: 'Sistema empresarial completo',
    description: 'Sistema web de gestión para empresa piscícola: autenticación, módulos administrativos, reportes, alertas y trazabilidad. Backend en Laravel, base de datos MySQL, frontend integrado.',
    stack: ['Laravel', 'PHP', 'MySQL', 'React', 'Git'],
    featured: true,
  },
  {
    id: 'crud-usuarios',
    title: 'Sistema CRUD de Usuarios',
    subtitle: 'Gestión de usuarios y perfiles',
    description: 'Módulo completo de administración de usuarios con creación, edición, listado y eliminación. Incluye validaciones, paginación y búsqueda. Integrable en sistemas empresariales.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    featured: false,
  },
  {
    id: 'panel-admin',
    title: 'Panel Administrativo con Autenticación',
    subtitle: 'Dashboard seguro',
    description: 'Panel de administración con login, recuperación de contraseña y dashboard protegido por roles. Diseñado para ser la base de sistemas internos o de gestión.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    featured: false,
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
}
