import { html, render, useEffect } from 'https://unpkg.com/htm/preact/standalone.module.js'

import { Router, useRoute } from './src/routing.js'

import HomePage from './src/HomePage.js'
import Page1 from './src/Page1.js'
import Page2 from './src/Page2.js'
/*import Page3 from './src/Page3.js'
import Page4 from './src/Page4.js'
import Page5 from './src/Page5.js'
import Page6 from './src/Page6.js'
import Page7 from './src/Page7.js'*/

const Pages = [HomePage, Page1, Page2,/*Page3, Page4, Page5, Page6, Page7*/];

function App() {
  return html`
    <${Router}>
      <${SectionSwitch} />
    <//>
  `;
}

function SectionSwitch() {
  const { language, page } = useRoute();

  // set <html lang="?"> attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return html`
    <${Pages[page]} />
  `;
}

render(html`<${App} />`, document.body);
