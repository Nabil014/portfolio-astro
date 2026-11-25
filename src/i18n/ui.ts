export const language = {
  en: 'English' as const,
  es: 'Español' as const,
}

export const DEFAULT_LANGUAGE: 'en' | 'es' = 'es'
export const showDefaultLang = false

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    'home.buttonCV': 'Descargar CV',
    'home.webExperience': ' de experiencia en el desarrollo web.',
    'home.store': ' liderando una empresa de informática.',
    'home.year': 'año',
    'home.years': 'años',

    'experience.title': 'Experiencia',
    'projects.title': 'Proyectos',
    'projects.demo': 'Ver demo',
    'projects.code': 'Código',
    'projects.tech': 'Tecnologías',
    'contact.title': 'Trabajemos juntos',
    'contact.email': 'Envíame un email',
  },
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'home.buttonCV': 'Download CV',
    'home.webExperience': ' of web development experience.',
    'home.store': ' leading an IT company.',
    'home.year': 'year',
    'home.years': 'years',

    'experience.title': 'Experience',
    'projects.title': 'Projects',
    'projects.demo': 'Live demo',
    'projects.code': 'Code',
    'projects.tech': 'Technologies',
    'contact.title': "Let's work together",
    'contact.email': 'Send me an email',
  },
} as const
