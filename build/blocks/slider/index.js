(()=>{var e,o={2473:(e,o,t)=>{"use strict";const l=window.wp.blocks,{__}=wp.i18n,n="contentWidth",r="contentPadding",a="sliderHeight",i=(__("Bullets","zoloblocks"),__("Fraction","zoloblocks"),__("Progress Bar","zoloblocks"),[{label:__("Slide","zoloblocks"),value:"slide"},{label:__("Fade","zoloblocks"),value:"fade"},{label:__("Cube","zoloblocks"),value:"cube"},{label:__("Coverflow","zoloblocks"),value:"coverflow"},{label:__("Flip","zoloblocks"),value:"flip"}]),s="navWidth",c="navHeight",p="navBorder",d="navBorderRadius",b="navBg",u="navHoverBg",m="navIconSize",w="pagWidth",v="pagHeight",g="pagBorder",k="pagBorderRadius",y="pagBg",z="pagSpacing",E="pagVerticalOffset",$="apagWidth",f="apagHeight",h="apagBorder",S="apagBorderRadius",N="apagBg",{generateResRangeAttributies:B,generateDimensionAttributes:x,generateBorderAttributies:C,generateNormalBGAttributes:P}=window.zoloModule,R={globalConfig:{type:"object",default:{margin:{prefix:"mainMargin"},padding:{prefix:"mainPadding"},background:{prefix:"mainBg"},border:{prefix:"mainBorder"},borderRadius:{prefix:"mainBorderRadius"},boxShadow:{prefix:"mainBoxShadow"},responsiveControls:!0}},sliderOptions:{type:"object"},autoplay:{type:"boolean",default:!1},autoplayDelay:{type:"number",default:3},pauseOnMouseEnter:{type:"boolean",default:!1},infiniteLoop:{type:"boolean",default:!1},showNavigation:{type:"boolean",default:!0},navColor:{type:"string"},navHoverColor:{type:"string"},navHoverBorderColor:{type:"string"},showPagination:{type:"boolean",default:!1},paginationType:{type:"string",default:"bullets"},dynamicBullets:{type:"boolean",default:!1},speed:{type:"number",default:8},sliderEffect:{type:"string",default:"slide"},addNewSlideBlock:{type:"boolean",default:!1},...B(a),...B(n),...x(r),...B(s),...B(c),...C(p),...x(d),...P(b),...P(u),...B(m),...B(E),uniqueId:{type:"string"},blockStyle:{type:"object"},carouselEffect:{type:"string",default:"slide"},customNavIcon:{type:"boolean",default:!0},prevNavIcon:{type:"string",default:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"></path></svg>'},nextNavIcon:{type:"string",default:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"></path></svg>'},...B(w),...B(v),...C(g),...x(k),...P(y),...B(z),...B($),...B(f),...C(h),...x(S),...P(N)},I=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","title":"Slider","name":"zolo/slider","category":"zoloblocks","keywords":["Slide","Slider","Carousel"],"description":"Create instant slideshows in Gutenberg very easily","apiVersion":2,"textdomain":"zoloblocks","example":{"attributes":{"preview":true},"viewportWidth":410},"supports":{"anchor":false,"customClassName":false,"align":["wide","full"]},"editorScript":["file:./index.js","zolo-swiper-editor-script"],"editorStyle":["file:./index.css","zolo-swiper-editor-style"],"style":["zolo-swiper-frontend-style","file:./style-index.css"],"viewScript":["file:./frontend.js","zolo-swiper-frontend-script"]}'),O=window.React,M=window.wp.blockEditor;var A=t(6942),q=t.n(A);const{Fragment:D}=wp.element,{classArrayToStr:H,DisplayZoloIcon:T}=window.zoloModule,F={attributes:{...R,autoplay:{type:"boolean",default:!1},infiniteLoop:{type:"boolean",default:!1},showNavigation:{type:"boolean",default:!0},showPagination:{type:"boolean",default:!1},speed:{type:"number",default:8}},save:({attributes:e})=>{const{uniqueId:o,parentClasses:t,sliderOptions:l,breakpoints:n,showPagination:r,showNavigation:a,customNavIcon:i,prevNavIcon:s,nextNavIcon:c,zoloId:p}=e,d=M.useBlockProps.save({className:q()(o,H(t))});return(0,O.createElement)("div",{...d,...p&&{id:p},...l&&Object.keys(l).length>1&&{"data-swiper-options":JSON.stringify(l)},"data-swiper-breakpoints":JSON.stringify(n)},(0,O.createElement)("div",{className:"swiper"},(0,O.createElement)("div",{className:"swiper-wrapper"},(0,O.createElement)(M.InnerBlocks.Content,null))),r&&(0,O.createElement)("div",{className:"swiper-pagination swiper-pagination-position-bottom"}),(a||void 0===a)&&(0,O.createElement)(D,null,(0,O.createElement)("div",{className:"swiper-navigation-wrap  swiper-navigation-position-center "+(i?"zolo-custom-nav":"")},i&&(0,O.createElement)(D,null,(0,O.createElement)("div",{className:"swiper-nav-button swiper-zolo-prev"},(0,O.createElement)(T,{icon:s})),(0,O.createElement)("div",{className:"swiper-nav-button swiper-zolo-next"},(0,O.createElement)(T,{icon:c}))),!i&&(0,O.createElement)(D,null,(0,O.createElement)("div",{className:"swiper-nav-button swiper-button-prev"}),(0,O.createElement)("div",{className:"swiper-nav-button swiper-button-next"})))))}},j=window.wp.data,G=window.wp.i18n,L=window.wp.components,_=window.wp.hooks,{__:W}=wp.i18n,{InspectorControls:J}=wp.blockEditor,{RangeControl:Z,ToggleControl:V,SelectControl:K,CardDivider:Q}=wp.components,{Fragment:U}=wp.element,{HeaderTabs:X,ResRangeControl:Y,ColorControl:ee,BorderControl:oe,ResDimensionsControl:te,TabPanelControl:le,NormalBGControl:ne,AdvancedOptions:re,ZoloIconPicker:ae,ZoloPanelBody:ie}=window.zoloModule,se=e=>{const{attributes:o,setAttributes:t}=e,{resMode:l,autoplay:B,autoplayDelay:x,pauseOnMouseEnter:C,infiniteLoop:P,showNavigation:I,navColor:M,navHoverColor:A,navHoverBorderColor:q,showPagination:D,speed:H,sliderEffect:T,customNavIcon:F,prevNavIcon:j,nextNavIcon:G}=o,L={resMode:l,attributes:o,setAttributes:t,objAttributes:R};return(0,O.createElement)(J,null,(0,O.createElement)(X,{block:"zolo/slider",attributes:o,setAttributes:t,generalTab:(0,O.createElement)(U,null,(0,O.createElement)(ie,{title:W("General","zoloblocks"),firstOpen:!0,panelProps:e},(0,O.createElement)(Y,{label:W("Height","zoloblocks"),controlName:a,requiredProps:L,min:1,max:1e3})),(0,O.createElement)(ie,{title:W("Slider Options","zoloblocks"),panelProps:e},(0,O.createElement)(Z,{className:"zolo-flex-col-control",label:W("Speed","zoloblocks"),value:H,onChange:e=>t({speed:e}),min:1,max:100,help:W("Default Speed:","zoloblocks")+800+"ms"}),(0,O.createElement)("div",{className:"zolo-custom-heading"},W("show/hide elements","zoloblocks")),(0,O.createElement)(V,{label:W("Infinite Loop","zoloblocks"),checked:P,onChange:()=>t({infiniteLoop:!P})}),(0,O.createElement)(V,{label:W("Autoplay","zoloblocks"),checked:B,onChange:()=>t({autoplay:!B})}),B&&(0,O.createElement)(U,null,(0,O.createElement)(Z,{className:"zolo-flex-col-control",label:W("Autoplay Delay","zoloblocks"),value:x,onChange:e=>t({autoplayDelay:e}),min:1,max:100,help:W("Autoplay Dealy:","zoloblocks")+100*x+"ms"}),(0,O.createElement)(V,{label:W("Pause on Mouse Enter","zoloblocks"),checked:C,onChange:()=>t({pauseOnMouseEnter:!C})})),(0,O.createElement)(V,{label:W("Show Navigation","zoloblocks"),checked:void 0===I||I,onChange:e=>t({showNavigation:e})}),(0,O.createElement)(V,{label:W("Show Pagination","zoloblocks"),checked:D,onChange:()=>t({showPagination:!D})})),(0,O.createElement)(ie,{title:W("Effects","zoloblocks"),panelProps:e},(0,O.createElement)(K,{label:W("Select Effect","zoloblocks"),value:T,options:i,onChange:e=>{t({sliderEffect:e})}})),(I||void 0===I)&&(0,O.createElement)(U,null,(0,O.createElement)(ie,{title:W("Navigation","zoloblocks"),panelProps:e},(0,O.createElement)(V,{label:W("Custom Navigation Icons","zoloblocks"),checked:F,onChange:()=>t({customNavIcon:!F})}),F&&(0,O.createElement)(U,null,(0,O.createElement)(ae,{label:W("Select Prev Icon","zoloblocks"),value:j,onChange:e=>{t({prevNavIcon:e})}}),(0,O.createElement)(ae,{label:W("Select Next Icon","zoloblocks"),value:G,onChange:e=>{t({nextNavIcon:e})}}))))),styleTab:(0,O.createElement)(U,null,(0,O.createElement)(ie,{title:W("Content","zoloblocks"),firstOpen:!0,stylePanel:!0,panelProps:e},(0,O.createElement)(Y,{label:W("Max Width","zoloblocks"),controlName:n,requiredProps:L,min:1,max:2e3}),(0,O.createElement)(te,{label:W("Padding","zoloblocks"),controlName:r,requiredProps:L,forBorderRadius:!1})),I&&(0,O.createElement)(ie,{title:W("Navigation","zoloblocks"),stylePanel:!0,panelProps:e},(0,O.createElement)(le,{normalComponents:(0,O.createElement)(U,null,(0,O.createElement)(ee,{label:W("Color","zoloblocks"),color:M,onChange:e=>t({navColor:e})}),(0,O.createElement)(Y,{label:W("Size","zoloblocks"),controlName:m,requiredProps:L,min:1,max:100}),(0,O.createElement)(Q,null),(0,O.createElement)(ne,{label:W("Background","zoloblocks"),controlName:b,requiredProps:L,noMainBGImg:!0}),(0,O.createElement)(Y,{label:W("Width","zoloblocks"),controlName:s,requiredProps:L,min:1,max:100}),(0,O.createElement)(Y,{label:W("Height","zoloblocks"),controlName:c,requiredProps:L,min:1,max:100,units:[{label:"px",value:"px"},{label:"%",value:"%"},{label:"em",value:"em"},{label:"vh",value:"vh"}]}),(0,O.createElement)(Q,null),(0,O.createElement)(oe,{label:W("Border","zoloblocks"),controlName:p,requiredProps:L,hoverControl:(0,O.createElement)(U,null,(0,O.createElement)(ee,{label:W("Border Color","zoloblocks"),color:q,onChange:e=>t({navHoverBorderColor:e})}))}),(0,O.createElement)(te,{label:W("Border Radius","zoloblocks"),controlName:d,requiredProps:L,forBorderRadius:!0})),hoverComponents:(0,O.createElement)(U,null,(0,O.createElement)(ee,{label:W("Color","zoloblocks"),color:A,onChange:e=>t({navHoverColor:e})}),(0,O.createElement)(ne,{label:W("Background","zoloblocks"),controlName:u,requiredProps:L,noMainBGImg:!0}))})),D&&(0,O.createElement)(U,null,(0,O.createElement)(ie,{title:W("Pagination","zoloblocks"),stylePanel:!0,panelProps:e},(0,O.createElement)(le,{options:[{value:"normal",label:W("Normal","zoloblocks")},{value:"hover",label:W("Active","zoloblocks")}],normalComponents:(0,O.createElement)(U,null,(0,O.createElement)(ne,{label:W("Background","zoloblocks"),controlName:y,requiredProps:L,noMainBGImg:!0}),(0,O.createElement)(Y,{label:W("Width","zoloblocks"),controlName:w,requiredProps:L,min:1,max:100}),(0,O.createElement)(Y,{label:W("Height","zoloblocks"),controlName:v,requiredProps:L,min:1,max:100}),(0,O.createElement)(Q,null),(0,O.createElement)(oe,{label:W("Border","zoloblocks"),controlName:g,requiredProps:L}),(0,O.createElement)(te,{label:W("Border Radius","zoloblocks"),controlName:k,requiredProps:L,forBorderRadius:!0}),(0,O.createElement)(Q,null),(0,O.createElement)(Y,{label:W("Space Between","zoloblocks"),controlName:z,requiredProps:L,min:0,max:100}),(0,O.createElement)(Y,{label:W("Vertical Offset","zoloblocks"),controlName:E,requiredProps:L,min:-100,max:100})),hoverComponents:(0,O.createElement)(U,null,(0,O.createElement)(ne,{label:W("Background","zoloblocks"),controlName:N,requiredProps:L,noMainBGImg:!0}),(0,O.createElement)(Y,{label:W("Width","zoloblocks"),controlName:$,requiredProps:L,min:1,max:100}),(0,O.createElement)(Y,{label:W("Height","zoloblocks"),controlName:f,requiredProps:L,min:1,max:100}),(0,O.createElement)(Q,null),(0,O.createElement)(oe,{label:W("Border","zoloblocks"),controlName:h,requiredProps:L}),(0,O.createElement)(te,{label:W("Border Radius","zoloblocks"),controlName:S,requiredProps:L,forBorderRadius:!0}))})))),advancedTab:(0,O.createElement)(U,null,(0,O.createElement)(re,{attributes:o,setAttributes:t,requiredProps:L,block:"zolo/slider"}))}))},{generateResRangeStyle:ce,generateDimensionStyle:pe,generateBorderStyle:de,generateNormalBGControlStyles:be,GlobalStyleHanlder:ue}=window.zoloModule,me=({props:e})=>{const{attributes:o,setAttributes:t}=e,{uniqueId:l,navColor:i,navHoverColor:B,navHoverBorderColor:x}=o,{desktopRangeStyle:C,tabRangeStyle:P,mobRangeStyle:R}=ce({controlName:a,property:"height",attributes:o}),{desktopRangeStyle:I,tabRangeStyle:M,mobRangeStyle:A}=ce({controlName:n,property:"max-width",attributes:o}),{dimensionStylesDesktop:q,dimensionStylesTab:D,dimensionStylesMobile:H}=pe({controlName:r,styleFor:"padding",attributes:o}),{desktopRangeStyle:T,tabRangeStyle:F,mobRangeStyle:j}=ce({controlName:s,property:"width",attributes:o}),{desktopRangeStyle:G,tabRangeStyle:L,mobRangeStyle:W}=ce({controlName:c,property:"height",attributes:o}),{desktopBorderStyle:J,tabBorderStyle:Z,mobBorderStyle:V}=de({controlName:p,attributes:o}),{dimensionStylesDesktop:K,dimensionStylesTab:Q,dimensionStylesMobile:U}=pe({controlName:d,styleFor:"border-radius",attributes:o}),{backgroundStylesDesktop:X,backgroundStylesTab:Y,backgroundStylesMobile:ee}=be({controlName:b,attributes:o,noMainBGImg:!0}),{backgroundStylesDesktop:oe,backgroundStylesTab:te,backgroundStylesMobile:le}=be({controlName:u,attributes:o,noMainBGImg:!0}),{desktopRangeStyle:ne,tabRangeStyle:re,mobRangeStyle:ae}=ce({controlName:m,property:"font-size",attributes:o}),{desktopRangeStyle:ie,tabRangeStyle:se,mobRangeStyle:me}=ce({controlName:m,property:"width",attributes:o}),{desktopRangeStyle:we,tabRangeStyle:ve,mobRangeStyle:ge}=ce({controlName:m,property:"height",attributes:o}),{desktopRangeStyle:ke,tabRangeStyle:ye,mobRangeStyle:ze}=ce({controlName:w,property:"width",attributes:o}),{desktopRangeStyle:Ee,tabRangeStyle:$e,mobRangeStyle:fe}=ce({controlName:v,property:"height",attributes:o}),{desktopRangeStyle:he,tabRangeStyle:Se,mobRangeStyle:Ne}=ce({controlName:E,property:"bottom",attributes:o}),{desktopBorderStyle:Be,tabBorderStyle:xe,mobBorderStyle:Ce}=de({controlName:g,attributes:o}),{dimensionStylesDesktop:Pe,dimensionStylesTab:Re,dimensionStylesMobile:Ie}=pe({controlName:k,styleFor:"border-radius",attributes:o}),{backgroundStylesDesktop:Oe,backgroundStylesTab:Me,backgroundStylesMobile:Ae}=be({controlName:y,attributes:o,noMainBGImg:!0}),{desktopRangeStyle:qe,tabRangeStyle:De,mobRangeStyle:He}=ce({controlName:z,property:"gap",attributes:o}),{desktopRangeStyle:Te,tabRangeStyle:Fe,mobRangeStyle:je}=ce({controlName:$,property:"width",attributes:o}),{desktopRangeStyle:Ge,tabRangeStyle:Le,mobRangeStyle:_e}=ce({controlName:f,property:"height",attributes:o}),{desktopBorderStyle:We,tabBorderStyle:Je,mobBorderStyle:Ze}=de({controlName:h,attributes:o}),{dimensionStylesDesktop:Ve,dimensionStylesTab:Ke,dimensionStylesMobile:Qe}=pe({controlName:S,styleFor:"border-radius",attributes:o}),{backgroundStylesDesktop:Ue,backgroundStylesTab:Xe,backgroundStylesMobile:Ye}=be({controlName:N,attributes:o,noMainBGImg:!0}),eo=`\n        .${l}.wp-block-zolo-slider .swiper-slide,\n        .${l}.wp-block-zolo-slider .swiper-slide .zolo-bgv-hosted {\n            ${C}\n        }\n        .${l}.wp-block-zolo-slider .swiper-content-outer {\n            ${I}\n            ${q}\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-button-prev:hover, .${l}.wp-block-zolo-slider .swiper-button-next:hover, .${l}.wp-block-zolo-slider .swiper-zolo-next:hover, .${l}.wp-block-zolo-slider .swiper-zolo-prev:hover {\n            border-color: ${x} !important;\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-button-next, .${l}.wp-block-zolo-slider .swiper-button-prev,\n        .${l}.wp-block-zolo-slider .swiper-zolo-next, .${l}.wp-block-zolo-slider .swiper-zolo-prev {\n            ${J}\n            ${K}\n            ${X}\n            ${T}\n            ${G}\n        }\n        .${l}.wp-block-zolo-slider .swiper-button-next:hover, .${l}.wp-block-zolo-slider .swiper-button-prev:hover,\n        .${l}.wp-block-zolo-slider .swiper-zolo-next:hover, .${l}.wp-block-zolo-slider .swiper-zolo-prev:hover {\n            ${oe}\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-button-next:after, .${l}.wp-block-zolo-slider .swiper-button-prev:after {\n            color: ${i};\n            ${ne}\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-zolo-next svg, .${l}.wp-block-zolo-slider .swiper-zolo-prev svg {\n            fill: ${i};\n            ${ie}\n            ${we}\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-button-next:hover:after, .${l}.wp-block-zolo-slider .swiper-button-prev:hover:after, .${l}.wp-block-zolo-slider .swiper-zolo-next:hover i, .${l}.wp-block-zolo-slider .swiper-zolo-prev:hover i {\n            color: ${B};\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-zolo-next:hover svg, .${l}.wp-block-zolo-slider .swiper-zolo-prev:hover svg {\n            fill: ${B};\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-pagination {\n            ${he}\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullets {\n            ${qe}\n        }\n\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet {\n            ${ke}\n            ${Ee}\n            ${Be}\n            ${Pe}\n            ${Oe}\n        }\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {\n            ${Te}\n            ${Ge}\n            ${We}\n            ${Ve}\n            ${Ue}\n        }\n    `,oo=`\n        .${l}.wp-block-zolo-slider .swiper-slide,\n        .${l}.wp-block-zolo-slider .swiper-slide .zolo-bgv-hosted {\n            ${P}\n        }\n        .${l}.wp-block-zolo-slider .swiper-content-outer {\n            ${M}\n            ${D}\n        }\n        .${l}.wp-block-zolo-slider .swiper-button-next, .${l}.wp-block-zolo-slider .swiper-button-prev {\n            ${F}\n            ${L}\n            ${Z}\n            ${Q}\n            ${Y}\n        }\n        .${l}.wp-block-zolo-slider .swiper-button-next:hover, .${l}.wp-block-zolo-slider .swiper-button-prev:hover {\n            ${te}\n        }\n        .${l}.wp-block-zolo-slider .swiper-button-next:after, .${l}.wp-block-zolo-slider .swiper-button-prev:after {\n            ${re}\n        }\n        .${l}.wp-block-zolo-slider .swiper-zolo-next svg, .${l}.wp-block-zolo-slider .swiper-zolo-prev svg {\n            ${se}\n            ${ve}\n        }\n        .${l}.wp-block-zolo-slider .swiper-pagination {\n            ${Se}\n        }\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullet {\n            ${ye}\n            ${$e}\n            ${xe}\n            ${Re}\n            ${Me}\n            ${De}\n        }\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {\n            ${Fe}\n            ${Le}\n            ${Je}\n            ${Ke}\n            ${Xe}\n        }\n    `,to=`\n        .${l}.wp-block-zolo-slider .swiper-slide,\n        .${l}.wp-block-zolo-slider .swiper-slide .zolo-bgv-hosted {\n            ${R}\n        }\n        .${l}.wp-block-zolo-slider .swiper-content-outer {\n            ${A}\n            ${H}\n        }\n        .${l}.wp-block-zolo-slider .swiper-button-next, .${l}.wp-block-zolo-slider .swiper-button-prev {\n            ${j}\n            ${W}\n            ${V}\n            ${U}\n            ${ee}\n        }\n        .${l}.wp-block-zolo-slider .swiper-button-next:hover, .${l}.wp-block-zolo-slider .swiper-button-prev:hover {\n            ${le}\n        }\n        .${l}.wp-block-zolo-slider .swiper-button-next:after, .${l}.wp-block-zolo-slider .swiper-button-prev:after {\n            ${ae}\n        }\n        .${l}.wp-block-zolo-slider .swiper-zolo-next svg, .${l}.wp-block-zolo-slider .swiper-zolo-prev svg {\n            ${me}\n            ${ge}\n        }\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullet {\n           ${Ne}\n        }\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullet {\n            ${ze}\n            ${fe}\n            ${Ce}\n            ${Ie}\n            ${Ae}\n            ${He}\n        }\n        .${l}.wp-block-zolo-slider .swiper-pagination-bullets .swiper-pagination-bullet-active {\n            ${je}\n            ${_e}\n            ${Ze}\n            ${Qe}\n            ${Ye}\n        }\n    `;return(0,O.createElement)(O.Fragment,null,(0,O.createElement)(ue,{attributes:o,setAttributes:t,desktopAllStyle:(0,_.applyFilters)("zolo.slider.desktopAllStyle",eo,e),tabAllStyle:(0,_.applyFilters)("zolo.slider.tabletAllStyle",oo,e),mobileAllStyle:(0,_.applyFilters)("zolo.slider.mobileAllStyle",to,e)}))},{Fragment:we,useEffect:ve,useRef:ge}=wp.element,{classArrayToStr:ke,DisplayZoloIcon:ye,SidebarOpener:ze}=window.zoloModule,{Fragment:Ee}=wp.element,{classArrayToStr:$e,DisplayZoloIcon:fe}=window.zoloModule,{BlockIcons:he}=window.zoloIcons;(0,l.registerBlockType)(I,{icon:{src:he.slider},attributes:R,edit:function(e){const{attributes:o,setAttributes:t,className:n,clientId:r,isSelected:a}=e,{preview:i,resMode:s,uniqueId:c,parentClasses:p,autoplay:d,autoplayDelay:b,pauseOnMouseEnter:u,infiniteLoop:m,showNavigation:w,showPagination:v,paginationType:g,dynamicBullets:k,speed:y,sliderEffect:z,addNewSlideBlock:E,customNavIcon:$,prevNavIcon:f,nextNavIcon:h}=o;if(i)return(0,O.createElement)("img",{src:zoloParams.blocksPreview.slider,alt:(0,G.__)("Slider Preview","zoloblocks")});const S=(0,M.useBlockProps)({className:q()(n,`${c}`,ke(p),`${"Desktop"!==s?s:""}`)}),N=(0,_.applyFilters)("zolo.blocks.render.hook.before",[],e),B=(0,_.applyFilters)("zolo.blocks.render.hook.after",[],e),x=ge(null),C=(0,j.useDispatch)();ve((()=>{var e;x.current&&(e=x.current).addEventListener("click",(function(o){o.preventDefault();const t=e.querySelector(".wp-block-zolo-slider");t&&t.contains(o.target)&&(C("core/block-editor").selectBlock(r),C("core/edit-post").openGeneralSidebar("edit-post/block"))}))}),[]),ve((()=>{const e={...void 0!==y&&{speed:100*y},...void 0!==m&&{loop:m},..."slide"!==z&&{effect:z},...void 0!==d&&{autoplay:!!d&&{delay:100*b,pauseOnMouseEnter:u}},...(w||void 0===w)&&{navigation:{nextEl:$?`.${c} .swiper-zolo-next`:`.${c} .swiper-button-next`,prevEl:$?`.${c} .swiper-zolo-prev`:`.${c} .swiper-button-prev`}},...void 0!==v&&{pagination:!!v&&{el:`.${c} .swiper-pagination`,clickable:!0,type:g,dynamicBullets:k}}};t({sliderOptions:e}),function(e,o){e.swiper&&e.swiper.destroy(),new Swiper(e,o&&Object.keys(o).length>1?o:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!1,autoplay:!1,speed:800,effect:"slide"})}(x.current,e)}),[d,b,u,m,w,v,g,k,y,z,$,f,h,E,s]);const P=(0,M.useInnerBlocksProps)({className:"swiper-wrapper",slot:"container-start"},{allowedBlocks:["zolo/slide"],template:[["zolo/slide"],["zolo/slide"],["zolo/slide"]],templateLock:!1,renderAppender:!1,orientation:"horizontal"});return(0,O.createElement)(we,null,(0,O.createElement)(me,{props:e}),(0,O.createElement)("style",null,'\n                [data-type="zolo/slide"] {\n                    height: 100%;\n                }\n            '),a&&(0,O.createElement)(se,{attributes:o,setAttributes:t}),(0,O.createElement)(M.BlockControls,null,(0,O.createElement)(L.ToolbarGroup,null,(0,O.createElement)(L.ToolbarButton,{title:(0,G.__)("Add Slide","zoloblocks"),icon:"insert",onClick:()=>{const e=(0,l.createBlock)("zolo/slide");C("core/block-editor").insertBlocks(e,100,r),t({addNewSlideBlock:!E})}}))),(0,O.createElement)("div",{...S},N&&N,(0,O.createElement)(ze,{clientId:r}),(0,O.createElement)("div",{className:"swiper",ref:x},(0,O.createElement)("div",{...P})),v&&(0,O.createElement)("div",{class:"swiper-pagination swiper-pagination-position-bottom"}),(w||void 0===w)&&(0,O.createElement)(we,null,(0,O.createElement)("div",{className:"swiper-navigation-wrap  swiper-navigation-position-center "+($?"zolo-custom-nav":"")},$&&(0,O.createElement)(we,null,(0,O.createElement)("div",{className:"swiper-nav-button swiper-zolo-prev"},(0,O.createElement)(ye,{icon:f})),(0,O.createElement)("div",{className:"swiper-nav-button swiper-zolo-next"},(0,O.createElement)(ye,{icon:h}))),!$&&(0,O.createElement)(we,null,(0,O.createElement)("div",{className:"swiper-nav-button swiper-button-prev"}),(0,O.createElement)("div",{className:"swiper-nav-button swiper-button-next"})))),B&&B))},save:function(e){const{attributes:o}=e,{uniqueId:t,parentClasses:l,sliderOptions:n,breakpoints:r,showPagination:a,showNavigation:i,customNavIcon:s,prevNavIcon:c,nextNavIcon:p,zoloId:d}=o,b=M.useBlockProps.save({className:q()(t,$e(l))}),u=(0,_.applyFilters)("zolo.blocks.render.hook.before",[],e),m=(0,_.applyFilters)("zolo.blocks.render.hook.after",[],e);return(0,O.createElement)("div",{...b,...d&&{id:d},...n&&Object.keys(n).length>1&&{"data-swiper-options":JSON.stringify(n)},"data-swiper-breakpoints":JSON.stringify(r)},u&&u,(0,O.createElement)("div",{className:"swiper"},(0,O.createElement)("div",{className:"swiper-wrapper"},(0,O.createElement)(M.InnerBlocks.Content,null))),a&&(0,O.createElement)("div",{className:"swiper-pagination swiper-pagination-position-bottom"}),(i||void 0===i)&&(0,O.createElement)(Ee,null,(0,O.createElement)("div",{className:"swiper-navigation-wrap  swiper-navigation-position-center "+(s?"zolo-custom-nav":"")},s&&(0,O.createElement)(Ee,null,(0,O.createElement)("div",{className:"swiper-nav-button swiper-zolo-prev"},(0,O.createElement)(fe,{icon:c})),(0,O.createElement)("div",{className:"swiper-nav-button swiper-zolo-next"},(0,O.createElement)(fe,{icon:p}))),!s&&(0,O.createElement)(Ee,null,(0,O.createElement)("div",{className:"swiper-nav-button swiper-button-prev"}),(0,O.createElement)("div",{className:"swiper-nav-button swiper-button-next"})))),m&&m)},deprecated:[F]})},6942:(e,o)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e="",o=0;o<arguments.length;o++){var t=arguments[o];t&&(e=a(e,r(t)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var t in e)l.call(e,t)&&e[t]&&(o=a(o,t));return o}function a(e,o){return o?e?e+" "+o:e+o:e}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(o,[]))||(e.exports=t)}()}},t={};function l(e){var n=t[e];if(void 0!==n)return n.exports;var r=t[e]={exports:{}};return o[e](r,r.exports,l),r.exports}l.m=o,e=[],l.O=(o,t,n,r)=>{if(!t){var a=1/0;for(p=0;p<e.length;p++){t=e[p][0],n=e[p][1],r=e[p][2];for(var i=!0,s=0;s<t.length;s++)(!1&r||a>=r)&&Object.keys(l.O).every((e=>l.O[e](t[s])))?t.splice(s--,1):(i=!1,r<a&&(a=r));if(i){e.splice(p--,1);var c=n();void 0!==c&&(o=c)}}return o}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[t,n,r]},l.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return l.d(o,{a:o}),o},l.d=(e,o)=>{for(var t in o)l.o(o,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={9098:0,9566:0};l.O.j=o=>0===e[o];var o=(o,t)=>{var n,r,a=t[0],i=t[1],s=t[2],c=0;if(a.some((o=>0!==e[o]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(s)var p=s(l)}for(o&&o(t);c<a.length;c++)r=a[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(p)},t=self.webpackChunkzoloblocks=self.webpackChunkzoloblocks||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var n=l.O(void 0,[9566],(()=>l(2473)));n=l.O(n)})();