import { html, useMemo } from 'https://unpkg.com/htm/preact/standalone.module.js'
import { makeHref, useRoute } from './routing.js'

function TopLink({ index }) {
  const {language, page} = useRoute();

  const scrollToTop = () => {
      window.scrollTo(0, 0);
  }

  return html`
    <a
      onclick=${scrollToTop}
      href=${makeHref(language, index)}
      style=${{
        width: '5vmin',
        height: '5vmin',
        fontSize: '2.9vmin',
        fontWeight: 'bold',
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        color: (page == index) ? 'var(--text-blue)' : 'var(--text-yellow)',
        margin: '0 2vw',
        textDecoration: 'none',
        textAlign: 'center',
        borderRadius: '50%',
        background: (page == index) ? 'var(--text-yellow)' : undefined,
        border: '2px solid var(--text-yellow)',
      }}
    >
      ${index}
    </a>
  `;
}

export function Header() {
  const { language } = useRoute();

  return html`
    <header
      style=${{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        position: 'fixed',
        left: 0, right: 0,
        height: '10vh',
        background: 'var(--header-bg-blue)',
      }}
    >
      <a
        href=${makeHref(language)}
        title="Mans ceļs uz LUDF"
        style=${{
          flex: '1 0 auto',
          minWidth: 60,
          lineHeight: 0,
          alignSelf: 'stretch',
          background: 'url(./images/mans-cels.png)',
          backgroundPosition: 'right',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </a>
      <div
        style=${{
          flex: '1 0 auto',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <${TopLink} index="1" />
        <${TopLink} index="2" />
        <${TopLink} index="3" />
        <${TopLink} index="4" />
        <${TopLink} index="5" />
        <${TopLink} index="6" />
        <${TopLink} index="7" />
      </div>
      <${LanguageSwitcher} />
    </header>
  `;
}

function LanguageSwitcher() {
  const { language, page } = useRoute();

  return html`
    <a
      href=${makeHref((language == 'lv' ? 'en' : 'lv'), page)}
      title=${language == 'lv' ? 'English' : 'Latviešu'}
      style=${{
        flex: '0 0 auto',
        color: 'var(--text-yellow)',
        margin: '0 3vw',
        textDecoration: 'none',
        fontSize: 'calc(15px + 1vw)',
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
      }}
    >
      ${language == 'lv' ? 'EN' : 'LV'}
    </a>
  `;
}

export function Main({ children, style }) {
  const comboStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    ...style,
  }), [style]);

  return html`
    <main style=${comboStyle}>
      ${children}
    </main>
  `;
}

export function Hero({ background }) {
  return html`
    <section
      style=${{
        height: '80vh',
        background: background,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  `;
}

export function PageHeading({ children }) {
  return html`
    <h2
      style=${{
        textAlign: 'center',
        color: 'white',
        fontSize: 'calc(25px + 1vw)',
        textShadow: '2px 2px 0 #000',
        margin: '30px 0 35px 0',
    }}>
      ${children}
    </h2>
  `;
}

export function Page({ children, style }) {
  return html`
    <section
      style=${{
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style=${{
          flex: '1 0 auto',
          maxWidth: '800px',
          padding: '20px 0 40px 0',
          margin: '0 auto',
          ...style,
        }}
      >
        ${children}
      </div>
    </section>
  `;
}

export function MapImage({ href, src }) {
  return html`
    <a href=${href} target="_blank">
      <div
        style=${{
          height: '35vh',
          background: `url(${src}) center center / cover no-repeat`,
          margin: '50px 0',
        }}
      />
    </a>
  `;
}

export function Footer({ position, background }) {
  return html`
    <footer
      style=${{
        color: 'white',
        position: position,
        left: 0, right: 0, bottom: 0,
        background: background,
        lineHeight: '54px',
        textAlign: 'center',
        fontSize: '16px',
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
      }}
    >
      © Marta Britāla 2021
    </footer>
  `;
}

function Paragraph({ style, children }) {
  const comboStyle = useMemo(() => ({
    margin: '20px 0',
    color: 'black',
    padding: '0 5vw',
    ...style,
  }), [style]);

  return html`
    <p style=${comboStyle}>
      ${children}
    </p>
  `;
}

export function makeParagraph({ style: predefStyle, ...predefined }={}) {
  return ({ style, ...props }) => html`
    <${Paragraph} ...${predefined} style=${{...predefStyle, ...style }} ...${props}  />
  `;
}
