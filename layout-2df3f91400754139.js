(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4623:function(e,t,r){Promise.resolve().then(r.t.bind(r,8599,23)),Promise.resolve().then(r.t.bind(r,4758,23)),Promise.resolve().then(r.t.bind(r,2472,23)),Promise.resolve().then(r.t.bind(r,3212,23)),Promise.resolve().then(r.bind(r,8486)),Promise.resolve().then(r.bind(r,6991)),Promise.resolve().then(r.t.bind(r,3385,23))},6991:function(e,t,r){"use strict";r.r(t),r.d(t,{CookieToaster:function(){return d}});var a=r(724),n=r(6288),s=r(8732),i=r(4848);let o=e=>{let{...t}=e,{theme:r="system"}=(0,i.F)();return(0,a.jsx)(n.x,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})};var l=r(146);function d(){let[e,t]=(0,s.useState)(0),r=function(){let e=l.Z.get("toast");if(!e)return null;try{let t=JSON.parse(e);if(!t.message)return null;return t.variant||(t.variant="info"),l.Z.remove("toast"),t}catch(e){return console.error(e),null}}();return(0,s.useEffect)(()=>{let e=setInterval(()=>{t(e=>e+1)},500);return()=>clearInterval(e)},[]),r&&n.A[r.variant](r.message,{description:r.description}),(0,a.jsx)(o,{className:"whitespace-pre-wrap",position:"top-left",richColors:!0})}},8486:function(e,t,r){"use strict";r.r(t),r.d(t,{Navbar:function(){return u}});var a=r(724),n=r(8792),s=r(703),i=r(7907),o=r(1348),l=r(4539),d=r(8732),c=r(1399);function u(e){let{currentStore:t,cart:r}=e,u=[{name:"Home",href:"/"},{name:"FAQ",href:"/faq",showIf:t.storeFaq.length>0},{name:"TOS",href:"/tos",show_if:t.storeTos.length>0},{name:"Reviews",href:"/reviews"}],h=(0,i.usePathname)(),p=JSON.parse(t.accentColor),[x,m]=(0,d.useState)(!1);function g(){setTimeout(()=>{document.body.setAttribute("overflow","visible")},1300),m(!1)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,a.jsxs)(n.default,{href:"/",className:"duration-500 transition-all hover:-translate-y-1 flex items-center gap-4",children:[(0,a.jsx)(s.default,{width:56,height:56,className:"h-14 rounded-2xl",alt:"Logo",src:t.bannerPath}),(0,a.jsx)("div",{className:"hidden md:inline text-xl not-italic break-words font-semibold",children:t.name.split(" ").map(e=>(0,a.jsxs)("span",{children:[e,(0,a.jsx)("br",{})]},e))})]}),(0,a.jsx)("div",{className:"justify-center hidden md:flex items-center gap-5",children:u.filter(e=>null==e.showIf||!!e.showIf).map(e=>{let t="/"+h.split("/")[1]===e.href.toLowerCase();return(0,a.jsx)(n.default,{href:e.href,style:{color:"".concat(t?"rgba(".concat(p.r,",").concat(p.g,",").concat(p.b,",1)"):"#FFFFFF")},className:"".concat(t?"text-[#0075FF]":"text-white"," text-[17px] duration-500 transition-all hover:-translate-y-1 font-medium"),children:e.name},e.href)})}),(0,a.jsxs)("div",{className:"flex justify-center relative items-center gap-[30px]",children:[(0,a.jsxs)(n.default,{href:"/checkout",className:"flex duration-500 transition-all hover:-translate-y-1 justify-center items-center gap-[15px] text-xl",children:[(0,a.jsx)(c.FeP,{}),(0,a.jsx)("span",{className:"text-[17px] font-medium",children:(null==r?void 0:r.items.length)||0})]}),(0,a.jsx)("div",{className:"hidden md:flex w-full flex-row flex-wrap items-start gap-2 md:gap-[15px]",children:(0,a.jsxs)(n.default,{href:"/order",className:"flex w-full hover:-translate-y-1 duration-500 transition-all cursor-pointer flex-col items-center relative justify-center p-4 rounded-[--radius] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",children:[(0,a.jsxs)("div",{style:{background:"var(--light-mode-container-background, linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.50) 100%))"},className:"flex w-full text-center justify-center items-center gap-3 border-[color:var(--light-mode-container-border,rgba(255,255,255,0.10))] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(0,0,0,0.05)] backdrop-blur-[10px] px-5 py-2.5 rounded-[--radius] border-2 border-solid",children:[(0,a.jsx)("span",{className:"text-black text-base not-italic leading-6",children:"Customer login"}),(0,a.jsx)(s.default,{width:24,height:24,src:"/images/ChevronRight.svg",alt:""})]}),(0,a.jsx)("div",{className:"w-[100%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-16 absolute opacity-30 mix-blend-screen blur-[10px] rounded-[--radius]",style:{background:"var(--angular-gradients-angular-1, conic-gradient(from 196deg at 0% 50%, rgba(66, 232, 255, 0.00) 95.00793099403381deg, rgba(255, 126, 171, 0.50) 185.5945086479187deg, #3083FF 274.88280057907104deg, #7147FF 360deg))"}})]})}),(0,a.jsxs)("div",{className:"burger_btn",onClick:()=>{document.body.setAttribute("overflow","hidden"),m(!0)},children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})]})]}),(0,a.jsx)(o.M,{initial:!1,children:x&&(0,a.jsxs)(l.E.div,{className:"mobile_navbar",style:{background:"rgba(".concat(p.r,",").concat(p.g,",").concat(p.b,",.3)")},initial:{clipPath:"polygon(0 0, 100% 0, 100% 0, 0 0)"},animate:{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",transition:{duration:.8,ease:[.27,.94,.48,1]}},exit:{clipPath:"polygon(0 0, 100% 0, 100% 0, 0 0)",transition:{duration:.8,delay:.5,ease:[.27,.94,.48,1]}},children:[(0,a.jsx)(l.E.div,{className:"mobile_navbar_top_menu",initial:{y:"-30px",opacity:0},animate:{y:0,opacity:1,transition:{duration:.8,delay:.3,ease:[.65,.05,.36,1]}},exit:{y:"-30px",opacity:0,transition:{duration:.5,delay:.3,ease:[.65,.05,.36,1]}},children:(0,a.jsx)(s.default,{width:14,height:14,className:"mobile_navbar_close",src:"/images/ModalClose.svg",alt:"",onClick:()=>g()})}),(0,a.jsx)(l.E.ul,{className:"mobile_navbar_ul",variants:{initial:{transition:{staggerChildren:.1,delayChildren:0,staggerDirection:-1}},open:{transition:{staggerChildren:.1,delayChildren:.8,staggerDirection:1}}},initial:"initial",animate:"open",exit:"initial",children:[...u,{name:"Customer login",href:"/order"}].filter(e=>null==e.showIf||!!e.showIf).map((e,t)=>(0,a.jsx)(n.default,{href:e.href,children:(0,a.jsx)(l.E.li,{variants:{initial:{opacity:0,x:-32,transition:{duration:.5,ease:[.65,.05,.36,1]}},open:{opacity:1,x:0,transition:{duration:.5,ease:[.65,.05,.36,1]}}},onClick:()=>g(),children:e.name})},e.name))})]})})]})}},3385:function(){}},function(e){e.O(0,[699,539,703,901,16,121,364,744],function(){return e(e.s=4623)}),_N_E=e.O()}]);