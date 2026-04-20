export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.archive': 'Arquivo',
    'nav.tags': 'Tags',
    'search.placeholder': 'Buscar posts...',
    'filter.all': 'Todos',
    'post.readMore': 'Ler mais',
    'post.publishedOn': 'Publicado em',
    'post.minuteRead': 'min de leitura',
    'post.availableIn': 'Disponível em',
    'footer.madeWith': 'Feito com',
    'footer.by': 'por Vinicius Buscacio',
    'pagination.prev': 'Anterior',
    'pagination.next': 'Próxima',
    'lang.switch': 'Idioma',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.archive': 'Archive',
    'nav.tags': 'Tags',
    'search.placeholder': 'Search posts...',
    'filter.all': 'All',
    'post.readMore': 'Read more',
    'post.publishedOn': 'Published on',
    'post.minuteRead': 'min read',
    'post.availableIn': 'Available in',
    'footer.madeWith': 'Made with',
    'footer.by': 'by Vinicius Buscacio',
    'pagination.prev': 'Previous',
    'pagination.next': 'Next',
    'lang.switch': 'Language',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre',
    'nav.archive': 'Archivo',
    'nav.tags': 'Tags',
    'search.placeholder': 'Buscar posts...',
    'filter.all': 'Todos',
    'post.readMore': 'Leer más',
    'post.publishedOn': 'Publicado el',
    'post.minuteRead': 'min de lectura',
    'post.availableIn': 'Disponible en',
    'footer.madeWith': 'Hecho con',
    'footer.by': 'por Vinicius Buscacio',
    'pagination.prev': 'Anterior',
    'pagination.next': 'Siguiente',
    'lang.switch': 'Idioma',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}
