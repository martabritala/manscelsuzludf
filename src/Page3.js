import { html } from 'https://unpkg.com/htm/preact/standalone.module.js'

import { useHtmlTitle } from './use-html.js'

import { Header, Main, Hero, PageHeading, Page, Footer, MapImage, makeParagraph } from './Layout.js'
import { useRoute } from './routing.js'

const P = makeParagraph({
  style: {
    color: '#FEE715',
  }
});

const heading = {
  lv: `Akmens tilts`,
  en: `Stone bridge`,
};

const mapLink = 'https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H';

const content = {
  lv: html`
    <${PageHeading}>${heading.lv}<//>
    <${P}>
      Astonishment rings of Uranus billions upon billions prime number
      Hypatia Rig Veda. Not a sunrise but a galaxyrise shores of the
      cosmic ocean Sea of Tranquility of brilliant syntheses something
      incredible is waiting to be known Orion's sword. Vastness is
      bearable only through love dispassionate extraterrestrial
      observer network of wormholes finite but unbounded a mote of dust
      suspended in a sunbeam tendrils of gossamer clouds. Rich in
      mystery a very small stage in a vast cosmic arena the ash of
      stellar alchemy made in the interiors of collapsing stars are
      creatures of the cosmos two ghostly white figures in coveralls
      and helmets are softly dancing and billions upon billions upon
      billions upon billions upon billions upon billions upon billions.
    <//>
    <${MapImage} src="./images/map.biblene.png" href=${mapLink} />
    <${P}>
      Cosmos at the edge of forever Hypatia Flatland tingling of the
      spine something incredible is waiting to be known. Tesseract take
      root and flourish invent the universe made in the interiors of
      collapsing stars kindling the energy hidden in matter the only
      home we've ever known? A still more glorious dawn awaits rich in
      heavy atoms the only home we've ever known great turbulent clouds
      great turbulent clouds vastness is bearable only through love?
    <//>
  `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
      Contrary to popular belief, Lorem Ipsum is not simply random
      text. It has roots in a piece of classical Latin literature from
      45 BC, making it over 2000 years old. Richard McClintock, a Latin
      professor at Hampden-Sydney College in Virginia, looked up one of
      the more obscure Latin words, consectetur, from a Lorem Ipsum
      passage, and going through the cites of the word in classical
      literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
      BC. This book is a treatise on the theory of ethics, very popular
      during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section 1.10.32.
    <//>
    <${MapImage} src="./images/map.biblene.png" href=${mapLink} />
    <${P}>
      Invent the universe corpus callosum Hypatia encyclopaedia
      galactica dispassionate extraterrestrial observer Rig Veda.
      Decipherment two ghostly white figures in coveralls and helmets
      are softly dancing Euclid tingling of the spine of brilliant
      syntheses not a sunrise but a galaxyrise. Courage of our
      questions a very small stage in a vast cosmic arena two ghostly
      white figures in coveralls and helmets are softly dancing bits of
      moving fluff network of wormholes a very small stage in a vast
      cosmic arena and billions upon billions upon billions upon
      billions upon billions upon billions
    <//>
  `,
}

export default function HomePage() {
  const { language } = useRoute();
  useHtmlTitle(heading);

  return html`
    <${Header} />
    <${Main}
      style=${{
        background: `
          url(./images/subpat.folk.png) center center / 800px repeat,
          var(--header-bg-blue)
        `,
      }}
    >
      <${Hero} src="./images/posms3.png" />
      <${Page}
        style=${{
          background: `
            url(./images/subpat.folk.png) center center / 400px repeat,
            #5a5934
          `,
        }}
      >
        ${content[language]}
      <//>
    <//>
    <${Footer} position="static" background="var(--text-blue)" />
  `;
}