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
    Baznīca sena kā Rīga – vairāk nekā astoņsimts gadus stāvējusi, dažādus
    laikus piedzīvojusi. Bijusi gan tirgotāju lūgšanu un sanāksmju vieta, gan
    apbedīšanas vieta, tās dārgumus iznīcinājuši melngalvju organizētie
    svētbilžu un citu relikviju postītāji. Nezinu, kad baznīcā tika uzstādīts
    zibensnovedējs, bet tā savā laikā sasperta veselas sešas reizes. Arī otrais
    pasaules karš to nav žēlojis, tomēr kopš 1984. gada tā ar savu divus reiz
    pusotru metru lielo gaili stāv lepna un no augšas noraugās uz savām
    pārējām māsām.
    <br /><br />
    Man patīk miers, mūžības un reizē niecības sajūta, ko dāvā šī milzu ēka,
    ko uztveru kā Rīgas un varbūt pat visas dzīves simbolu. Tā vedina
    pacelties pāri ikdienai un atgādina – pastāvēs, kas pārmainīsies.    
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!5e0!3m2!1slv!2slv!4v1625176932600!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    Vairāk par Pēterbaznīcu <a href="https://peterbaznica.riga.lv/"> baznīcas mājaslapā </a> 
    <//>
    `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
    The church is as old as Riga - it has stood for more than eight hundred years, 
    it has experienced many different times. It was both a place of prayer and meeting for merchants, 
    and a place of burial, but its treasures were destroyed by destroyers of idols and 
    other relics organized by the blackheads. I don't know when a lightning conductor was 
    installed in the church, but it has been hit six times in the past. 
    World War II did not spare it either, but since 1984 it has been proud of its 
    two by one and a half meter rooster and is looking at its other sisters from above.
    <br /><br />
    I like the peace, eternity and at the same time the feeling of futility
     given by this giant building, which I perceive as a symbol of Riga and maybe even the whole life. 
     It leads to rise above the everyday and reminds us - What changes, endures.    
     <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!5e0!3m2!1slv!2slv!4v1625176932600!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    More about Riga Saint Peter's Church <a href="https://peterbaznica.riga.lv/"> on their website. </a> 
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