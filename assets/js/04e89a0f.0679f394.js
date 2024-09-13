"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4488],{4958:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=e(4848),a=e(8453);const i={},s=void 0,o={id:"getting-started-variants/offline-javascript",title:"offline-javascript",description:"\u0412 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c main.js \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b.",source:"@site/docs/getting-started-variants/offline-javascript.mdx",sourceDirName:"getting-started-variants",slug:"/getting-started-variants/offline-javascript",permalink:"/docs/getting-started-variants/offline-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started-variants/offline-javascript.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"},next:{title:"offline-react",permalink:"/docs/getting-started-variants/offline-react"}},c={},d=[];function l(n){const r={admonition:"admonition",br:"br",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["\u0412 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c ",(0,t.jsx)(r.code,{children:"main.js"})," \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { OfflineVisualizatorProvider } from \"webgraphicvisualizator\";\r\nimport VisualSettings from './VisualSettings.json'\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u0414\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0430 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\u0430 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,t.jsx)(r.code,{children:"main.js"})," \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f init."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'const init = async () => {\r\n  // \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043e\u043a \u043d\u0430 DOM \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\r\n  const wrapRef = document.getElementById("wrapRef");\r\n  const canvasRef = document.getElementById("canvasWrap");\r\n\r\n  // \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u043a\u043b\u0430\u0441\u0441\u0430 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430\r\n  const visualizatorProvider = new OfflineVisualizatorProvider();\r\n\r\n  // \u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u043a\u043e\u043b\u0431\u044d\u043a\u043e\u0432 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430\r\n  visualizatorProvider.clearParserCallbacks();\r\n  visualizatorProvider.init(VisualSettings);\r\n\r\n  // \u0421\u0432\u044f\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430 \u0441 DOM \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043e\u0431\u0435\u0440\u0442\u043a\u0438\r\n  visualizatorProvider.addParserCallback("beforeSettingsParsing", null, () => {\r\n    visualizatorProvider.setCanvasParentCallback(canvasRef, wrapRef);\r\n  });\r\n\r\n  // \u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u0442\u043e\u043d\u0430 \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\r\n  await visualizatorProvider.create();\r\n\r\n  // \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u043f\u043e\u043b\u043e\u0442\u043d\u0435\r\n  // \u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0433\u0440\u0430\u0444\u0438\u043a\u0430 \u0441\u0438\u043d\u0443\u0441\u0430 \u0441 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 500\u0413\u0446 \u0438 \u0430\u043c\u043f\u043b\u0438\u0442\u0443\u0434\u043e\u0430\u0439 1000\r\n  const data = Array.from({ length: 500 }, (_, index) => Math.sin(index * Math.PI / 250) * 1000);\r\n  \r\n  // \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u043e\u043b\u043e\u0442\u043d\u043e\r\n  visualizatorProvider.addPoints(0, 0, 0, data);\r\n\r\n  // \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0430\r\n  visualizatorProvider.refreshGraphics();\r\n};\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u0412 \u0444\u0430\u0439\u043b ",(0,t.jsx)(r.code,{children:"index.html"})," \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u0449\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b.\r\n",(0,t.jsx)(r.br,{}),"\n","\\"]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["\u0412\u0430\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 ",(0,t.jsx)(r.strong,{children:"\u041d\u0415"})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0443\u043b\u0435\u0432\u043e\u0439 \u0432\u044b\u0441\u043e\u0442\u044b."]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:'<div class="vis-wrap" id="wrapRef">\r\n    <div class="canvas-wrap" id="canvasWrap"/>\r\n</div>\r\n\r\n<script type="module">\r\n  import { main } from \'./components/main.js\'\r\n  document.addEventListener("DOMContentLoaded", () => {\r\n    main();\r\n  });\r\n<\/script>\r\n\r\n<style>\r\n  .canvas-wrap {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  }\r\n  .vis-wrap {\r\n    position: relative;\r\n    height: 500px;\r\n    width: 500px;\r\n  }\r\n</style>\n'})}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"\u0412\u0430\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0443 script \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d type=module."})})]})}function p(n={}){const{wrapper:r}={...(0,a.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>s,x:()=>o});var t=e(6540);const a={},i=t.createContext(a);function s(n){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function o(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(i.Provider,{value:r},n.children)}}}]);