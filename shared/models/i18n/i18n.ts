export const LOCALE_FILES = [ 'player', 'server' ]

export const I18N_LOCALES = {
  'ca-ES': 'Català',
  'cs-CZ': 'Čeština',
  'de-DE': 'Deutsch',
  'el-GR': 'ελληνικά',
  'en-US': 'English',
  'eo': 'Esperanto',
  'es-ES': 'Español',
  'eu-ES': 'Euskara',
  'fi-FI': 'suomi',
  'fr-FR': 'Français',
  'gd': 'Gàidhlig',
  'hu-HU': 'magyar',
  'it-IT': 'Italiano',
  'ja-JP': '日本語',
  'nl-NL': 'Nederlands',
  'oc': 'Occitan',
  'pl-PL': 'Polski',
  'pt-BR': 'Português (Brasil)',
  'pt-PT': 'Português (Portugal)',
  'ru-RU': 'русский',
  'sv-SE': 'svenska',
  'th-TH': 'ไทย',
  'zh-Hans-CN': '简体中文（中国）',
  'zh-Hant-TW': '繁體中文（台灣）'
}

const I18N_LOCALE_ALIAS = {
  'ca': 'ca-ES',
  'cs': 'cs-CZ',
  'de': 'de-DE',
  'en': 'en-US',
  'es': 'es-ES',
  'eu': 'eu-ES',
  'fi': 'fi-FI',
  'fr': 'fr-FR',
  'hu': 'hu-HU',
  'nl': 'nl-NL',
  'pl': 'pl-PL',
  'pt': 'pt-PT',
  'ru': 'ru-RU',
  'sv': 'sv-SE',
  'th': 'th-TH',
  'zh': 'zh-Hans-CN',
  'zh-CN': 'zh-Hans-CN',
  'zh-TW': 'zh-Hant-TW'
}

export const POSSIBLE_LOCALES = Object.keys(I18N_LOCALES)
                                      .concat(Object.keys(I18N_LOCALE_ALIAS))

export function getDefaultLocale () {
  return 'en-US'
}

export function isDefaultLocale (locale: string) {
  return getCompleteLocale(locale) === getCompleteLocale(getDefaultLocale())
}

export function peertubeTranslate (str: string, translations?: { [ id: string ]: string }) {
  // FIXME: remove disable rule when the client is upgraded to typescript 3.7
  // eslint-disable-next-line
  return translations && translations[str] ? translations[str] : str
}

const possiblePaths = POSSIBLE_LOCALES.map(l => '/' + l)
export function is18nPath (path: string) {
  return possiblePaths.indexOf(path) !== -1
}

export function is18nLocale (locale: string) {
  return POSSIBLE_LOCALES.indexOf(locale) !== -1
}

export function getCompleteLocale (locale: string) {
  if (!locale) return locale

  if (I18N_LOCALE_ALIAS[locale]) return I18N_LOCALE_ALIAS[locale]

  return locale
}

export function getShortLocale (locale: string) {
  if (locale.indexOf('-') === -1) return locale

  return locale.split('-')[0]
}

export function buildFileLocale (locale: string) {
  return getCompleteLocale(locale)
}
