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
  lv: `Pēterbaznīca`,
  en: `Saint Peter's Church`,
};

const hero = {
  lv: "./images/posms5.png",
  en: "./images/posms5EN.png",
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!5e0!3m2!1slv!2slv!4v1625176932600!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!5e0!3m2!1slv!2slv!4v1625176932600!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
          url(./images/dflogobw.png) center center / 100px repeat,
          var(--header-bg-blue)
        `,
      }}
    >
    <${Hero} src=${hero[language]} />
    <${Page}
        style=${{
          background: `
            url(./images/fons.png) center center / 40px repeat,
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