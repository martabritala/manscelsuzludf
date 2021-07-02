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
  lv: `Latvijas Universitāte`,
  en: `University of Latvia`,
};

const hero = {
  lv: "./images/ludf7.png",
  en: "./images/ludf7EN.png",
};

const mapLink = 'https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H';

const content = {
  lv: html`
    <${PageHeading}>${heading.lv}<//>
    <${P}>
    Latvijas lielākā augstskola ar 13 fakultātēm. Īpaši mīļš objekts. 
    Iespējams jau, ka no dzimtas saknēm reizēm tiešām ir grūti aizbēgt. Te
    studējuši un strādājuši mani vecvecvecāki, vecmāmiņa, mamma un citi
    radinieki. Universitātes observatorijā vairākus gadus strādājuši abi mani
    vecāki. Atmodas sākumā tieši mamma bija tā, kura Univesitātes
    observatorijas tornī pieskatīja karogu un vienmēr no jauna apšuva vēja
    nopluskāto ārmalu. Kā viņa smejas – līdz brīdim, kad karogs bija gandrīz
    kļuvis kvadrātveida un nācās to nomainīt. <br />
    Joks, bet var jau būt, ka nevis es nespēju izturēt bez Universitātes, bet
    gan pati Universitāte nevarēja iztikt bez manis – jo ieradās man pakaļ ar
    abām savām jaunajām ēkām, kas atrodas turpat blakus manai mājai.
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m56!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m41!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!4m5!1s0x46eecfd3e3e99037%3A0xd7e42c25953bdc3b!2s%C3%92pera%20Nacional%20de%20Let%C3%B2nia%2C%20Aspazijas%20bulv%C4%81ris%2C%20Centra%20rajons%2C%20R%C4%ABga!3m2!1d56.949433299999995!2d24.113591!4m5!1s0x46eecfd3cdaa69c7%3A0x16a2b44d483ec349!2zTGF0dmlqYXMgVW5pdmVyc2l0xIF0ZSwgUmFpxYZhIGJ1bHbEgXJpcywgQ2VudHJhIHJham9ucywgUsSrZ2E!3m2!1d56.950809799999995!2d24.1163132!5e0!3m2!1slv!2slv!4v1625174941626!5m2!1slv!2slv" 
    style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    Vairāk par Latvijas Universitāti <a href="https://lu.lv/"> LU mājaslapā </a> 
    <//>
  `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
    The largest university in Latvia with 13 faculties. An especially loved object.
    It is possible that sometimes it is really difficult to escape from the roots of your family. My greatgrandparents, grandmother, mother and other relatives studied and worked here. Both my parents have worked at the University Observatory for several years. At the beginning of the Awakening, it was my mom who was tending to the Latvian flag in the tower of the University Observatory and always re-shrouded the wind-torn outer edge. As she laughs - until the flag had almost become square and had to be replaced.
    <br />
    It's a joke, but it may not be that I couldn't do without the University, but the University itself couldn't do without me - because it came after me with two new buildings, which are right around the corner of my house.
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m56!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m41!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!4m5!1s0x46eecfd3e3e99037%3A0xd7e42c25953bdc3b!2s%C3%92pera%20Nacional%20de%20Let%C3%B2nia%2C%20Aspazijas%20bulv%C4%81ris%2C%20Centra%20rajons%2C%20R%C4%ABga!3m2!1d56.949433299999995!2d24.113591!4m5!1s0x46eecfd3cdaa69c7%3A0x16a2b44d483ec349!2zTGF0dmlqYXMgVW5pdmVyc2l0xIF0ZSwgUmFpxYZhIGJ1bHbEgXJpcywgQ2VudHJhIHJham9ucywgUsSrZ2E!3m2!1d56.950809799999995!2d24.1163132!5e0!3m2!1slv!2slv!4v1625174941626!5m2!1slv!2slv" 
    style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    More about the University of Latvia <a href="https://lu.lv/"> on their website. </a> 
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