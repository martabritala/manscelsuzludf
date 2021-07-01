var e=Object.defineProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(n,o,t)=>o in n?e(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,i=(e,i)=>{for(var s in i||(i={}))o.call(i,s)&&a(e,s,i[s]);if(n)for(var s of n(i))t.call(i,s)&&a(e,s,i[s]);return e},s=(e,a)=>{var i={};for(var s in e)o.call(e,s)&&a.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&n)for(var s of n(e))a.indexOf(s)<0&&t.call(e,s)&&(i[s]=e[s]);return i};import{createContext as r,useContext as l,useMemo as u,useState as c,useEffect as m,html as g,render as p}from"https://unpkg.com/htm/preact/standalone.module.js";const d=r({route:null,setLanguage:null,setPage:null,setRoute:null});function h(){let[e,n,o]=location.hash.replace(/^#/,"").split("/");return"en"!=n&&(n="lv"),o=+o,(!Number.isInteger(o)||o<0||o>7)&&(o=0),{language:n,page:o}}function b(e,n){return`#/${e}`+(n?`/${n}`:"")}function f(){const{route:{language:e,page:n},setRoute:o,setPage:t,setLanguage:a}=l(d);return{language:e,page:n,setRoute:o,setPage:t,setLanguage:a}}function y({children:e}){const n=u(h,[]),[o,t]=c({page:n.page,language:n.language});m((()=>{window.addEventListener("hashchange",(()=>{t(h())}))}),[]);const a=e=>{location.hash=`#/${e}/${o.page}`},i=e=>{location.hash=`#/${o.language}/${e}`},s=(e,n)=>{location.hash=`#/${e}/${n}`},r=u((()=>({route:o,setLanguage:a,setPage:i,setRoute:s})),[o]);return g`
    <${d.Provider} value=${r}>
      ${e}
    <//>
  `}function $(e,n){const{language:o}=f();m((()=>{document.title=n?"en"==o?e.en:e.lv:"en"==o?`My Path: ${e.en}`:`Mans ceļš: ${e.lv}`}),[o])}const v='"Comic Sans MS", "Comic Sans", "Comic Neue", cursive';function w({index:e}){const{language:n,page:o}=f();return g`
    <a
      onclick=${()=>{window.scrollTo(0,0)}}
      href=${b(n,e)}
      style=${{width:"5vmin",height:"5vmin",lineHeight:"4.5vmin",fontSize:"2.9vmin",fontWeight:"bold",fontFamily:v,color:o==e?"var(--text-blue)":"var(--text-yellow)",margin:"0 2vw",textDecoration:"none",textAlign:"center",borderRadius:"50%",background:o==e?"var(--text-yellow)":void 0,border:"2px solid var(--text-yellow)"}}
    >
      ${e}
    </a>
  `}function x(){const{language:e}=f();return g`
    <header
      style=${{display:"flex",justifyContent:"space-between",alignItems:"center",color:"white",position:"fixed",left:0,right:0,height:"10vh",background:"var(--header-bg-blue)"}}
    >
      <a
        href=${b(e)}
        title="Mans ceļs uz LUDF"
        style=${{flex:"1 0 auto",minWidth:60,lineHeight:0,alignSelf:"stretch",background:"url(./images/mans-cels.png)",backgroundPosition:"right",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}
      >
      </a>
      <div
        style=${{flex:"1 0 auto",textAlign:"center",display:"flex",justifyContent:"flex-start"}}
      >
        <${w} index="1" />
        <${w} index="2" />
        <${w} index="3" />
        <${w} index="4" />
        <${w} index="5" />
        <${w} index="6" />
        <${w} index="7" />
      </div>
      <${k} />
    </header>
  `}function k(){const{language:e,page:n}=f();return g`
    <a
      href=${b("lv"==e?"en":"lv",n)}
      title=${"lv"==e?"English":"Latviešu"}
      style=${{flex:"0 0 auto",color:"var(--text-yellow)",margin:"0 3vw",textDecoration:"none",fontSize:"calc(15px + 1vw)",fontFamily:v}}
    >
      ${"lv"==e?"EN":"LV"}
    </a>
  `}function L({children:e,style:n}){const o=u((()=>i({display:"flex",flexDirection:"column",justifyContent:"center"},n)),[n]);return g`
    <main style=${o}>
      ${e}
    </main>
  `}function C({src:e}){return g`
      <img
        style=${{maxWidth:"100vw",width:"800px",margin:"10vh auto 0 auto"}}
        src=${e}
      />
    `}function I({children:e}){return g`
    <h2
      style=${{textAlign:"center",color:"white",fontSize:"calc(25px + 1vw)",textShadow:"2px 2px 0 #000",margin:"30px 0 35px 0"}}>
      ${e}
    </h2>
  `}function R({children:e,style:n}){return g`
    <section
      style=${{flex:"1 0 auto",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"justify"}}
    >
      <div
        style=${i({flex:"1 0 auto",maxWidth:"800px",padding:"20px 0 40px 0",margin:"0 auto"},n)}
      >
        ${e}
      </div>
    </section>
  `}function j({href:e,src:n}){return g`
    <a href=${e} target="_blank">
      <div
        style=${{height:"35vh",background:`url(${n}) center center / cover no-repeat`,margin:"50px 0"}}
      />
    </a>
  `}function T({position:e,background:n}){return g`
    <footer
      style=${{color:"white",position:e,left:0,right:0,bottom:0,background:n,lineHeight:"54px",textAlign:"center",fontSize:"16px",fontFamily:v}}
    >
      © Marta Britāla 2021
    </footer>
  `}function S({style:e,children:n}){const o=u((()=>i({margin:"20px 0",color:"black",padding:"0 5vw",textAlign:"justify"},e)),[e]);return g`
    <p style=${o}>
      ${n}
    </p>
  `}function E(e={}){var n=e,{style:o}=n,t=s(n,["style"]);return e=>{var n=e,{style:a}=n,r=s(n,["style"]);return g`
    <${S} ...${t} style=${i(i({},o),a)} ...${r}  />
  `}}const M={lv:"Mans ceļš uz Latvijas Universitāti",en:"My Path to University of Latvia"};function H(){return g`
    <img
      alt="Sirds"
      src="./images/sirds.png"
      style=${{alignSelf:"center",position:"absolute",width:"20vh",bottom:"5vh"}}
    />
  `}function V(){const{language:e}=f();return g`
    <h1
      style=${{color:"var(--text-yellow)",padding:"0 5vw",textAlign:"left",fontSize:"calc(20px + 3vw)",textShadow:"2px 2px 0 #000",zIndex:10}}
    >
      ${"en"==e?g`My Path to<br />University of Latvia<br />Faculty of Computing`:g`Mans ceļš uz<br />Latvijas Universitātes<br />Datorikas fakultāti`}
    </h1>
  `}const A=E({style:{color:"#fff"}}),B={lv:"Manas mājas Akmeņu ielā",en:"My home on Akmeņu street"},P="https://www.openstreetmap.org/?mlat=56.93866&mlon=24.09571#map=17/56.93866/24.09571&layers=H",F={lv:"./images/majas1.png",en:"./images/majas1EN.png"},U={lv:g`
    <${I}>${B.lv}<//>
    <${A}>
    Manai mājai jau vairāk nekā 150 gadu! <br /> <br />Sākotnēji tā tika būvēta pie
    Pārdaugavas pirmās bruģētās – tāpēc nosaukums Akmeņu - ielas. Lai
    gan nezinu – pirmā bija iela vai māja? Savulaik mājā atradusies slimnīca.
    Kad biju maza, uz sienas bija pat vēl saskatāmi burti no agrākā ēkas
    nosaukuma. Šobrīd esam atdalījušies no Rīgas Namu pārvaldnieka un kā biedrība veicam mājas
    atjaunošanu.
    <//>
    <${j} src="./images/map.akmenu.png" href=${P} />
    <${A}>
    Par māju vairāk stāstīts ciklā „Ielas garumā”.
    <//>
  `,en:g`
    <${I}>${B.en}<//>
    <${A}>
      My home is older than 150 years! <br /><br /> It was built by the first 
      stone road in Pārdaugava. That is why the street name is "Akmeņu" (stone) street.
      Although I am not sure wether the street or the house was first.
      When I was little the name of the building was still visible on the wall.
      Currenty we have left Rīgas Namu Pārvaldnieks and have made a union to renovate our home. 
    <//>
    <${j} src="./images/map.akmenu.png" href=${P} />
    <${A}>
      There is more information about the building in the documentary series „Ielas garumā”.
    <//>
  `};const N=E({style:{color:"#FEE715"}}),O={lv:"Latvijas Nacionālā bibliotēka",en:"National Library of Latvia"},z="https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H",q={lv:g`
    <${I}>${O.lv}<//>
    <${N}>
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
    <${j} src="./images/map.biblene.png" href=${z} />
  `,en:g`
    <${I}>${O.en}<//>
    <${N}>
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
    <${j} src="./images/map.biblene.png" href=${z} />
  `};const D=E({style:{color:"#FEE715"}}),G={lv:"Akmens tilts",en:"Stone bridge"},W="https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H",K={lv:g`
    <${I}>${G.lv}<//>
    <${D}>
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
    <${j} src="./images/map.biblene.png" href=${W} />
  `,en:g`
    <${I}>${G.en}<//>
    <${D}>
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
    <${j} src="./images/map.biblene.png" href=${W} />
  `};const _=E({style:{color:"#FEE715"}}),J={lv:"Rīgas Tehniskā Universitāte",en:"Riga Technical University"},Q="https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H",X={lv:g`
    <${I}>${J.lv}<//>
    <${_}>
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
    <${j} src="./images/map.biblene.png" href=${Q} />
    <${_}>
    Vairāk par Rīgas Tehnisko universitāti: <a href="https://www.rtu.lv/"> RTU mājaslapā </a> 
    <//>
  `,en:g`
    <${I}>${J.en}<//>
    <${_}>
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
    <${j} src="./images/map.biblene.png" href=${Q} />
    <${_}>
    Vairāk par Rīgas Tehnisko universitāti: <a href="https://www.rtu.lv/"> RTU mājaslapā </a> 
  <//>

  `};const Y=E({style:{color:"#FEE715"}}),Z={lv:"Pēterbaznīca",en:"Saint Peter's Church"},ee="https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H",ne={lv:g`
    <${I}>${Z.lv}<//>
    <${Y}>
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
    <${j} src="./images/map.biblene.png" href=${ee} />
  `,en:g`
    <${I}>${Z.en}<//>
    <${Y}>
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
    <${j} src="./images/map.biblene.png" href=${ee} />
  `};const oe=E({style:{color:"#FEE715"}}),te={lv:"Latvijas Nacionālā opera",en:"Latvian National Opera"},ae="https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H",ie={lv:g`
    <${I}>${te.lv}<//>
    <${oe}>
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
    <${j} src="./images/map.biblene.png" href=${ae} />
  `,en:g`
    <${I}>${te.en}<//>
    <${oe}>
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
    <${j} src="./images/map.biblene.png" href=${ae} />
  `};const se=E({style:{color:"#FEE715"}}),re={lv:"Latvijas Universitāte",en:"University of Latvia"},le="https://www.openstreetmap.org/?mlat=56.94106&mlon=24.09671#map=17/56.94106/24.09671&layers=H",ue={lv:g`
    <${I}>${re.lv}<//>
    <${se}>
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
    <${j} src="./images/map.biblene.png" href=${le} />
  `,en:g`
    <${I}>${re.en}<//>
    <${se}>
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
    <${j} src="./images/map.biblene.png" href=${le} />
  `};const ce=[function(){return $(M,!0),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/HomePage.png) center center / 100% no-repeat,\n          url(./images/dflogobw.png) center center / 100px repeat\n        ",overflow:"hidden"}}
    >
      <${V} />
      <${H} />
    <//>
    <${T} position="fixed" background="transparent" />
  `},function(){const{language:e}=f();return $(B),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/dflogobw.png) center center / 100px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${C} 
        src= ${F[e]}/>
      <${R}
        style=${{background:"\n            url(./images/fons.png) center center / 40px repeat,\n            #cd594a\n          "}}
      >
        ${U[e]}
      <//>
    <//>
    <${T} position="static" background="var(--text-blue)" />
  `},function(){const{language:e}=f();return $(O),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/dflogobw.png) center center / 100px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${C} src="./images/posms2.png" />
      <${R}
        style=${{background:"\n            url(./images/fons.png) center center / 40px repeat,\n            #5a5934\n          "}}
      >
        ${q[e]}
      <//>
    <//>
    <${T} position="static" background="var(--text-blue)" />
  `},function(){const{language:e}=f();return $(G),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/dflogobw.png) center center / 100px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${C} src="./images/posms3.png" />
      <${R}
        style=${{background:"\n            url(./images/fons.png) center center / 40px repeat,\n            #5a5934\n          "}}
      >
        ${K[e]}
      <//>
    <//>
    <${T} position="static" background="var(--text-blue)" />
  `},function(){const{language:e}=f();return $(J),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/dflogobw.png) center center / 100px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${C} src="./images/posms4.png" />
      <${R}
        style=${{background:"\n            url(./images/fons.png) center center / 40px repeat,\n            #5a5934\n          "}}
      >
        ${X[e]}
      <//>
    <//>
    <${T} position="static" background="var(--text-blue)" />
  `},function(){const{language:e}=f();return $(Z),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/dflogobw.png) center center / 100px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${C} src="./images/posms5.png" />
      <${R}
        style=${{background:"\n            url(./images/fons.png) center center / 40px repeat,\n            #5a5934\n          "}}
      >
        ${ne[e]}
      <//>
    <//>
    <${T} position="static" background="var(--text-blue)" />
  `},function(){const{language:e}=f();return $(te),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/dflogobw.png) center center / 100px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${C} src="./images/posms6.png" />
      <${R}
        style=${{background:"\n            url(./images/fons.png) center center / 40px repeat,\n            #5a5934\n          "}}
      >
        ${ie[e]}
      <//>
    <//>
    <${T} position="static" background="var(--text-blue)" />
  `},function(){const{language:e}=f();return $(re),g`
    <${x} />
    <${L}
      style=${{background:"\n          url(./images/dflogobw.png) center center / 100px repeat,\n          var(--header-bg-blue)\n        "}}
    >
      <${C} src="./images/posms7.png" />
      <${R}
        style=${{background:"\n            url(./images/fons.png) center center / 40px repeat,\n            #5a5934\n          "}}
      >
        ${ue[e]}
      <//>
    <//>
    <${T} position="static" background="var(--text-blue)" />
  `}];function me(){const{language:e,page:n}=f();return m((()=>{document.documentElement.lang=e}),[e]),g`
    <${ce[n]} />
  `}p(g`<${function(){return g`
    <${y}>
      <${me} />
    <//>
  `}} />`,document.body);
