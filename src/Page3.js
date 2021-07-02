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

const hero = {
  lv: "./images/posms3.png",
  en: "./images/posms3EN.png",
};

const mapLink = 'https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H';

const content = {
  lv: html`
    <${PageHeading}>${heading.lv}<//>
    <${P}>
      Akmens tilts ir viens no tiltiem pāri Daugavai. Manuprāt Akmens tilts ir vislabāk piemērotais no tiltiem gājējiem. 
      Gan tāpēc, ka tam ir viegla uziešana un noiešana no tilta, gan arī tāpēc, ka tā novietojums ir pretī Vecrīgai, 
      kas ir paredzēta gājējiem. Domāju, ka abi šie iemesli ir saistīti ar to, ka tilts būvēts āgrāk bijušā pontonu tilta vietā. 
      Katrā ziņā, ja arī varbūt kāds gājējs vēlas iet pāri cietiem tiltiem, tad tomēr neapšaubāmi var teikt, ka
      Akmens tilts ir greznākais no visiem tiltiem pāri Daugavai Rīgā. 
      Visa tā garumā margas ir rotātas ar ornamentiem, tam ir vairākas greznas laternas. 
      Arī Daugavas krastā blakus tiltam ir izgreznotas margas. 
      Ziemā "Staro Rīga" laikā pāri Akmens tiltam ir ļoti skaisti iet, jo var redzēt skaisti izgaismotu dzelzceļa tiltu 
      un spīdošo Swedbank ēku. Arī Latvijas Nacionālā bibliotēka ir skaista ēka Akmens tiltam blakus.
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!5e0!3m2!1slv!2slv!4v1625177071398!5m2!1slv!2slv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    Vairāk par Akmens tiltu<a href="https://lv.wikipedia.org/wiki/Akmens_tilts"> Vikipēdijā </a> 
    <//>
  `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
    The stone bridge is one of the bridges over the river Daugava. In my opinion, the Stone Bridge is the best of the bridges for pedestrians.
    Both because it has easy access to and exit from the bridge, and also because its location is opposite the Old Town, which is intended for pedestrians. I think both of these reasons are due to the fact that the bridge was built earlier on the site of the former pontoon bridge.
    In any case, if maybe a pedestrian wants to cross the solid bridges, then it can definitely be said that the Stone Bridge is the most ornamental of all the bridges over Daugava in Riga.
    Throughout its length, the railings are decorated with ornaments, it has several luxurious lanterns.
    There are also ornamental railings on the bank of the Daugava next to the bridge.
    In winter, during the "Staro Rīga" festival, it is very beautiful to walk across the Stone Bridge, because you can see a beautifully lit railway bridge and the shining Swedbank building. The National Library of Latvia is also a beautiful building next to the Stone Bridge.    
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m32!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m17!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!5e0!3m2!1slv!2slv!4v1625177071398!5m2!1slv!2slv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    More about the Stone bridge <a href="https://lv.wikipedia.org/wiki/Akmens_tilts"> on Wikipedia </a> 
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