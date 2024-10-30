!function(){var e={184:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var o=s.apply(null,n);o&&e.push(o)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t.apply(this,arguments)}var i=window.wp.element,s=n(184),r=n.n(s),o=window.wp.i18n,a=window.wp.blockEditor,l=(window.wp.serverSideRender,window.wp.apiFetch,window.wp.components),c=window.wp.data;const u=[{id:"submission",name:(0,o.__)("Signup Form","mailster"),title_DEL:"/",label:(0,o.__)("This is the homepage","mailster"),help:(0,o.__)("This section is displayed if users visit the newsletter homepage.","mailster")},{id:"profile",name:(0,o.__)("Profile","mailster"),title_DEL:"/profile",label:(0,o.__)("This is the profile page","mailster"),help:(0,o.__)("This section is displayed if users visits the profile page. People can update their subscription on this page.","mailster")},{id:"unsubscribe",name:(0,o.__)("Unsubscribe","mailster"),title_DEL:"/unsubscribe",label:(0,o.__)("This is the unsubscribe page","mailster"),help:(0,o.__)("This section is displayed on the unsubscribe page. If the user clicks an unsubscribe link in a newsletter, he will be redirected to this page.","mailster")},{id:"subscribe",name:(0,o.__)("Subscribe","mailster"),title_DEL:"/subscribe",label:(0,o.__)("This is the Landing page","mailster"),help:(0,o.__)("Use this section to define the content when people click on the link in the confirmation email.","mailster")}];function m(e){let{id:t,align:n}=e;const s=new URL("https://kb.mailster.co/"+t);s.searchParams.set("utm_campaign","plugin"),s.searchParams.set("utm_medium","link"),s.searchParams.set("utm_source","Mailster Plugin"),s.searchParams.set("utm_term","workflow");var r={};return n&&(r.float=n),(0,i.createElement)("a",{className:"mailster-help",href:s.toString(),"data-article":t,style:r})}function p(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=(0,c.select)("core/block-editor").getBlocks(t);var s=i.find((t=>new RegExp(e,"g").test(t.name)));if(s)return s.rootClientId=t,s;if(n)for(var r=0;r<i.length;r++)if(s=p(e,i[r].clientId))return s;return!1}function h(e){const{current:t,onSelect:n}=e,s=p("mailster/homepage"),r=(0,c.useSelect)((e=>e("core/block-editor").getBlockAttributes(s.clientId))),h=(0,c.useSelect)((e=>e("core/editor").getPermalink()));return(0,i.createElement)(a.InspectorControls,null,(0,i.createElement)(l.Panel,null,(0,i.createElement)(l.PanelBody,{initialOpen:!0},(0,i.createElement)(l.PanelRow,null,(0,i.createElement)(l.BaseControl,{label:(0,o.__)("Newsletter Homepage Sections","mailster")},(0,i.createElement)(m,{id:"6453abdab9f4b70821b98a1b",align:"right"}),(0,i.createElement)("div",{className:"components-dropdown-menu__menu context-buttons"},(0,i.createElement)((e=>{let{onClose:s=(()=>{})}=e;return u.map(((e,a)=>{const c="submission"==e.id?h:(0,o.sprintf)("%s%s",h,mailster_homepage_slugs[e.id]||e.id),u=r[e.id]||"subscribe"==e.id;return(0,i.createElement)(l.MenuGroup,{key:a,isSelected:e.id===t},(0,i.createElement)(l.MenuItem,{info:u?c:(0,o.__)("Not defined yet!","mailster"),isDestructive:!u,isPressed:e.id===t,onClick:()=>{n(e.id,a),s()}},e.name,(0,i.createElement)(l.ExternalLink,{href:c})))}))}),null))))),(0,i.createElement)(l.PanelBody,{initialOpen:!0},(0,i.createElement)(l.PanelRow,null,(0,i.createElement)(l.Tip,null,u[t]?u[t].help:(0,o.__)("You have to define a form for each section. You can use the same form as well.","mailster")))),("profile"==t||"unsubscribe"==t)&&(0,i.createElement)(l.PanelBody,{initialOpen:!0},(0,i.createElement)(l.PanelRow,null,(0,i.createElement)(l.ExternalLink,{href:"edit.php?post_type=newsletter&page=mailster_settings#texts"},(0,o.__)("Change the text of the button on the Texts tab in the settings.","mailster"))))))}window.lodash,window.wp.date;var d=window.wp.primitives,b=(0,i.createElement)(d.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(d.Path,{d:"M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"}));function f(e){const{attributes:t,setAttributes:n,current:s,onSelect:r}=e,{}=t,c=u.find((e=>e.id===s));return(0,i.createElement)(a.BlockControls,{group:"block"},(0,i.createElement)(l.ToolbarDropdownMenu,{icon:b,label:(0,o.__)("Change element alignment","mailster"),controls:u.map((e=>({role:"menuitemradio",title:e.name,isActive:e.id===s,onClick:()=>r(e.id)})))}),(0,i.createElement)(l.ToolbarButton,null,null==c?void 0:c.name))}const g=[["mailster/homepage-context",{type:"submission"}],["mailster/homepage-context",{type:"profile"}],["mailster/homepage-context",{type:"unsubscribe"}],["mailster/homepage-context",{type:"subscribe"}]];var w=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mailster/homepage","version":"0.4.0","title":"Mailster Homepage","keywords":["form","newsletter","mailster","subscribe","signup","optin","opt-in","opt in","email","mail"],"category":"widgets","supports":{"multiple":false,"html":false,"anchor":false,"align":true,"className":false,"customClassName":false,"reusable":false},"attributes":{"id":{"type":"integer"},"submission":{"type":"integer"},"profile":{"type":"integer"},"unsubscribe":{"type":"integer"},"profile_button":{"type":"string"},"unsubscribe_button":{"type":"string"}},"providesContext":{"mailster-homepage-context/align":"align","mailster-homepage-context/submission":"submission","mailster-homepage-context/profile":"profile","mailster-homepage-context/unsubscribe":"unsubscribe"},"textdomain":"mailster","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),v=(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)("g",{fill:"none"},(0,i.createElement)("path",{d:"M0 0h24v24H0z"}),(0,i.createElement)("path",{stroke:"#323232",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3.734 9.764L12.002 3l8.265 6.764c.464.379.733.948.733 1.547V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.688c0-.6.269-1.169.734-1.548z"})));const{name:_,...E}=w;(0,e.registerBlockType)(_,{...E,icon:v,edit:function(e){const{attributes:n,setAttributes:s,isSelected:c}=e,{}=n,m=["mailster-homepage"],[p,d]=(0,i.useState)();(0,i.useEffect)((()=>{if(p)return history.replaceState(void 0,void 0,"#mailster-"+p),()=>{history.pushState("",document.title,location.pathname+location.search)}}),[p]),(0,i.useEffect)((()=>(window.addEventListener("hashchange",w),()=>{window.removeEventListener("hashchange",w)})),[]),(0,i.useEffect)((()=>{const e=location.hash.substring(10);e&&d(e)}),[]),(0,i.useEffect)((()=>{n.submission&&(n.profile||s({profile:n.submission}),n.unsubscribe||s({unsubscribe:n.submission}))}),[n]);const b=(e,t)=>{location.hash="#mailster-"+e,d(e)},w=()=>{var e;d(null!==(e=location.hash.substring(10))&&void 0!==e?e:"submission")},v=u.find((e=>e.id===p));m.push("tab-"+(p||"submission"));const _=(0,a.useBlockProps)({className:r()({},m)});return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",_,v&&(0,i.createElement)(l.Tooltip,{text:v.label},(0,i.createElement)("span",{className:"section-info"},(0,o.sprintf)((0,o.__)("[Mailster]: %s","mailster"),v.name))),(0,i.createElement)(a.InnerBlocks,{template:g,templateLock:"all"})),(0,i.createElement)(h,{current:p||"submission",onSelect:b}),(0,i.createElement)(f,t({},e,{current:p||"submission",onSelect:b})))},save:function(e){return(0,i.createElement)(a.InnerBlocks.Content,a.useBlockProps.save())}})}()}();