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
    'home.store': ' liderando empresa de computación.',
    'home.year': 'año',
    'home.years': 'años',

    'experience.title': 'Experiencia',
    'projects.title': 'Proyectos',
  },
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'home.buttonCV': 'Download CV',
    'home.webExperience': ' of web development experience.',
    'home.store': ' leading company of computing.',
    'home.year': 'year',
    'home.years': 'years',

    'experience.title': 'Experience',
    'projects.title': 'Projects',
  },
} as const
