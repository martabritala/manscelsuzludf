import { html } from 'https://unpkg.com/htm/preact/standalone.module.js'

import { useHtmlTitle } from './use-html.js'

import { Header, Main, Hero, PageHeading, Page, Footer, MapImage, makeParagraph } from './Layout.js'
import { useRoute } from './routing.js'

const P = makeParagraph({
  style: {
    color: '#FEE715',
  }
});

const hero = {
  lv: "./images/posms4.png",
  en: "./images/posms4EN.png",
};

const heading = {
  lv: `Rīgas Tehniskā Universitāte`,
  en: `Riga Technical University`,
};

const mapLink = 'https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H';

const content = {
  lv: html`
    <${PageHeading}>${heading.lv}<//>
    <${P}>
    Rīgas Tehniskā universitāte ir vecākā universitāte Latvijā un šogad pasaules universitāšu reitingā atzīta par labāko Latvijā.
    Konkrēti ēka Kaļķa ielā 1 netiek izmantota mācībām. Pārsvarā mācību ēkas atrodas Ķīpsalā. 
    Bet galvenajā ēkā ir skaista liela zāle, kurā tiekas un muzicē daudz kolektīvu. 
    Es gan no RTU kolektīviem esmu piedalījusies tikai vienā - jauktajā korī "Vivere". 
    Rīgas Tehniskās universitātes zālē mājvieta ir arī Studentu Pūtēju Orķestrim - SPO. 
    <br />
    Skolas laikā bieži apmeklēju RTU lielo zāli, jo tur katra mēneša pēdējā otrdienā notika
    Rīgas Danču kluba rīkotie 3x3 latviešu danču vakari. Tagad, par tiem iedomājoties, sāk gribēties atkal dejot.
    <//>
    <${MapImage} src="./images/map.biblene.png" href=${mapLink} />
    <${P}>
    Vairāk par Rīgas Tehnisko universitāti: <a href="https://www.rtu.lv/"> RTU mājaslapā </a> 
    <//>
  `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
    Riga Technical University is the oldest university in Latvia and this year is recognized as the best in Latvia in the ranking of world universities.
    Specifically, the building at Kaļķa Street 1 is not used for studies. Most of the buildings for students and studies are located in Ķīpsala.
    But in the main building there is a beautiful big hall where a lot of bands meet and practice music.
    However, I have participated in only one of them - the mixed choir "Vivere".
    The hall of Riga Technical University is also home to the Student Wind Band "SPO".
    <br />
    During school I often visited the big hall of RTU, because there were Latvian dance evenings from camp "3x3" organized by Riga Dance Club on the last Tuesday of every month. Now, thinking about them, I start wanting to dance again.    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m38!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m23!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!5e0!3m2!1slv!2slv!4v1625177003491!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <${P}>
    More about Riga Technical university on <a href="https://www.rtu.lv/"> their website </a> 
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