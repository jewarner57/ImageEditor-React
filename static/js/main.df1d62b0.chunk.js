(this["webpackJsonpimage-editor-react"]=this["webpackJsonpimage-editor-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,c){},,,,,function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),a=c(5),s=c.n(a),o=(c(17),c(3)),r=c(2),l="ADD_OBJECT",h="REMOVE_OBJECT",j="CLEAR_OBJECTS",d="UPDATE_OBJECT",u="SET_SELECTED_OBJECT",v=function(t){return{type:l,payload:{obj:t}}},b=function(t){return{type:h,payload:{obj:t}}},O=function(t){return{type:d,payload:{obj:t}}},g=function(t){return{type:u,payload:{obj:t}}},x=c(39),f=(c(22),c(0));var p=function(t){var e=t.clickAction,c=t.icon,n=t.tooltip,i=t.addonClass;return Object(f.jsx)("div",{className:"editorButton ".concat(i),onClick:function(t){return e(t)},title:n,children:c})};c(24);var m=function(t){var e=Object(r.b)(),c=Object(n.useState)(),i=Object(o.a)(c,2),a=i[0],s=i[1];return Object(f.jsxs)("div",{className:"ImageUpload",children:[Object(f.jsx)(p,{clickAction:function(t){a.click()},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"})}),tooltip:"Upload Image"}),Object(f.jsx)("input",{className:"uploadInput",type:"file",ref:function(t){return s(t)},onChange:function(t){return function(t){var c=Object(x.a)(),n=new Image;n.src=URL.createObjectURL(t.target.files[0]),n.onload=function(){var t={type:"image",id:c,url:n.src,xPos:0,yPos:0,width:n.width,height:n.height,isBeingCropped:!1,isBeingDragged:!1,dragStartX:0,dragStartY:0,sizeProportion:n.height/n.width,sx:0,sy:0,sWidth:n.width,sHeight:n.height};e(v(t)),e(g(t))}}(t)}})]})};c(25);var w=function(t){var e=Object(r.b)();return Object(f.jsx)("div",{className:"AddText",children:Object(f.jsx)(p,{clickAction:function(){var t="Hello World",c={type:"text",id:Object(x.a)(),text:t,font:"monospace",fontSize:"".concat(50,"px"),xPos:10,yPos:50,width:30*t.length,height:50,isBeingDragged:!1,dragStartX:0,dragStartY:0,color:"#000000"};e(v(c)),e(g(c))},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"24",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"})}),tooltip:"Insert Text"})})};c(26);var y=function(t){var e=t.contents,c=t.exitAction,n=t.header;return Object(f.jsxs)("div",{className:"SettingsModal",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{className:"headerTitle",children:n}),Object(f.jsx)("div",{className:"closeModal",onClick:function(){c(!1)},children:"X"})]}),e]})};c(27);var C=function(t){var e=Object(r.b)(),c=Object(n.useState)(!1),i=Object(o.a)(c,2),a=i[0],s=i[1];return Object(f.jsxs)("div",{className:"ClearCanvas",children:[Object(f.jsx)(p,{clickAction:function(){return s(!a)},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})}),tooltip:"Clear Canvas"}),a?Object(f.jsx)(y,{header:"Delete All",exitAction:s,contents:Object(f.jsxs)("div",{className:"clearCanvasModal",children:[Object(f.jsx)("div",{children:"Are you sure you want to clear the canvas?"}),Object(f.jsxs)("div",{className:"modalButtonWrapper",children:[Object(f.jsx)("div",{className:"cancelButton modalButton",onClick:function(){return s(!1)},children:"Cancel"}),Object(f.jsx)("div",{className:"clearButton modalButton",onClick:function(){var t;e({type:j,payload:{obj:t}}),s(!1)},children:"Clear"})]})]})}):""]})},z=c(7);c(28);var S=function(t){return Object(f.jsx)("div",{className:"VerticalToolbar",children:t.contents.map((function(t,e){return Object(f.jsx)("div",{children:t},e)}))})};var B=function(t){var e=Object(r.c)((function(t){return t.selectedObject})),c=Object(r.b)();return Object(f.jsx)("div",{className:"DeleteItem",children:Object(f.jsx)(p,{clickAction:function(){c(b(e)),c(g(!1))},icon:Object(f.jsx)("svg",{width:"30",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(f.jsx)("path",{d:"M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z"})}),tooltip:"Delete ".concat(e.type)})})};var N=function(t){var e=Object(r.c)((function(t){return t.selectedObject})),c=Object(r.b)();return Object(f.jsx)("div",{className:"BringForward",children:Object(f.jsx)(p,{clickAction:function(){e.zIndex+=1,c(O(e))},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M12 3l12 18h-24z"})}),tooltip:"Bring Forward"})})};var P=function(t){var e=Object(r.c)((function(t){return t.selectedObject})),c=Object(r.b)();return Object(f.jsx)("div",{className:"SendBackward",children:Object(f.jsx)(p,{clickAction:function(){e.zIndex-=1,c(O(e))},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M12 21l-12-18h24z"})}),tooltip:"Send Backward"})})};c(29);var A=function(t){var e=t.label,c=t.changeAction,i=t.initialVal,a=Object(n.useState)(i),s=Object(o.a)(a,2),r=s[0],l=s[1];return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:[Object(f.jsxs)("div",{children:[e,":"]}),Object(f.jsx)("input",{value:r,onChange:function(t){l(t.target.value),c(t)}})]})})};c(30);var D=function(t){var e=Object(r.c)((function(t){return t.selectedObject})),c=Object(n.useState)(!1),i=Object(o.a)(c,2),a=i[0],s=i[1],l=Object(n.useState)(e.color),h=Object(o.a)(l,2),j=h[0],d=h[1],u=Object(r.b)(),v=function(t){e.width=.6*t.fontSize.slice(0,-2)*t.text.length,e.height=Number(e.fontSize.slice(0,-2)),u(O(e))};return Object(f.jsxs)("div",{className:"ChangeTextSettings",children:[Object(f.jsx)(p,{clickAction:function(){s(!a)},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z"})}),tooltip:"Text Settings"}),a?Object(f.jsx)(y,{exitAction:s,header:"Edit Textbox",contents:Object(f.jsxs)("div",{className:"modalContents",children:[Object(f.jsx)(A,{label:"Text",initialVal:e.text,changeAction:function(t){e.text=t.target.value,v(e)}}),Object(f.jsx)(A,{label:"Size",initialVal:e.fontSize.slice(0,-2),changeAction:function(t){e.fontSize=t.target.value+"px",v(e)}}),Object(f.jsxs)("label",{children:[Object(f.jsx)("div",{children:"Color:"}),Object(f.jsx)("input",{value:j,type:"color",onChange:function(t){d(t.target.value),e.color=t.target.value,u(O(e))}})]})]})}):""]})};c(31);var I=function(t){var e=Object(r.c)((function(t){return t.selectedObject})),c=Object(n.useState)(!1),i=Object(o.a)(c,2),a=i[0],s=i[1],l=Object(n.useState)(!0),h=Object(o.a)(l,2),j=h[0],d=h[1],u=Object(r.b)();return Object(f.jsxs)("div",{className:"ChangeTextSettings",children:[Object(f.jsx)(p,{clickAction:function(){s(!a)},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M15.562 20.22l-3.562.718.719-3.562 2.843 2.844zm-2.136-3.552l2.844 2.845 7.73-7.73-2.845-2.845-7.729 7.73zm-2.91.332l4.51-4.76-2.026-3.24-2.52 4-2.48-1.96-4 5.96h6.516zm-3.516-8.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5zm3.352 10.5h-8.352v-14h18v2.312h2v-4.312h-22v18h9.969l.383-2z"})}),tooltip:"Image Settings"}),a?Object(f.jsx)(y,{exitAction:s,header:"Edit Image",contents:Object(f.jsxs)("div",{className:"modalContents",children:[Object(f.jsx)(A,{label:"Width",initialVal:e.width,changeAction:function(t){e.width=Number(t.target.value),u(O(e)),j&&(e.height=Math.round(Number(t.target.value*e.sizeProportion)),console.log(e.height))}}),j?"":Object(f.jsx)(A,{label:"Height",initialVal:e.height,changeAction:function(t){e.height=Math.round(Number(t.target.value)),u(O(e))}}),Object(f.jsxs)("label",{children:[Object(f.jsx)("div",{children:"Scale Proportionally"}),Object(f.jsx)("input",{checked:j,onChange:function(){return d(!j)},type:"checkbox"})]})]})}):""]})};var k=function(t){var e=Object(r.c)((function(t){return t.selectedObject})),c=Object(r.b)();return Object(f.jsx)("div",{className:"Deselect",children:Object(f.jsx)(p,{clickAction:function(){c(g(!1))},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M11 24v-2h-4v2h4zm8-22h3v3h2v-5h-5v2zm-19 15h2v-4h-2v4zm0-6h2v-4h-2v4zm2-6v-3h3v-2h-5v5h2zm22 2h-2v4h2v-4zm0 6h-2v4h2v-4zm-2 6v3h-3v2h5v-5h-2zm-17 3h-3v-3h-2v5h5v-2zm12 2v-2h-4v2h4zm-6-22v-2h-4v2h4zm6 0v-2h-4v2h4zm0 11h-10v-2h10v2z"})}),tooltip:"Deselect ".concat(e.type)})})};c(32);var M=function(t){var e=Object(r.c)((function(t){return t.selectedObject})),c=Object(r.b)(),i=Object(n.useState)(),a=Object(o.a)(i,2),s=a[0],l=a[1],h=function(t,n,i,a,s){var o=Object(x.a)();return c(v({type:"handle",id:o,xPos:t,yPos:n,width:i,height:a,handleLocation:s,isBeingDragged:!1,isBeingCropped:!1,parentID:e.id,dragStartX:0,dragStartY:0,color:"#ebb134"})),o};return Object(f.jsx)("div",{className:"CropImage",children:Object(f.jsx)(p,{clickAction:function(){e.isBeingCropped=!e.isBeingCropped,c(O(e)),e.isBeingCropped?l([h(e.xPos,e.yPos,30,30,"top"),h(Number(e.width)+Number(e.xPos)-30,Number(e.height)+Number(e.yPos)-30,30,30,"bottom")]):(c(b({id:s[0]})),c(b({id:s[1]})),l([]))},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M24 18h-4v-14h-14v-4h-2v4h-4v2h4v14h14v4h2v-4h4v-2zm-18 0v-12h12v12h-12zm2-8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.292.5l-1.812 3.833-1.48-1.272-2 3.439h8.292l-3-6z"})}),tooltip:"Crop Image",addonClass:e.isBeingCropped?"active":""})})};c(33);var T=function(t){var e=Object(r.c)((function(t){return t.selectedObject}));return Object(f.jsx)("div",{className:"SelectedObjectToolbar",children:Object(f.jsx)(S,{contents:e?[].concat(Object(z.a)(function(t){switch(t){case"text":return[Object(f.jsx)(D,{})];case"image":return[Object(f.jsx)(I,{}),Object(f.jsx)(M,{})];default:return[]}}(e.type)),[Object(f.jsx)(N,{}),Object(f.jsx)(P,{}),Object(f.jsx)(k,{}),Object(f.jsx)(B,{})]):[]})})},E=(c(34),function(t){var e=t.setCanvas,c=t.setMouseX,i=t.setMouseY,a=t.canvasWidth,s=t.canvasHeight,o=Object(r.c)((function(t){return t.canvasObjects})),l=Object(r.c)((function(t){return t.selectedObject})).id,h=Object(r.c)((function(t){return t.selectedObject})),j=Object(r.c)((function(t){return t.canvasObjects})),d=Object(n.useRef)(null),u=Object(r.b)(),v=function(t){o.forEach((function(t){if(!0===t.isBeingDragged){var e=t;e.isBeingDragged=!1,u(O(e)),"handle"===t.type&&t.parentID===l&&(u(O(h)),p(t))}}))},b=function(t){var e=t.target.getBoundingClientRect();return{x:t.clientX-e.left-t.target.clientLeft,y:t.clientY-e.top-t.target.clientTop}},x=function(t,e){var c=void 0;return o.forEach((function(n){(function(t,e,c){return t>c.xPos&&t<c.xPos+c.width&&e>c.yPos&&e<c.yPos+Number(c.height)})(t,e,n)&&(void 0===c||n.zIndex>c.zIndex)&&(c=n)})),c||void 0},p=function(t){if("top"===t.handleLocation){var e=t.xPos,c=t.yPos,n=h.xPos-e,i=h.yPos-c;h.xPos-=n,h.yPos-=i,h.width+=n,h.height+=i,h.sx-=n,h.sy-=i,h.sWidth+=n,h.sHeight+=i}else if("bottom"===t.handleLocation){var a=t.xPos,s=t.yPos,o=-(h.xPos-a)-h.width+t.width,r=-(h.yPos-s)-h.height+t.height;h.width+=o,h.height+=r,h.sWidth+=o,h.sHeight+=r}};return Object(n.useEffect)((function(){var t=d.current;e(t),t.width=a,t.height=s;var c,n=t.getContext("2d"),i={};return function e(){n.clearRect(0,0,t.width,t.height),j.sort((function(t,e){return t.zIndex-e.zIndex})).forEach((function(t){if("image"===t.type)if(i[t.id])n.drawImage(i[t.id],t.sx,t.sy,t.sWidth,t.sHeight,t.xPos,t.yPos,t.width,t.height);else{var e=new Image;e.src=t.url,e.onload=function(){i[t.id]=e,n.drawImage(e,t.sx,t.sy,t.sWidth,t.sHeight,t.xPos,t.yPos,t.width,t.height)},e.onerror=function(t){console.log("image failed to load from ".concat(e.src))}}else"text"===t.type?(n.textBaseline="top",n.fillStyle=t.color,n.font="".concat(t.fontSize," ").concat(t.font),n.fillText(t.text,t.xPos,t.yPos)):"handle"===t.type&&(n.fillStyle=t.color,n.fillRect(t.xPos,t.yPos,t.width,t.height));l===t.id&&(n.lineWidth=2,n.strokeStyle=t.isBeingCropped?"rgb(233, 177, 52)":"rgb(0, 100, 250)",n.strokeRect(t.xPos,t.yPos,t.width,t.height))})),c=requestAnimationFrame(e)}(),function(){cancelAnimationFrame(c)}}),[j,a,s,l,e]),Object(f.jsx)("div",{className:"Canvas",children:Object(f.jsx)("canvas",{ref:d,onMouseDown:function(t){!function(t){var e=b(t),c=e.x,n=e.y,i=x(c,n);void 0===i||i.id!==l&&i.parentID!==l||!1!==i.isBeingCropped&&void 0!==i.isBeingCropped||(i.isBeingDragged=!0,i.dragStartX=i.xPos-c,i.dragStartY=i.yPos-n)}(t)},onMouseLeave:function(t){v()},onMouseUp:function(t){v()},onMouseMove:function(t){!function(t){var e=b(t);c(e.x),i(e.y),o.forEach((function(t){if(!0===t.isBeingDragged){var c=t;c.xPos=e.x+c.dragStartX,c.yPos=e.y+c.dragStartY,"handle"===t.type&&t.parentID===l&&p(t)}}))}(t)},onClick:function(t){!function(t){var e=b(t),c=x(e.x,e.y);void 0!==c?"handle"!==c.type&&(l=c.id,u(g(c))):!0!==h.isBeingCropped&&(l=void 0,u(g(!1)))}(t)}})})});c(35);var W=function(t){var e=Object(r.b)(),c=Object(n.useState)(""),i=Object(o.a)(c,2),a=i[0],s=i[1],l=Object(n.useState)(!1),h=Object(o.a)(l,2),j=h[0],d=h[1],u=Object(n.useState)("Image-".concat(String((new Date).getTime()).slice(8))),v=Object(o.a)(u,2),b=v[0],O=v[1];return Object(f.jsxs)("div",{className:"DownloadAsImage",children:[Object(f.jsx)(p,{clickAction:function(){return d(!j)},icon:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"})}),tooltip:"Download Canvas"}),Object(f.jsx)("a",{href:"/",download:b,ref:function(t){return s(t)},className:"hiddenDownloadLink",children:"Download Canvas"}),j?Object(f.jsx)(y,{exitAction:d,header:"Download As Image",contents:Object(f.jsxs)("div",{className:"downloadModal",children:[Object(f.jsx)(A,{label:"Filename",initialVal:b,changeAction:function(t){O(t.target.value)}}),Object(f.jsx)("div",{className:"submitButton",onClick:function(){e(g(!1)),setTimeout((function(){!function(){var e=t.canvas.toDataURL("image/png");a.href=e,a.click(),d(!1)}()}),250)},children:"Download"})]})}):""]})};c(36);var H=function(t){var e=t.width,c=t.height,i=t.setWidth,a=t.setHeight,s=t.mouseX,r=t.mouseY,l=Object(n.useState)(e),h=Object(o.a)(l,2),j=h[0],d=h[1],u=Object(n.useState)(c),v=Object(o.a)(u,2),b=v[0],O=v[1];return Object(f.jsxs)("div",{className:"CanvasDetails",children:[Object(f.jsxs)("div",{className:"sizeDetailWrapper",children:[Object(f.jsxs)("div",{className:"sizeDetail",children:[Object(f.jsx)("p",{children:"Width:"}),Object(f.jsx)("input",{className:"sizeInput",value:j,onBlur:function(t){i(t.target.value)},onChange:function(t){return d(t.target.value)}})]}),Object(f.jsxs)("div",{className:"sizeDetail",children:[Object(f.jsx)("p",{children:"Height:"}),Object(f.jsx)("input",{className:"sizeInput",value:b,onBlur:function(t){a(t.target.value)},onChange:function(t){return O(t.target.value)}})]})]}),Object(f.jsxs)("p",{children:["X: ",s,", Y: ",r]})]})},L=c(8),X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:var c=e.payload.obj;return c.zIndex=t.length,[c].concat(Object(z.a)(t));case d:console.log(e.payload.obj);var n=e.payload.obj;return t.map((function(t){return t.id===n.id?n:t}));case h:var i=e.payload.obj;return t.filter((function(t){return t.id!==i.id}));case j:return[];default:return t}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return e.payload.obj;default:return t}},Y=Object(L.a)({canvasObjects:X,selectedObject:R}),F=(c(37),Object(L.b)(Y));var V=function(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),c=e[0],i=e[1],a=Object(n.useState)(800),s=Object(o.a)(a,2),l=s[0],h=s[1],j=Object(n.useState)(600),d=Object(o.a)(j,2),u=d[0],v=d[1],b=Object(n.useState)(0),O=Object(o.a)(b,2),g=O[0],x=O[1],p=Object(n.useState)(0),y=Object(o.a)(p,2),z=y[0],B=y[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(r.a,{store:F,children:Object(f.jsxs)("div",{className:"editorContainer",children:[Object(f.jsx)(S,{contents:[Object(f.jsx)(w,{}),Object(f.jsx)(m,{}),Object(f.jsx)(W,{canvas:c}),Object(f.jsx)(C,{})]}),Object(f.jsxs)("div",{className:"CanvasContainer",children:[Object(f.jsx)("div",{className:"canvasWrapper",children:Object(f.jsx)(E,{setCanvas:i,canvasWidth:l,canvasHeight:u,setCanvasWidth:h,setCanvasHeight:v,mouseX:g,mouseY:z,setMouseX:x,setMouseY:B})}),Object(f.jsx)(H,{width:l,height:u,setWidth:h,setHeight:v,mouseX:g,mouseY:z})]}),Object(f.jsx)(T,{})]})})})},J=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;c(t),n(t),i(t),a(t),s(t)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root")),J()}],[[38,1,2]]]);
//# sourceMappingURL=main.df1d62b0.chunk.js.map