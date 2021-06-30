var e=Object.defineProperty,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(n,t,o)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,a=(e,a)=>{for(var r in a||(a={}))t.call(a,r)&&i(e,r,a[r]);if(n)for(var r of n(a))o.call(a,r)&&i(e,r,a[r]);return e},r=(e,i)=>{var a={};for(var r in e)t.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&n)for(var r of n(e))i.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a};import{createContext as s,useContext as l,useMemo as u,useState as c,useEffect as g,html as d,render as h}from"https://unpkg.com/htm/preact/standalone.module.js";const m=s({route:null,setLanguage:null,setPage:null,setRoute:null});function p(){let[e,n,t]=location.hash.replace(/^#/,"").split("/");return"en"!=n&&(n="lv"),t=+t,(!Number.isInteger(t)||t<0||t>7)&&(t=0),{language:n,page:t}}function f(e,n){return`#/${e}`+(n?`/${n}`:"")}function b(){const{route:{language:e,page:n},setRoute:t,setPage:o,setLanguage:i}=l(m);return{language:e,page:n,setRoute:t,setPage:o,setLanguage:i}}function v({children:e}){const n=u(p,[]),[t,o]=c({page:n.page,language:n.language});g((()=>{window.addEventListener("hashchange",(()=>{o(p())}))}),[]);const i=e=>{location.hash=`#/${e}/${t.page}`},a=e=>{location.hash=`#/${t.language}/${e}`},r=(e,n)=>{location.hash=`#/${e}/${n}`},s=u((()=>({route:t,setLanguage:i,setPage:a,setRoute:r})),[t]);return d`
    <${m.Provider} value=${s}>
      ${e}
    <//>
  `}function y(e,n){const{language:t}=b();g((()=>{document.title=n?"en"==t?e.en:e.lv:"en"==t?`My Path: ${e.en}`:`Mans ceļš: ${e.lv}`}),[t])}function $({index:e}){const{language:n,page:t}=b();return d`
    <a
      onclick=${()=>{window.scrollTo(0,0)}}
      href=${f(n,e)}
      style=${{width:"5vmin",height:"5vmin",fontSize:"2.9vmin",fontWeight:"bold",fontFamily:'"Comic Sans MS", "Comic Sans", cursive',color:t==e?"var(--text-blue)":"var(--text-yellow)",margin:"0 2vw",textDecoration:"none",textAlign:"center",borderRadius:"50%",background:t==e?"var(--text-yellow)":void 0,border:"2px solid var(--text-yellow)"}}
    >
      ${e}
    </a>
  `}function w(){const{language:e}=b();return d`
    <header
      style=${{display:"flex",justifyContent:"space-between",alignItems:"center",color:"white",position:"fixed",left:0,right:0,height:"10vh",background:"var(--header-bg-blue)"}}
    >
      <a
        href=${f(e)}
        title="Mans ceļs uz LU"
        style=${{flex:"1 0 auto",minWidth:60,lineHeight:0,alignSelf:"stretch",background:"url(/images/mans-cels.png)",backgroundPosition:"right",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}
      >
      </a>
      <div
        style=${{flex:"1 0 auto",textAlign:"center",display:"flex",justifyContent:"flex-start"}}
      >
        <${$} index="1" />
        <${$} index="2" />
        <${$} index="3" />
        <${$} index="4" />
        <${$} index="5" />
        <${$} index="6" />
        <${$} index="7" />
      </div>
      <${x} />
    </header>
  `}function x(){const{language:e,page:n}=b();return d`
    <a
      href=${f("lv"==e?"en":"lv",n)}
      title=${"lv"==e?"English":"Latviešu"}
      style=${{flex:"0 0 auto",color:"var(--text-yellow)",margin:"0 3vw",textDecoration:"none",fontSize:"calc(15px + 1vw)",fontFamily:'"Comic Sans MS", "Comic Sans", cursive'}}
    >
      ${"lv"==e?"EN":"LV"}
    </a>
  `}function k({children:e,style:n}){const t=u((()=>a({display:"flex",flexDirection:"column",justifyContent:"center"},n)),[n]);return d`
    <main style=${t}>
      ${e}
    </main>
  `}function L({background:e}){return d`
    <section
      style=${{height:"50vh",background:e,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}
    />
  `}function C({children:e}){return d`
    <h2
      style=${{textAlign:"center",color:"white",fontSize:"calc(25px + 1vw)",textShadow:"2px 2px 0 #000",margin:"30px 0 35px 0"}}>
      ${e}
    </h2>
  `}function S({children:e,style:n}){return d`
    <section
      style=${{flex:"1 0 auto",display:"flex",flexDirection:"column",justifyContent:"center"}}
    >
      <div
        style=${a({flex:"1 0 auto",maxWidth:"800px",padding:"20px 0 40px 0",margin:"0 auto"},n)}
      >
        ${e}
      </div>
    </section>
  `}function R({href:e,src:n}){return d`
    <a href=${e} target="_blank">
      <div
        style=${{height:"35vh",background:`url(${n}) center center / cover no-repeat`,margin:"50px 0"}}
      />
    </a>
  `}function I({position:e,background:n}){return d`
    <footer
      style=${{color:"white",position:e,left:0,right:0,bottom:0,background:n,lineHeight:"54px",textAlign:"center",fontSize:"16px",fontFamily:'"Comic Sans MS", "Comic Sans", cursive'}}
    >
      © Marta Britāla 2021
    </footer>
  `}function M({style:e,children:n}){const t=u((()=>a({margin:"20px 0",color:"black",padding:"0 5vw"},e)),[e]);return d`
    <p style=${t}>
      ${n}
    </p>
  `}function j(e={}){var n=e,{style:t}=n,o=r(n,["style"]);return e=>{var n=e,{style:i}=n,s=r(n,["style"]);return d`
    <${M} ...${o} style=${a(a({},t),i)} ...${s}  />
  `}}const E={lv:"Mans ceļš uz Latvijas Universitāti",en:"My Path to University of Latvia"};function H(){return d`
    <img
      alt="Sirds"
      src="/images/sirds.png"
      style=${{alignSelf:"center",position:"absolute",width:"30vh",bottom:"5vh"}}
    />
  `}function P(){const{language:e}=b();return d`
    <h1
      style=${{color:"var(--text-yellow)",padding:"0 5vw",textAlign:"right",fontSize:"calc(28px + 5vw)",textShadow:"2px 2px 0 #000",zIndex:10}}
    >
      ${"en"==e?d`My Path to<br />University of Latvia`:d`Mans ceļš uz<br />Latvijas Universitāti`}
    </h1>
  `}const z=j({style:{color:"#fff"}}),T={lv:"Mājas",en:"Home"},O="https://www.openstreetmap.org/?mlat=56.93866&mlon=24.09571#map=17/56.93866/24.09571&layers=H",A={lv:d`
    <${C}>${T.lv}<//>
    <${z}>
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
    <${R} src="/images/map.akmenu.png" href=${O} />
    <${z}>
      Cosmos at the edge of forever Hypatia Flatland tingling of the
      spine something incredible is waiting to be known. Tesseract take
      root and flourish invent the universe made in the interiors of
      collapsing stars kindling the energy hidden in matter the only
      home we've ever known? A still more glorious dawn awaits rich in
      heavy atoms the only home we've ever known great turbulent clouds
      great turbulent clouds vastness is bearable only through love?
    <//>
  `,en:d`
    <${C}>${T.en}<//>
    <${z}>
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
    <${R} src="/images/map.akmenu.png" href=${O} />
    <${z}>
      Invent the universe corpus callosum Hypatia encyclopaedia
      galactica dispassionate extraterrestrial observer Rig Veda.
      Decipherment two ghostly white figures in coveralls and helmets
      are softly dancing Euclid tingling of the spine of brilliant
      syntheses not a sunrise but a galaxyrise. Courage of our
      questions a very small stage in a vast cosmic arena two ghostly
      white figures in coveralls and helmets are softly dancing bits of
      moving fluff network of wormholes a very small stage in a vast
      cosmic arena and billions upon billions upon billions upon
      billions upon billions upon billions
    <//>
  `};const V=j({style:{color:"#FEE715"}}),F={lv:"Latvijas Nacionālā bibliotēka",en:"National Library of Latvia"},B="https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H",U={lv:d`
    <${C}>${F.lv}<//>
    <${V}>
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
    <${R} src="/images/map.biblene.png" href=${B} />
    <${V}>
      Cosmos at the edge of forever Hypatia Flatland tingling of the
      spine something incredible is waiting to be known. Tesseract take
      root and flourish invent the universe made in the interiors of
      collapsing stars kindling the energy hidden in matter the only
      home we've ever known? A still more glorious dawn awaits rich in
      heavy atoms the only home we've ever known great turbulent clouds
      great turbulent clouds vastness is bearable only through love?
    <//>
  `,en:d`
    <${C}>${F.en}<//>
    <${V}>
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
    <${R} src="/images/map.biblene.png" href=${B} />
    <${V}>
      Invent the universe corpus callosum Hypatia encyclopaedia
      galactica dispassionate extraterrestrial observer Rig Veda.
      Decipherment two ghostly white figures in coveralls and helmets
      are softly dancing Euclid tingling of the spine of brilliant
      syntheses not a sunrise but a galaxyrise. Courage of our
      questions a very small stage in a vast cosmic arena two ghostly
      white figures in coveralls and helmets are softly dancing bits of
      moving fluff network of wormholes a very small stage in a vast
      cosmic arena and billions upon billions upon billions upon
      billions upon billions upon billions
    <//>
  `};const D=[function(){return y(E,!0),d`
    <${w} />
    <${k}
      style=${{background:"\n          url(/images/marta_backpacking.png) center center / cover no-repeat,\n          url(/images/dflogobw.png) center center / 100px repeat\n        ",overflow:"hidden"}}
    >
      <${P} />
      <${H} />
    <//>
    <${I} position="fixed" background="transparent" />
  `},function(){const{language:e}=b();return y(T),d`
    <${w} />
    <${k}
      style=${{background:"\n          url(/images/subpat.circuit.png) center center / 800px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${L} background="url(/images/streetview.akmenu.jpg)" />
      <${S}
        style=${{background:"\n            url(/images/subpat.circuit.png) center center / 400px repeat,\n            #cd594a\n          "}}
      >
        ${A[e]}
      <//>
    <//>
    <${I} position="static" background="var(--text-blue)" />
  `},function(){const{language:e}=b();return y(F),d`
    <${w} />
    <${k}
      style=${{background:"\n          url(/images/subpat.folk.png) center center / 800px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${L} background="url(/images/streetview.biblene.jpg)" />
      <${S}
        style=${{background:"\n            url(/images/subpat.folk.png) center center / 400px repeat,\n            #5a5934\n          "}}
      >
        ${U[e]}
      <//>
    <//>
    <${I} position="static" background="var(--text-blue)" />
  `}];function N(){const{language:e,page:n}=b();return g((()=>{document.documentElement.lang=e}),[e]),d`
    <${D[n]} />
  `}h(d`<${function(){return d`
    <${v}>
      <${N} />
    <//>
  `}} />`,document.body);
