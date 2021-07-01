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
    <${MapImage} src="./images/map.akmenu.png" href=${mapLink} />
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
    <${MapImage} src="./images/map.akmenu.png" href=${mapLink} />
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
      <${Hero} src="./images/majas1.png" />
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