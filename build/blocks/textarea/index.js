(()=>{var e={6942:(e,o)=>{var l;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(e=n(e,a(l)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var l in e)t.call(e,l)&&e[l]&&(o=n(o,l));return o}function n(e,o){return o?e?e+" "+o:e+o:e}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(o,[]))||(e.exports=l)}()}},o={};function l(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,l),a.exports}l.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return l.d(o,{a:o}),o},l.d=(e,o)=>{for(var t in o)l.o(o,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};l.r(e),l.d(e,{FIELD_TYPO:()=>z,LABEL_TYPO:()=>g});const o=window.React,t=window.wp.blocks,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Message","name":"zolo/textarea","category":"zoloblocks","keywords":["zolo","message","textarea"],"description":"A simple text field block for Form Block","apiVersion":2,"textdomain":"zoloblocks","parent":["zolo/form"],"example":{"attributes":{"preview":true},"viewportWidth":410},"usesContext":["zolo/showFieldIcon"],"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":"file:./index.js"}'),a=window.wp.i18n,n="labelMargin",s="labelBg",i="labelPadding",c="labelBorder",d="labelBorderRadius",b="fieldPadding",p="fieldBg",u="fieldBorder",m="fieldBorderRadius",y="iconSize",g="labelTypo",z="fieldTypo",{generateResRangeAttributies:w,generateTypographyAttributes:h,generateDimensionAttributes:f,generateNormalBGAttributes:k,generateBorderAttributies:_}=window.zoloModule,S={globalConfig:{type:"object",default:{margin:{prefix:"mainMargin"},padding:{prefix:"mainPadding"},background:{prefix:"mainBg"},border:{prefix:"mainBorder"},borderRadius:{prefix:"mainBorderRadius"},boxShadow:{prefix:"mainBoxShadow"},responsiveControls:!0}},preset:{type:"string",default:"style-1"},...f(n),...k(s),...f(i),...f(d),..._(c),...f(b),...k(p),..._(u),...f(m),...w(y),...h(Object.values(e)),showLabel:{type:"boolean",default:!0},label:{type:"string",default:"Message"},labelColor:{type:"string"},placeholder:{type:"string",default:"Write your thoughts here..."},placeholderColor:{type:"string"},textColor:{type:"string"},showIcon:{type:"boolean",default:!1},icon:{type:"string",default:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"></path></svg>'},iconColor:{type:"string"},isRequired:{type:"boolean",default:!0},requiredMsg:{type:"string",default:"This field is required"},showRequiredSymbol:{type:"boolean",default:!0},requiredColor:{type:"string"}},x=window.wp.blockEditor,E=window.wp.element;var C=l(6942),$=l.n(C);const v=window.wp.components,{ResRangeControl:q,ColorControl:P,TypographyDropdown:B,HeaderTabs:N,BorderControl:R,AdvancedOptions:T,ZoloIconPicker:M,ResDimensionsControl:I,NormalBGControl:A,ZoloPanelBody:F}=window.zoloModule,D=function(e){const{attributes:l,setAttributes:t}=e,{resMode:r,showLabel:w,label:h,labelColor:f,textColor:k,placeholder:_,placeholderColor:E,preset:C,showIcon:$,icon:D,iconColor:O,isRequired:L,requiredMsg:j,showRequiredSymbol:G,requiredColor:H}=l,V={attributes:l,setAttributes:t,resMode:r,objAttributes:S};return(0,o.createElement)(x.InspectorControls,{key:"controls"},(0,o.createElement)(N,{block:"zolo/textarea",attributes:l,setAttributes:t,generalTab:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(F,{title:(0,a.__)("General","zoloblocks"),firstOpen:!0,panelProps:e},(0,o.createElement)(v.ToggleControl,{label:(0,a.__)("Show Label","zoloblocks"),checked:w,onChange:()=>t({showLabel:!w})}),"style-3"!==C&&(0,o.createElement)(v.ToggleControl,{label:(0,a.__)("Show Field Icon","zoloblocks"),checked:$,onChange:()=>t({showIcon:!$})}),(0,o.createElement)(v.ToggleControl,{label:(0,a.__)("Is It Required Field?","zoloblocks"),checked:L,onChange:()=>t({isRequired:!L})}),L&&(0,o.createElement)(v.ToggleControl,{label:(0,a.__)("Show Required Symbol","zoloblocks"),checked:G,onChange:()=>t({showRequiredSymbol:!G})})),(0,o.createElement)(F,{title:(0,a.__)("Content","zoloblocks"),panelProps:e},w&&(0,o.createElement)(v.TextControl,{label:(0,a.__)("Field Label","zoloblocks"),value:h,onChange:e=>t({label:e}),placeholder:(0,a.__)("Enter label..","zoloblocks"),help:(0,a.__)("This will be used as the label for the field","zoloblocks")}),"style-3"!==C&&(0,o.createElement)(v.TextControl,{label:(0,a.__)("Placeholder","zoloblocks"),value:_,onChange:e=>t({placeholder:e})}),L&&(0,o.createElement)("div",{className:"zolo-flex-col-control"},(0,o.createElement)(v.TextareaControl,{label:(0,a.__)("Required Message","zoloblocks"),help:(0,a.__)("This message will be shown when the field is required.","zoloblocks"),value:j,onChange:e=>t({requiredMsg:e}),placeholder:(0,a.__)("Enter required message..","zoloblocks")})),$&&"style-3"!==C&&(0,o.createElement)(M,{label:(0,a.__)("Select Icon","zoloblocks"),value:D,onChange:e=>{t({icon:e})}}))),styleTab:(0,o.createElement)(o.Fragment,null,w&&(0,o.createElement)(F,{title:(0,a.__)("Label","zoloblocks"),firstOpen:!0,stylePanel:!0,panelProps:e},(0,o.createElement)(P,{label:(0,a.__)("Label Color","zoloblocks"),color:f,onChange:e=>t({labelColor:e})}),(0,o.createElement)(P,{label:(0,a.__)("Required Color","zoloblocks"),color:H,onChange:e=>t({requiredColor:e})}),(0,o.createElement)(B,{label:(0,a.__)("Typography","zoloblocks"),typoPrefixConstant:g,requiredProps:V}),"style-3"===C&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(R,{label:(0,a.__)("Border","zoloblocks"),controlName:c,requiredProps:V}),(0,o.createElement)(I,{label:(0,a.__)("Border Radius","zoloblocks"),controlName:d,requiredProps:V,forBorderRadius:!0}),(0,o.createElement)(I,{label:(0,a.__)("Padding","zoloblocks"),controlName:i,requiredProps:V,forBorderRadius:!1})),(0,o.createElement)(I,{label:(0,a.__)("Margin","zoloblocks"),controlName:n,requiredProps:V,forBorderRadius:!1}),"style-3"===C&&(0,o.createElement)(A,{requiredProps:V,controlName:s,noMainBGImg:!0})),(0,o.createElement)(F,{title:(0,a.__)("Field","zoloblocks"),stylePanel:!0,panelProps:e,firstOpen:!w},(0,o.createElement)(P,{label:(0,a.__)("Text Color","zoloblocks"),color:k,onChange:e=>t({textColor:e})}),"style-3"!==C&&(0,o.createElement)(P,{label:(0,a.__)("Placeholder Color","zoloblocks"),color:E,onChange:e=>t({placeholderColor:e})}),(0,o.createElement)(B,{label:(0,a.__)("Typography","zoloblocks"),typoPrefixConstant:z,requiredProps:V}),(0,o.createElement)(R,{label:(0,a.__)("Border","zoloblocks"),controlName:u,requiredProps:V}),(0,o.createElement)(I,{label:(0,a.__)("Border Radius","zoloblocks"),controlName:m,requiredProps:V,forBorderRadius:!0}),(0,o.createElement)(I,{label:(0,a.__)("Padding","zoloblocks"),controlName:b,requiredProps:V,forBorderRadius:!1}),(0,o.createElement)(A,{requiredProps:V,controlName:p,noMainBGImg:!1})),$&&"style-3"!==C&&(0,o.createElement)(F,{title:(0,a.__)("Icon","zoloblocks"),stylePanel:!0,panelProps:e},(0,o.createElement)(P,{label:(0,a.__)("Color","zoloblocks"),color:O,onChange:e=>t({iconColor:e})}),(0,o.createElement)(q,{label:(0,a.__)("Icon","zoloblocks"),controlName:y,requiredProps:V,min:1,max:100,step:1}))),advancedTab:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(T,{attributes:l,setAttributes:t,requiredProps:V,block:"zolo/textarea"}))}))},O=window.wp.hooks,{generateDimensionStyle:L,generateBorderStyle:j,generateResAlignmentStyle:G,generateTypographyStyles:H,generateResRangeStyle:V,generateNormalBGControlStyles:Z,GlobalStyleHanlder:W}=window.zoloModule,Y=({props:e})=>{const{attributes:l,setAttributes:t}=e,{uniqueId:r,showLabel:a,labelColor:w,textColor:h,placeholderColor:f,iconColor:k,showRequiredSymbol:_,requiredColor:S}=l,{desktopBorderStyle:x,tabBorderStyle:E,mobBorderStyle:C}=j({controlName:c,attributes:l}),{dimensionStylesDesktop:$,dimensionStylesTab:v,dimensionStylesMobile:q}=L({controlName:d,styleFor:"border-radius",attributes:l}),{dimensionStylesDesktop:P,dimensionStylesTab:B,dimensionStylesMobile:N}=L({controlName:i,styleFor:"padding",attributes:l}),{backgroundStylesDesktop:R}=Z({controlName:s,attributes:l,noMainBGImg:!0}),{dimensionStylesDesktop:T,dimensionStylesTab:M,dimensionStylesMobile:I}=L({controlName:n,styleFor:"margin",attributes:l}),{typoStylesDesktop:A,typoStylesTab:F,typoStylesMobile:D}=H({prefixConstant:g,defaultFontSize:"",attributes:l}),{typoStylesDesktop:G,typoStylesTab:Y,typoStylesMobile:J}=H({prefixConstant:z,defaultFontSize:"",attributes:l}),{desktopBorderStyle:K,tabBorderStyle:U,mobBorderStyle:X}=j({controlName:u,attributes:l}),{dimensionStylesDesktop:Q,dimensionStylesTab:ee,dimensionStylesMobile:oe}=L({controlName:m,styleFor:"border-radius",attributes:l}),{dimensionStylesDesktop:le,dimensionStylesTab:te,dimensionStylesMobile:re}=L({controlName:b,styleFor:"padding",attributes:l}),{backgroundStylesDesktop:ae,backgroundStylesTab:ne,backgroundStylesMobile:se}=Z({controlName:p,attributes:l,noMainBGImg:!1}),{desktopRangeStyle:ie,tabRangeStyle:ce,mobRangeStyle:de}=V({controlName:y,property:"font-size",attributes:l}),be=`\n        ${a?`\n            .${r}.wp-block-zolo-textarea .zolo-label-wrapper {\n                ${T}\n            }\n            .${r}.wp-block-zolo-textarea .zolo-label {\n                ${A}\n                color: ${w};\n            }\n            .wp-block-zolo-form.style-3 .${r}.wp-block-zolo-textarea .zolo-label{\n                ${P}\n                ${R}\n                ${x}\n                ${$}\n            }\n            ${_?`\n                .${r}.wp-block-zolo-textarea .zolo-required {\n                    color: ${S};\n                }\n            `:""}\n        `:""}\n        .${r}.wp-block-zolo-textarea .zolo-field-input-item textarea {\n            ${h?`color: ${h};`:""}\n            ${G}\n            ${K}\n            ${Q}\n            ${le}\n            ${ae}\n        }\n        .${r}.wp-block-zolo-textarea .zolo-field-input-item textarea::placeholder {\n            ${f?`color: ${f};`:""}\n        }\n\n        .${r}.wp-block-zolo-textarea .zolo-field-input-item .zolo-input-icon svg {\n            ${ie}\n            ${k?`fill: ${k};`:""}\n        }\n    `,pe=`\n        ${a?`\n            .${r}.wp-block-zolo-textarea .zolo-label-wrapper {\n                ${M}\n            }\n            .${r}.wp-block-zolo-textarea .zolo-label {\n                ${F}\n            }\n            .wp-block-zolo-form.style-3 .${r}.wp-block-zolo-textarea .zolo-label {\n                ${B}\n                ${E}\n                ${v}\n            }\n        `:""}\n\n        .${r}.wp-block-zolo-textarea .zolo-field-input-item textarea {\n            ${Y}\n            ${U}\n            ${ee}\n            ${te}\n            ${ne}\n        }\n\n        .${r}.wp-block-zolo-textarea .zolo-field-input-item .zolo-input-icon svg {\n            ${ce}\n        }\n    `,ue=`\n        ${a?`\n            .${r}.wp-block-zolo-textarea .zolo-label-wrapper {\n                ${I}\n            }\n            .${r}.wp-block-zolo-textarea .zolo-label {\n                ${D}\n            }\n            .wp-block-zolo-form.style-3 .${r}.wp-block-zolo-textarea .zolo-label {\n                ${N}\n                ${C}\n                ${q}\n            }\n        `:""}\n        \n        .${r}.wp-block-zolo-textarea .zolo-field-input-item textarea {\n            ${J}\n            ${X}\n            ${oe}\n            ${re}\n            ${se}\n        }\n\n        .${r}.wp-block-zolo-textarea .zolo-field-input-item .zolo-input-icon svg {\n            ${de}\n        }\n    `;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(W,{attributes:l,setAttributes:t,desktopAllStyle:(0,O.applyFilters)("zolo.textarea.desktopAllStyle",be,e),tabAllStyle:(0,O.applyFilters)("zolo.textarea.tabletAllStyle",pe,e),mobileAllStyle:(0,O.applyFilters)("zolo.textarea.mobileAllStyle",ue,e)}))},{handleUniqueId:J,classArrayToStr:K,DisplayZoloIcon:U}=window.zoloModule,{classArrayToStr:X,DisplayZoloIcon:Q}=window.zoloModule;(0,t.registerBlockType)(r,{icon:{src:(0,o.createElement)("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.59 3.7a.89.89 0 0 0-.89.89v14.82c0 .492.399.89.89.89h14.82a.89.89 0 0 0 .89-.89V4.59a.89.89 0 0 0-.89-.89H4.59zm-2.29.89A2.29 2.29 0 0 1 4.59 2.3h14.82a2.29 2.29 0 0 1 2.29 2.29v14.82a2.29 2.29 0 0 1-2.29 2.29H4.59a2.29 2.29 0 0 1-2.29-2.29V4.59zm3.09 6.67a.73.73 0 0 1 .73-.73h6.13a.73.73 0 0 1 0 1.46H6.12a.73.73 0 0 1-.73-.73zm.73-4.735a.735.735 0 1 0 0 1.47h11.82a.735.735 0 0 0 0-1.47H6.12zm13.47 12.264a.375.375 0 0 1-.01.53l-.32.31a.375.375 0 1 1-.52-.538l.32-.31a.375.375 0 0 1 .53.008zm-.381-1.007a.375.375 0 1 0-.538-.524l-1.49 1.53a.375.375 0 0 0 .538.524l1.49-1.53z",fill:"#2667FF"}))},attributes:S,edit:function(e){const{attributes:l,setAttributes:t,className:r,clientId:n,isSelected:s,context:i}=e,{preview:c,preset:d,uniqueId:b,parentClasses:p,showLabel:u,label:m,placeholder:y,showIcon:g,icon:z,isRequired:w,showRequiredSymbol:h}=l;(0,E.useEffect)((()=>{J({BLOCK_PREFIX:"slide",uniqueId:b,setAttributes:t,clientId:n})}),[]);const f=(0,x.useBlockProps)({className:$()(r,`${b}`,K(p),g?"zolo-field-icon":"","form-group-editor")});return c?(0,o.createElement)("img",{src:zoloParams.blocksPreview.textarea,alt:(0,a.__)("Message Preview","zoloblocks")}):((0,E.useEffect)((()=>{t({showIcon:i["zolo/showFieldIcon"],preset:i["zolo/preset"]})}),[i]),(0,o.createElement)(o.Fragment,null,s&&(0,o.createElement)(D,{attributes:l,setAttributes:t}),(0,o.createElement)(Y,{props:e}),(0,o.createElement)("div",{...f},(0,o.createElement)("div",{className:"zolo-field-item"},u&&(0,o.createElement)("div",{className:"zolo-label-wrapper"},(0,o.createElement)(x.RichText,{tagName:"label",className:"zolo-label",value:m,onChange:e=>t({label:e}),placeholder:(0,a.__)("Label","zoloblocks")}),w&&h&&(0,o.createElement)("span",{className:"zolo-required"},(0,a.__)("*","zoloblocks"))),(0,o.createElement)("div",{className:"zolo-field-input-item"},g&&"style-3"!==d&&(0,o.createElement)("div",{className:"zolo-input-icon"},(0,o.createElement)(U,{icon:z})),(0,o.createElement)("textarea",{id:"textarea",name:"message",rows:4,placeholder:y,required:w}))))))},usesContext:["zolo/showFieldIcon","zolo/preset"],save:({attributes:e})=>{const{uniqueId:l,parentClasses:t,preset:r,zoloId:n,showLabel:s,label:i,placeholder:c,showIcon:d,icon:b,isRequired:p,requiredMsg:u,showRequiredSymbol:m}=e,y=x.useBlockProps.save({className:$()(l,X(t),d?"zolo-field-icon":"","form-group")});return(0,o.createElement)("div",{...y,...n&&{id:n}},(0,o.createElement)("div",{className:"zolo-field-item"},s&&(0,o.createElement)("div",{className:"zolo-label-wrapper"},(0,o.createElement)(x.RichText.Content,{tagName:"label",className:"zolo-label",value:i}),p&&m&&(0,o.createElement)("span",{className:"zolo-required"},(0,a.__)("*","zoloblocks"))),(0,o.createElement)("div",{className:"zolo-field-input-item"},d&&"style-3"!==r&&(0,o.createElement)("div",{className:"zolo-input-icon"},(0,o.createElement)(Q,{icon:b})),(0,o.createElement)("textarea",{id:"textarea",name:"message",rows:4,placeholder:c,required:p,...p&&{"data-pristine-required-message":u}}))))}})})()})();