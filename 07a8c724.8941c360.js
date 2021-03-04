(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=d(r),s=n,O=l["".concat(o,".").concat(s)]||l[s]||m[s]||i;return r?a.a.createElement(O,c(c({ref:t},p),{},{components:r})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},63:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(109)),o={id:"videofile.recordvideooptions",title:"Interface: RecordVideoOptions",sidebar_label:"RecordVideoOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/videofile.recordvideooptions",id:"api/interfaces/videofile.recordvideooptions",isDocsHomePage:!1,title:"Interface: RecordVideoOptions",description:"Interface: RecordVideoOptions",source:"@site/docs/api/interfaces/videofile.recordvideooptions.md",slug:"/api/interfaces/videofile.recordvideooptions",permalink:"/react-native-vision-camera/docs/api/interfaces/videofile.recordvideooptions",editUrl:null,version:"current",sidebar_label:"RecordVideoOptions",sidebar:"someSidebar",previous:{title:"Interface: TakeSnapshotOptions",permalink:"/react-native-vision-camera/docs/api/interfaces/snapshot.takesnapshotoptions"}},b=[{value:"Properties",id:"properties",children:[{value:"flash",id:"flash",children:[]},{value:"onRecordingError",id:"onrecordingerror",children:[]},{value:"onRecordingFinished",id:"onrecordingfinished",children:[]}]}],p={toc:b};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-recordvideooptions"},"Interface: RecordVideoOptions"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/videofile"},"VideoFile"),".RecordVideoOptions"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"flash"},"flash"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"flash"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"off")," ","|"," ",Object(i.b)("em",{parentName:"p"},"auto")," ","|"," ",Object(i.b)("em",{parentName:"p"},"on")),Object(i.b)("p",null,"Set the video flash mode. Natively, this just enables the torch while recording."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/012712d/src/VideoFile.ts#L36"},"src/VideoFile.ts:36")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onrecordingerror"},"onRecordingError"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"onRecordingError"),": (",Object(i.b)("inlineCode",{parentName:"p"},"error"),": ",Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},Object(i.b)("em",{parentName:"a"},"CameraCaptureError")),") => ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Called when there was an unexpected runtime error while recording the video."),Object(i.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"error"),": ",Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},Object(i.b)("em",{parentName:"a"},"CameraCaptureError")),"): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"error")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},Object(i.b)("em",{parentName:"a"},"CameraCaptureError")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/012712d/src/VideoFile.ts#L40"},"src/VideoFile.ts:40")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/012712d/src/VideoFile.ts#L40"},"src/VideoFile.ts:40")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onrecordingfinished"},"onRecordingFinished"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"onRecordingFinished"),": (",Object(i.b)("inlineCode",{parentName:"p"},"video"),": ",Object(i.b)("em",{parentName:"p"},"Readonly"),"<",Object(i.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(i.b)("inlineCode",{parentName:"p"},"path"),": ",Object(i.b)("em",{parentName:"p"},"string"),"  }",">"," & { ",Object(i.b)("inlineCode",{parentName:"p"},"duration"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"size"),": ",Object(i.b)("em",{parentName:"p"},"number"),"  }",">",") => ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Called when the recording has been successfully saved to file."),Object(i.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"video"),": ",Object(i.b)("em",{parentName:"p"},"Readonly"),"<",Object(i.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(i.b)("inlineCode",{parentName:"p"},"path"),": ",Object(i.b)("em",{parentName:"p"},"string"),"  }",">"," & { ",Object(i.b)("inlineCode",{parentName:"p"},"duration"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"size"),": ",Object(i.b)("em",{parentName:"p"},"number"),"  }",">","): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"video")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"Readonly"),"<",Object(i.b)("em",{parentName:"td"},"Readonly"),"<{ ",Object(i.b)("inlineCode",{parentName:"td"},"path"),": ",Object(i.b)("em",{parentName:"td"},"string"),"  }",">"," & { ",Object(i.b)("inlineCode",{parentName:"td"},"duration"),": ",Object(i.b)("em",{parentName:"td"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"td"},"size"),": ",Object(i.b)("em",{parentName:"td"},"number"),"  }",">")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/012712d/src/VideoFile.ts#L44"},"src/VideoFile.ts:44")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/012712d/src/VideoFile.ts#L44"},"src/VideoFile.ts:44")))}d.isMDXComponent=!0}}]);