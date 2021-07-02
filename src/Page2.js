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
  lv: `Latvijas Nacionālā bibliotēka`,
  en: `National Library of Latvia`,
};

const mapLink = 'https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H';

const content = {
  lv: html`
    <${PageHeading}>${heading.lv}<//>
    <${P}>
    Kad vēl gāju skolas pirmajās klasītēs, ik rītu devos uz skolu pa šo Valguma
    ielas posmu, kur bibliotēkas vietā atradās automašīnu stāvlaukums, veci
    šķūņi, tādas kā noliktavu un varbūt pat nabadzīgas dzīvojamās ēkas. Bija
    interesanti vērot, kā viss tiek notīrīts un tā vietā pamazām paceļas
    Nacionālās bibliotēkas ēka. Varētu pat teikt, ka esmu piedalījusies tās
    radīšanā, jo kopā ar kori "Kamēr..." dziedājām pamatakmens ielikšanas
    ceremonijā. <br />
    Vēl gluži personiski jāpiemin, ka uz bibliotēkas spicē
    novietotā flīģeļa kādas ekskursijas laikā pats pēc savas iniciatīvas – bet,
    protams, ar ekskursijas vadītājas atļauju – nelielu koncertu ir sniedzis
    manas māsas grieķu vīrs Aris, kurš ir profesionāls pianists.
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!5e0!3m2!1slv!2slv!4v1625177115380!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    Vairāk par Latvijas Nacionālo bibliotēku: <a href="https://lnb.lv/"> LNB mājaslapā </a> 
    <//>
    `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
    When I was still in the first grades of school, I went to school every morning along this section of Valguma Street, where instead of the library there was a parking lot, 
    old barns, such as a warehouse and some poor residential buildings. It was interesting to see everything cleaned up and the National Library building gradually rising up instead. 
    You could even say that I have participated in its creation, because together with the youth choir "Kamēr..." we sang in the laying of the foundation stone ceremony. <br />
    It should also be personally mentioned that during a tour, on the grand piano at the top of the library a small concert was given by my sister's Greek husband Aris, who is a professional pianist, on his own initiative - but of course with the permission of the tour guide.    
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!5e0!3m2!1slv!2slv!4v1625177115380!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    More about the National Library of latvia <a href="https://lnb.lv/"> their website </a> 
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
      <${Hero} src="./images/posms2.png" />
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