(()=>{"use strict";const e=window.React,o=window.wp.hooks,t=((0,o.addFilter)("blocks.registerBlockType","zolo/extension/backgroundVideo",(e=>(!e.category||"zoloblocks"!=e.category||"zolo/container"!==e.name&&"zolo/slide"!==e.name||(e.attributes={...e.attributes,backgroundVideo:{type:"object"}}),e))),window.wp.blockEditor),a=window.wp.i18n,l=window.wp.components,{ImageAvatar:n,SimpleRangeControl:r,popoverHasAttrVal:d,RangeResetControl:i}=window.zoloModule,c=({panelProps:o})=>{const{attributes:r,setAttributes:d}=o,{backgroundVideo:i={},advBtnBgbackgroundType:c}=r,{id:s="",url:u="",falbackImageID:b="",falbackImageURL:m=""}=i;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("label",{style:{marginBottom:"10px",display:"block"},className:"zolo-control-label"},(0,a.__)("Select Video","zoloblocks")),(0,e.createElement)(t.MediaUpload,{onSelect:e=>{e&&e.url&&e.id&&d({backgroundVideo:{...i,id:e.id,url:e.url}})},allowedTypes:["video"],value:s,render:({open:o})=>(0,e.createElement)(l.Button,{className:"components-button zolo-bg-video-placeholder",label:(0,a.__)("Upload Video","zoloblocks"),onClick:o},(0,e.createElement)(e.Fragment,null,i?.url?(0,e.createElement)("video",{className:"zolo-background-video",loop:!0,muted:!0,playsInline:!0,currentTime:2,preload:"none",autoPlay:!0,src:i?.url||""}):(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon icon-tabler icons-tabler-outline icon-tabler-video-plus"},(0,e.createElement)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,e.createElement)("path",{d:"M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"}),(0,e.createElement)("path",{d:"M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),(0,e.createElement)("path",{d:"M7 12l4 0"}),(0,e.createElement)("path",{d:"M9 10l0 4"}))))}),(0,e.createElement)("label",{style:{marginBottom:"10px",display:"block"},className:"zolo-control-label"},(0,a.__)("Video Poster","zoloblocks")),(0,e.createElement)(t.MediaUpload,{onSelect:e=>{e&&e.url&&e.id&&d({backgroundVideo:{...i,falbackImageURL:e.url,falbackImageID:e.id}})},allowedTypes:["image"],value:b,render:({open:o})=>!m&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l.Button,{className:"zb-bg-control-img-btn components-button",label:(0,a.__)("Upload Image","zoloblocks"),icon:"format-image",onClick:o}),(0,e.createElement)("span",{style:{padding:"10px 0",display:"block"}}))}),m&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n,{imageUrl:m,imageId:b,onDeleteImage:()=>d({backgroundVideo:{...i,falbackImageURL:"",falbackImageID:""}}),onEditImage:({id:e,url:o})=>{d({backgroundVideo:{...i,falbackImageURL:o,falbackImageID:e}})}})))};function s({panelProps:o}){const{attributes:t}=o,{backgroundVideo:a,uniqueId:l}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:`zolo-bgv-container zolo-bgv-${l}`,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}},(0,e.createElement)("video",{className:"zolo-bgv-hosted zolo-html5-video",loop:!0,muted:!0,playsInline:!0,preload:"none",autoPlay:!0,poster:a?.falbackImageURL||"",src:a?.url||""})))}const{generateResRangeStyle:u,generateBackgroundControlStyles:b}=window.zoloModule;(0,o.addFilter)("zolo.extensions.controls.backgroundVideo","zolo/background-video",((o,t)=>(!t.attributes||"video"!==t.attributes?.advBtnBgbackgroundType&&"video"!==t.attributes?.mainBgbackgroundType||o.push((0,e.createElement)(c,{key:`controls-background-video-${t.attributes.uniqueId}`,panelProps:t})),o))),(0,o.addFilter)("zolo.blocks.render.hook.before","zolo/background-video",((o,t)=>(!t.attributes.backgroundVideo||"video"!==t.attributes?.advBtnBgbackgroundType&&"video"!==t.attributes?.mainBgbackgroundType||o.push((0,e.createElement)(s,{key:`render-background-video-${t.attributes.uniqueId}`,panelProps:t})),o)))})();