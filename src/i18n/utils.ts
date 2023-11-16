import { ui, DEFAULT_LANGUAGE, language, showDefaultLang } from './ui'

type UI = typeof ui
type Language = keyof typeof language

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in ui && (lang === 'en' || lang === 'es')) {
    return lang as Language
  }
  return DEFAULT_LANGUAGE
}

export function useTranslations(lang: Language) {
  return function t(key: keyof UI[Language]) {
    return ui[lang][key] || ui[DEFAULT_LANGUAGE as Language][key]
  }
}

export function useTranslationPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === DEFAULT_LANGUAGE ? path : `/${l}${path}`
  }
}
