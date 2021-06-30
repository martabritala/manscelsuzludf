import {
  html, createContext,
  useState, useEffect,
  useMemo, useContext } from 'https://unpkg.com/htm/preact/standalone.module.js'

const Location = createContext({
  route: null,
  setLanguage: null,
  setPage: null,
  setRoute: null,
});

// Extract language and site page number from location hash. Fall back to
// default language "lv" and page zero (0) if unspecified.
function parseHash() {
  let [_, language, page] = location.hash.replace(/^#/, '').split('/');
  if (language != 'en') {
    language = 'lv';
  }
  page = +page;
  if (!Number.isInteger(page) || page < 0 || page > 7) {
    page = 0;
  }
  return { language, page };
}

export function makeHref(newLang, newPage) {
  return `#/${newLang}` + (newPage ? `/${newPage}` : '');
}

// get/set route (language and page together)
export function useRoute() {
  const {
    route: { language, page },
    setRoute, setPage, setLanguage } = useContext(Location);
  return { language, page, setRoute, setPage, setLanguage };
}

// wrapper component that provides the routing context
export function Router({ children }) {
  const initialHash = useMemo(parseHash, []);
  const [route, setRoute] = useState({
    page: initialHash.page,
    language: initialHash.language
  });

  useEffect(() => {
    // update language/page state in response to hash change
    window.addEventListener('hashchange', () => {
      setRoute(parseHash());
    });
  }, []);

  const setHashLanguage = (newLang) => {
    location.hash = `#/${newLang}/${route.page}`;
  }

  const setHashPage = (newSect) => {
    location.hash = `#/${route.language}/${newSect}`;
  }

  const setHashRoute = (newLang, newSect) => {
    location.hash = `#/${newLang}/${newSect}`;
  }

  const routingContext = useMemo(() => ({
    route,
    setLanguage: setHashLanguage,
    setPage: setHashPage,
    setRoute: setHashRoute
  }), [route]);

  return html`
    <${Location.Provider} value=${routingContext}>
      ${children}
    <//>
  `;
}