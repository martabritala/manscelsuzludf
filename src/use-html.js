import { useEffect } from 'https://unpkg.com/htm/preact/standalone.module.js'

import { useRoute } from './routing.js'

export function useHtmlTitle(titles, full) {
  const { language } = useRoute();

  useEffect(() => {
    document.title = (full)
      ? (language == "en" ? titles.en : titles.lv)
      : (language == "en" ? `My Path: ${titles.en}` : `Mans ceļš: ${titles.lv}`);
  }, [language]);
}
