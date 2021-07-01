import { html } from 'https://unpkg.com/htm/preact/standalone.module.js'

import { useRoute } from './routing.js'
import { useHtmlTitle } from './use-html.js'

import { Header, Main, Footer } from './Layout.js'

const heading = {
  lv: `Mans ceļš uz Latvijas Universitāti`,
  en: `My Path to University of Latvia`,
};

export default function HomePage() {
  useHtmlTitle(heading, true);

  return html`
    <${Header} />
    <${Main}
      style=${{
        background: `
          url(./images/HomePage.png) center center / 100% no-repeat,
          url(./images/dflogobw.png) center center / 100px repeat
        `,
        overflow: 'hidden',
      }}
    >
      <${HeroHeading} />
      <${Heart} />
    <//>
    <${Footer} position="fixed" background="transparent" />
  `;
}

function Heart() {
  return html`
    <img
      alt="Sirds"
      src="./images/sirds.png"
      style=${{
        alignSelf: 'center',
        position: 'absolute',
        width: '20vh',
        bottom: '5vh',
      }}
    />
  `;
}

function HeroHeading() {
  const { language } = useRoute();

  return html`
    <h1
      style=${{
        color: 'var(--text-yellow)',
        padding: '0 5vw',
        textAlign: 'left',
        fontSize: 'calc(20px + 3vw)',
        textShadow: '2px 2px 0 #000',
        zIndex: 10,
      }}
    >
      ${
        (language == "en")
        ? html`My Path to<br />University of Latvia<br />Faculty of Computing`
        : html`Mans ceļš uz<br />Latvijas Universitātes<br />Datorikas fakultāti`
      }
    </h1>
  `;
}