(this["webpackJsonpmonitorio-zonas"]=this["webpackJsonpmonitorio-zonas"]||[]).push([[0],{103:function(e,t,n){},113:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),i=n.n(o),c=n(50),s=n(17),l=n(64),u=n.n(l),d=n(75),j=n(182),p=n(171),b=n(174),A=n(180),g=n(181),m=n(179),h=n(80),f=n(178),O=n.p+"static/media/fondoLogin.87ef336c.png",x=(n(103),n(76)),v=(n(104),n(130),x.a.initializeApp({apiKey:"AIzaSyCE_ppoYK55IzQzZh94vAOisbL4NUUXC_o",authDomain:"talentfest-mensajeros-urbanos.firebaseapp.com",projectId:"talentfest-mensajeros-urbanos",storageBucket:"talentfest-mensajeros-urbanos.appspot.com",messagingSenderId:"1051607467040",appId:"1:1051607467040:web:7d3365e8226d141b722845"})),y=v.auth(),w=v.firestore(),S=n(16),E=n(3),L=r.a.createContext(),I=function(e){var t=e.children,n=Object(a.useState)(null),r=Object(S.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){y.onAuthStateChanged(i)}),[]),Object(E.jsx)(L.Provider,{value:{currentUser:o},children:t})},C=Object(h.a)();var R=Object(s.g)((function(e){var t=e.history,n=Object(a.useCallback)(function(){var e=Object(d.a)(u.a.mark((function e(n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=new FormData(n.currentTarget),r={email:a.get("email"),password:a.get("password")},e.prev=3,e.next=6,y.signInWithEmailAndPassword(r.email,r.password);case 6:t.push("/Monitoreo"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(a.useContext)(L).currentUser?Object(E.jsx)(s.a,{to:"/Monitoreo"}):Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"formulario",children:Object(E.jsx)(f.a,{theme:C,children:Object(E.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(p.a,{}),Object(E.jsxs)(A.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(E.jsx)(g.a,{component:"h1",variant:"h5",children:"Iniciar Sesi\xf2n"}),Object(E.jsxs)(A.a,{component:"form",onSubmit:n,noValidate:!0,sx:{mt:8},children:[Object(E.jsx)(b.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(E.jsx)(b.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"password",type:"password",id:"password",autoComplete:"current-password"}),Object(E.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:5,mb:2},children:"Iniciar Sesion"})]})]})]})})}),Object(E.jsx)("div",{className:"logo",children:Object(E.jsx)("img",{src:O,alt:"fondo",width:"800px"})})]})})),P=(n(113),n(40)),U=n.n(P),B=n.p+"static/media/logotype.8cbafefd.png",N=n(183),T=n(176),M=(n(114),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZWxDcIwEEX/HRESovEKjMIEUNIhJmAEyAbZID0NI4RsECbBDUJKRA7bJBSAHERc5jVnWecnfduyCQ2TQ74lyN4MFd4w85u7qQxK8YmWWuLbap7A9VjDMVNmUfJN9gOKmHYqzdRLWFVYoh+qmj4dTiigBXpSE61tJRu3rOjia+7YwxY9vsqMA8RtcbE5RNwWGzsyR54T4exrLAmFrSwS+43QkYxQCPyMmutUE04drYhYKENAGIEZhIPwT6FGODTb5zuQ1H0FD1u1RYY+93hZAAAAAElFTkSuQmCC"),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgB7VRdTsJAEJ7ZVoHoQ48AJxBPQHsDm2iMT8ANvIHlJMqTRh/AExRvwA3sEWoiBAR2nCFAWvpD4UFf+JLtdmdn9tv52QE44r+BeZvlN99WiE3SYLNiVWQEEPA0VAr7o+tGFw4hsB59a3qOPSSwIR8BKvTyiBIE5We/igb66xsXAqI3vml00rZUQqDA2+twAZFXefHv07ZiHixjTujDYQj1gi4nd04QFcY8UBpacDgsAyHhhRlbIV5kGIczIMdYQAh7wtxa1zP0LJOwWSpT52fGIUTs67nuSjHEtAiG/HWjIgUFgez+ZAJ10tSVpLKoqoDepSA2A+GKq9DOJFg9okwoA3tE0GeCDpr4cHICHotjYRN5JgESfUA+LCbxtYan0je5oeuEpyOqcfVsBs2pHTWI5UAMlQHNHSRVJvmcnkFQeR3AFFLbQS3VA67hASEMoADWcZe4RudtskSSSya5u3IRQcBJd+SH57ZcjnMU5BJIXGnBRkQ7OyWswrU8SPqXNEeir1wCgTz38a3T0iuiPTySAwvrHvE3+AVb4KTnrIROPwAAAABJRU5ErkJggg==",Q=n(79),D=n.n(Q);var F=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(-74.082),r=Object(S.a)(n,2),o=r[0],i=r[1],c=Object(a.useState)(4.61),l=Object(S.a)(c,2),u=l[0],d=l[1],p=Object(a.useState)(11),b=Object(S.a)(p,2),A=b[0],g=b[1],m=Object(a.useState)([]),h=Object(S.a)(m,2),f=h[0],O=h[1],x=Object(a.useState)([]),v=Object(S.a)(x,2),L=v[0],I=v[1],C=Object(a.useState)([]),R=Object(S.a)(C,2),P=R[0],Q=R[1];U.a.accessToken="pk.eyJ1IjoibG9yZW5hcnVpeiIsImEiOiJja3RrOHg5cWYwNHZtMnVwZXB2NHgwdTU3In0.XbSDbq4TPHFlPH4mvDiA9A",Object(a.useEffect)((function(){t.current||(t.current=new U.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[o,u],zoom:A}))})),Object(a.useEffect)((function(){t.current&&t.current.on("move",(function(){i(t.current.getCenter().lng.toFixed(4)),d(t.current.getCenter().lat.toFixed(4)),g(t.current.getZoom().toFixed(2))}))})),Object(a.useEffect)((function(){t.current.on("load",(function(){var e=new U.a.Popup({offset:25}).setText("Construction on the Washington Monument began in 1848."),n=document.createElement("div");n.id="",new U.a.Marker(n).setLngLat([-74.04045210439463,4.770416860152286]).setPopup(e).addTo(t.current);var a=w.collection("Zonas").onSnapshot((function(e){return console.log(e),e.docChanges().forEach((function(e){console.log(e);var n=e.doc;if("added"===e.type){var a=[];n.data().poligono.forEach((function(e){var t=[],n=e.latitude,r=e.longitude;t.push(n),t.push(r),a.push(t)})),t.current.getSource("maine"+n.id)?t.current.getSource("maine"+n.id).setData({type:"geojson",data:{type:"Feature",geometry:{type:"Polygon",coordinates:[a]}}}):t.current.addSource("maine"+n.id,{type:"geojson",data:{type:"Feature",geometry:{type:"Polygon",coordinates:[a]}}});var r=n.data().mensajeros,o=n.data().servicios/r*100,i=Math.round(o);console.log(n.id+"mensajeros"+n.data().mensajeros),console.log(n.id+"servicios"+n.data().servicios),console.log(n.id,o),o>=50?(f.push("outline3"+n.id),t.current.addLayer({id:"outline3"+n.id,type:"fill",source:"maine"+n.id,layout:{},paint:{"fill-color":"#ff2121","fill-opacity":.5}})):o>=25&o<50?(L.push("outline3"+n.id),t.current.addLayer({id:"outline3"+n.id,type:"fill",source:"maine"+n.id,layout:{},paint:{"fill-color":"#ffee21","fill-opacity":.5}})):(P.push("outline3"+n.id),t.current.addLayer({id:"outline3"+n.id,type:"fill",source:"maine"+n.id,layout:{},paint:{"fill-color":"#14f803","fill-opacity":.5}})),t.current.getLayer("maine"+n.id)&&t.current.getLayer("maine"+n.id).setData({id:"outline4"+n.id,type:"line",source:"maine"+n.id,layout:{},paint:{"line-color":"#689309","line-width":1}}),t.current.on("click","outline3"+n.id,(function(e){console.log(e.lngLat.lat),console.log(e.lngLat.lng);for(var a=[e.lngLat.lng,e.lngLat.lat],r=n.id+"<br><br>"+"<img src='".concat(M,"'> \n")+"Mensajeros: "+n.data().mensajeros+"<br><br>"+"<img src='".concat(H,"'> \n")+"Servicios: "+n.data().servicios+"<br><br>Ocupaci\xf3n al\n"+i+"%";Math.abs(e.lngLat.lng-a[0])>180;)a[0]+=e.lngLat.lng>a[0]?360:-360;(new U.a.Popup).setLngLat(a).setHTML(r).addTo(t.current)}))}else if("modified"===e.type){console.log("modified");var c=[];n.data().poligono.forEach((function(e){var t=[],n=e.latitude,a=e.longitude;t.push(n),t.push(a),c.push(t)})),t.current.getSource("maine"+n.id)&&t.current.getSource("maine"+n.id).setData({type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[c]}}]});var s=n.data().mensajeros,l=n.data().servicios/s*100,u=Math.round(l);console.log(n.id+"mensajeros"+n.data().mensajeros),console.log(n.id+"servicios"+n.data().servicios),console.log(n.id,l);var d=f.indexOf("outline3"+n.id),j=L.indexOf("outline3"+n.id),p=P.indexOf("outline3"+n.id);d>-1?f.splice(d,1):j>-1?L.splice(j,1):P.splice(p,1),l>=50?(f.push("outline3"+n.id),t.current.setPaintProperty("outline3"+n.id,"fill-color","#ff2121"),t.current.setPaintProperty("outline3"+n.id,"fill-opacity",.5)):l>=25&l<50?(L.push("outline3"+n.id),t.current.setPaintProperty("outline3"+n.id,"fill-color","#ffee21"),t.current.setPaintProperty("outline3"+n.id,"fill-opacity",.5)):(P.push("outline3"+n.id),t.current.setPaintProperty("outline3"+n.id,"fill-color","#14f803"),t.current.setPaintProperty("outline3"+n.id,"fill-opacity",.5)),t.current.on("click","outline3"+n.id,(function(e){console.log(e.lngLat.lat),console.log(e.lngLat.lng);for(var a=[e.lngLat.lng,e.lngLat.lat],r=n.id+"<br><br>"+"<img src='".concat(M,"'> \n")+"Mensajeros: "+n.data().mensajeros+"<br><br>"+"<img src='".concat(H,"'> \n")+"Servicios: "+n.data().servicios+"<br><br>Ocupaci\xf3n al\n"+u+"%";Math.abs(e.lngLat.lng-a[0])>180;)a[0]+=e.lngLat.lng>a[0]?360:-360;(new U.a.Popup).setLngLat(a).setHTML(r).addTo(t.current)}))}console.log("Point: "+f.length,L.length,P.length)})),function(){return a()}}))}))}),[]);var F=Object(s.f)();return Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:"logoMapa",children:[Object(E.jsx)("img",{src:B,alt:"logotype",width:"auto",height:"80px"}),Object(E.jsxs)("div",{className:"alert",children:[Object(E.jsxs)("span",{children:[Object(E.jsx)("h2",{children:"BOG-COL"}),Object(E.jsx)("h3",{children:"Ciudad"})]}),Object(E.jsx)("span",{children:Object(E.jsxs)(T.a,{severity:"error",children:[Object(E.jsx)(N.a,{}),Object(E.jsx)("strong",{children:Object(E.jsxs)("h3",{onChange:function(){return O(f)},children:[" ",f.length]})})]})}),Object(E.jsx)("span",{children:Object(E.jsxs)(T.a,{severity:"warning",children:[Object(E.jsx)(N.a,{}),Object(E.jsxs)("strong",{children:[" ",Object(E.jsxs)("h3",{onChange:function(){return I(L)},children:[" ",L.length]})]})]})}),Object(E.jsx)("span",{children:Object(E.jsx)(T.a,{severity:"success",children:Object(E.jsx)("strong",{children:Object(E.jsxs)("h3",{onChange:function(){return Q(P)},children:[" ",P.length]})})})}),Object(E.jsxs)("span",{className:"boton",children:[Object(E.jsx)(D.a,{number:"+573016225545",message:" Hola *Mensajero Urbano* en la zona 6 te necesita.\r\nRecuerda que tienes un incentivo del *10%* para realizar servicios en esta zona.\r Gracias por ayudarnos a cubrir esta zona.\r Ingresa aqu\xed y ve a la zona https://bit.ly/2XAsGYi\r\n",element:j.a,variant:"outlined",color:"error",sx:{mt:2,mb:2},children:"Enviar Alerta"}),Object(E.jsx)("span",{children:Object(E.jsx)(j.a,{variant:"contained",sx:{mt:2,mb:2},onClick:function(){y.signOut().then((function(){F.push("/")}))},children:"Cerrar Sesi\xf2n"})})]})]})]}),Object(E.jsx)("div",{ref:e,className:"map-container",children:Object(E.jsxs)("h4",{className:"sidebar",children:["Longitud: ",o," | Latitud: ",u," | Zoom: ",A]})})]})},W=n(55),Y=n(81),J=["component"],V=function(e){var t=e.component,n=Object(Y.a)(e,J),r=Object(a.useContext)(L).currentUser;return Object(E.jsx)(s.b,Object(W.a)(Object(W.a)({},n),{},{render:function(e){return r?Object(E.jsx)(t,Object(W.a)({},e)):Object(E.jsx)(s.a,{to:"/"})}}))},k=function(){return Object(E.jsx)(I,{children:Object(E.jsxs)(c.a,{children:[Object(E.jsx)(s.b,{exact:!0,path:"/",component:R}),Object(E.jsx)(V,{path:"/Monitoreo",component:F})]})})};n(128);i.a.render(Object(E.jsx)(k,{}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.a0646012.chunk.js.map