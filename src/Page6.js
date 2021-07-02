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
  lv: `Latvijas Nacionālā opera`,
  en: `Latvian National Opera`,
};

const hero = {
  lv: "./images/posms6.png",
  en: "./images/posms6EN.png",
};

const mapLink = 'https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H';

const content = {
  lv: html`
    <${PageHeading}>${heading.lv}<//>
    <${P}>
      Latvijas Nacionālajā operā esmu bijusi bieži. Gan uzstājoties, 
      gan apmeklējot daudz dažādu uzvedumu, baletu un lugu. 
      Sākotnēji operu apmeklējām ar vecmāmiņu, kura mums katrai uz 
      dzimšanas dienu vai vārda dienu dāvināja biļetes. Atceros, ka mazākajai
      māsai bija knapi 3 gadi, kad jau sēdējām un 3 stundas skatījāmies operas. 
      Arī bez vecmāmiņas mums bija daudz iespēju apmeklēt izrādes, jo, mācoties
      Emīla Dārziņa mūzikas vidusskolā, bija iespējams bez maksas tikt stāvvietās. 
      Vēlāk, kad pati uzstājos, iepazinu arī operas aizskatuvi. Tur gan ir labirints. 
      Klīst runas, ka varot arī vairākas dienas pa operas pazemes labirintiem klīst un ceļu ārā neatrast. 
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m50!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m35!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!4m5!1s0x46eecfd3e3e99037%3A0xd7e42c25953bdc3b!2s%C3%92pera%20Nacional%20de%20Let%C3%B2nia%2C%20Aspazijas%20bulv%C4%81ris%2C%20Centra%20rajons%2C%20R%C4%ABga!3m2!1d56.949433299999995!2d24.113591!5e0!3m2!1slv!2slv!4v1625176829371!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>  
    <${P}>
    Vairāk par Latvijas Nacionālo operu<a href="https://www.opera.lv/lv/"> tās mājaslapā </a> 
    <//>
    `,
  en: html`
    <${PageHeading}>${heading.en}<//>
    <${P}>
    I have been to the Latvian National Opera often. Both performing and attending many different operas, ballets and performances.
    Initially, we visited the opera with my grandmother, who gave us tickets for each birthday or name day. I remember that my younger sister was barely 3 years old when we were already sitting and watching opera for 3 hours.
    Even without my grandmother, we had many opportunities to attend performances, because while studying at the Emils Darzins Music School, it was possible to get standing tickets free of charge.
    Later, when I performed myself, I also got to know opera from behind the stage. What a maze there is!
    There are rumors that you can wander the underground labyrinths of the opera for several days and not find your way out.    
    <//>
    <iframe src="https://www.google.com/maps/embed?pb=!1m50!1m12!1m3!1d2554.763657950183!2d24.11266605874542!3d56.94429685694671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m35!3e2!4m5!1s0x46eed02f16154351%3A0xf48a69299f5788a1!2zQWttZcWGdSBpZWxhIDIyLCBaZW1nYWxlcyBwcmlla8WhcGlsc8STdGEsIFLEq2dhLCBMVi0xMDQ4LCBMYXR2aWph!3m2!1d56.938660399999996!2d24.0957306!4m3!3m2!1d56.9409546!2d24.0965249!4m5!1s0x46eed02815f1d127%3A0x30a1fb9c59059693!2sAkmens%20tilts!3m2!1d56.944773899999994!2d24.1013625!4m5!1s0x46eecfd7a81ed531%3A0x6bec487673a5b6ae!2zUlRVLCBLYcS8xLd1IGllbGEsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.9472011!2d24.1051693!4m5!1s0x46eecfd6962df1b3%3A0xd2275fc056cc9eec!2zUsSrZ2FzIFN2LiBQxJN0ZXJhIGJhem7Eq2NhLCBSZWZvcm3EgWNpamFzIExhdWt1bXMsIENlbnRyYSByYWpvbnMsIFLEq2dh!3m2!1d56.947533199999995!2d24.108645199999998!4m5!1s0x46eecfd3e3e99037%3A0xd7e42c25953bdc3b!2s%C3%92pera%20Nacional%20de%20Let%C3%B2nia%2C%20Aspazijas%20bulv%C4%81ris%2C%20Centra%20rajons%2C%20R%C4%ABga!3m2!1d56.949433299999995!2d24.113591!5e0!3m2!1slv!2slv!4v1625176829371!5m2!1slv!2slv" style="border:0;" allowfullscreen="" loading="lazy"></iframe>  
    <${P}>
    More on Latvian National Opera <a href="https://www.opera.lv/en/"> on their website </a> 
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