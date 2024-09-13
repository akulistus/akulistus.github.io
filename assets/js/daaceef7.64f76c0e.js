"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5885],{4806:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(4848),a=n(8453);const s={},i=void 0,o={id:"getting-started-variants/online-react",title:"online-react",description:"\u0412 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 src \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0434\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e graph. \u0412\u043d\u0443\u0442\u0440\u0438 graph \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b graph.jsx.",source:"@site/docs/getting-started-variants/online-react.mdx",sourceDirName:"getting-started-variants",slug:"/getting-started-variants/online-react",permalink:"/docs/getting-started-variants/online-react",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started-variants/online-react.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"online-javascript",permalink:"/docs/getting-started-variants/online-javascript"},next:{title:"online-vue",permalink:"/docs/getting-started-variants/online-vue"}},c={},l=[];function d(r){const e={code:"code",p:"p",pre:"pre",...(0,a.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u0412 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 src \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0434\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e graph. \u0412\u043d\u0443\u0442\u0440\u0438 graph \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b ",(0,t.jsx)(e.code,{children:"graph.jsx"}),".\r\n\u0412 ",(0,t.jsx)(e.code,{children:"graph.jsx"})," \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"import React, { useRef, useEffect } from 'react';\r\nimport { OnlineVisualizatorProvider } from 'webgraphicvisualizator';\r\nimport { SignalGenerator } from '../submodules/signal-generator-js/signal-generator';\r\nimport generatorConfig from \"./generator.json\";\r\nimport VisualSettings from \"./VisualSettings.json\";\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u0412 \u0444\u0430\u0439\u043b ",(0,t.jsx)(e.code,{children:"graph.jsx"})," \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 Graph."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'const Graph = () => {\r\n  const canvasWrapRef = useRef(null);\r\n  useEffect(() => {\r\n    const install = () => {\r\n\r\n      // \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 \u043a\u043b\u0430\u0441\u0441\u0430 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\u043e\u0432\r\n      const visProvider = new OnlineVisualizatorProvider();\r\n      const generator = new SignalGenerator();\r\n\r\n      // \u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u043a\u043e\u043b\u0431\u044d\u043a\u043e\u0432 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430\r\n      visProvider.clearParserCallbacks();\r\n      visProvider.init(visualizatorSettings);\r\n\r\n      // \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\u043e\u0432\r\n      generator.setSettings(SignalGenerator);\r\n      generator.onFrameIsReady = message => {\r\n        visualizatorProvider.pushAdcMessage(message, 1372205);\r\n        // visualizatorProvider.pushMessage(message);\r\n      }\r\n      // \u0417\u0430\u043f\u0443\u0441\u043a \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\u0430\r\n      generator.start();\r\n\r\n      // \u0421\u0432\u044f\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430 \u0441 DOM \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u043e\u0431\u0435\u0440\u0442\u043a\u0438\r\n      visProvider.addParserCallback("beforeSettingsParsing", null, () => {\r\n        visProvider.setCanvasParentHtmlObject(canvasWrapRef.current);\r\n      });\r\n\r\n      // \u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430 \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\r\n      visProvider.create();\r\n\r\n      // \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u0430\u043b\u0438\u0431\u0440\u043e\u0432\u043a\u0438 \u0434\u043b\u044f \u0441\u0438\u0433\u043d\u0430\u043b\u0430 \u042d\u041a\u0413\r\n      visProvider.setCalibration(undefined, "ecg", [0], [1000], [0]);\r\n    };\r\n\r\n    install();\r\n  }, []);\r\n};\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 ",(0,t.jsx)(e.code,{children:"main.jsx"})," \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0440\u0435\u043d\u0434\u0435\u0440."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import React from 'react'\r\nimport ReactDOM from 'react-dom/client'\r\nimport Graph from './src/graph/graph.jsx'\r\n\r\nReactDOM.createRoot(document.getElementById('root')).render(\r\n  <React.StrictMode>\r\n    <Graph />\r\n  </React.StrictMode>,\r\n);\n"})})]})}function g(r={}){const{wrapper:e}={...(0,a.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(d,{...r})}):d(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var t=n(6540);const a={},s=t.createContext(a);function i(r){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function o(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(a):r.components||a:i(r.components),t.createElement(s.Provider,{value:e},r.children)}}}]);