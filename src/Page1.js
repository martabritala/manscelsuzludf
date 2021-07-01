import { html } from 'https://unpkg.com/htm/preact/standalone.module.js'

import { useHtmlTitle } from './use-html.js'

import { Header, Main, Hero, PageHeading, Page, Footer, MapImage, makeParagraph } from './Layout.js'
import { useRoute } from './routing.js'

const P = makeParagraph({
  style: {
    color: '#fff'
  }
});

const heading = {
  lv: 'Manas mājas Akmeņu ielā',
  en: 'My home on Akmeņu street',
};

const mapLink = 'https://www.openstreetmap.org/?mlat=56.93866&mlon=24.09571#map=17/56.93866/24.09571&layers=H';

const hero = {
  lv: "./images/majas1.png",
  en: "./images/majas1EN.png",
};

const content = {
  lv: html`
    <${PageHeading}>${heading.lv}<//>
    <${P}>
    Manai mājai jau vairāk nekā 150 gadu! <br /> <br />Sākotnēji tā tika būvēta pie
    Pārdaugavas pirmās bruģētās – tāpēc nosaukums Akmeņu - ielas. Lai
    gan nezinu – pirmā bija iela vai māja? Savulaik mājā atradusies slimnīca.
    Kad biju maza, uz sienas bija pat vēl saskatāmi burti no agrākā ēkas
    nosaukuma. Šobrīd esam atdalījušies no Rīgas Namu pārvaldnieka un kā biedrība veicam mājas
    atjaunošanu.
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m56!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m41!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!4m5!1s0x46eecfd3e3e99037%3A0xd7e42c25953bdc3b!2s%C3%92pera%20Nacional%20de%20Let%C3%B2nia%2C%20Aspazijas%20bulv%C4%81ris%2C%20Centra%20rajons%2C%20R%C4%ABga!3m2!1d56.949433299999995!2d24.113591!4m5!1s0x46eecfd3cdaa69c7%3A0x16a2b44d483ec349!2zTGF0dmlqYXMgVW5pdmVyc2l0xIF0ZSwgUmFpxYZhIGJ1bHbEgXJpcywgQ2VudHJhIHJham9ucywgUsSrZ2E!3m2!1d56.950809799999995!2d24.1163132!5e0!3m2!1slv!2slv!4v1625174941626!5m2!1slv!2slv" 
    style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    Par māju vairāk stāstīts ciklā „Ielas garumā”.
    <//>
  `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
      My home is older than 150 years! <br /><br /> It was built by the first 
      stone road in Pārdaugava. That is why the street name is "Akmeņu" (stone) street.
      Although I am not sure wether the street or the house was first.
      When I was little the name of the building was still visible on the wall.
      Currenty we have left Rīgas Namu Pārvaldnieks and have made a union to renovate our home. 
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m56!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m41!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!4m5!1s0x46eecfd3e3e99037%3A0xd7e42c25953bdc3b!2s%C3%92pera%20Nacional%20de%20Let%C3%B2nia%2C%20Aspazijas%20bulv%C4%81ris%2C%20Centra%20rajons%2C%20R%C4%ABga!3m2!1d56.949433299999995!2d24.113591!4m5!1s0x46eecfd3cdaa69c7%3A0x16a2b44d483ec349!2zTGF0dmlqYXMgVW5pdmVyc2l0xIF0ZSwgUmFpxYZhIGJ1bHbEgXJpcywgQ2VudHJhIHJham9ucywgUsSrZ2E!3m2!1d56.950809799999995!2d24.1163132!5e0!3m2!1slv!2slv!4v1625174941626!5m2!1slv!2slv" 
    style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
      There is more information about the building in the documentary series „Ielas garumā”.
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
            #cd594a
          `,
        }}
      >
        ${content[language]}
      <//>
    <//>
    <${Footer} position="static" background="var(--text-blue)" />
  `;
}