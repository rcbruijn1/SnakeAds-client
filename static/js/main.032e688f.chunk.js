(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{67:function(e,s,t){},89:function(e,s,t){"use strict";t.r(s);var i=t(6),a=t(0),n=t.n(a),r=t(9),c=t.n(r),d=(t(67),t(17)),l=t(34),p=t.n(l),o=t(123),b=t(117),u=t(118),h=t(119),m=t(120),v=t(124),j=t(121),O=t(122),g=t(126),k=t(125),f=t(114),x=t(116),I=t(113),w=Object(I.a)((function(e){return{toolbar:{display:"flex",justifyContent:"space-between"},adGrid:{height:"calc(100% - 96px)"},cardActionArea:{width:200}}})),A=function(e){var s=e.ads,t=e.handleCallback,a=w(),n=function(e){var s=new Date,i=function(){var e=Math.random().toString();return(e=e.split("0."))[1]}(),a=Math.floor(Math.random()*e.snakeApiEndpoints.length);p.a.post("http://localhost:3000/createAsset",{id:i.split("."),advertisementId:e.advertisementId,publisherId:e.publisherId,timeStamp:s.toISOString()}).then((function(s){t(s),console.log("Succesfuly saved on: ".concat(e.snakeApiEndpoints[a]),s)})).catch((function(e){console.log(e)}))};return Object(i.jsx)(o.a,{m:3,children:Object(i.jsx)(f.a,{container:!0,justify:"center",spacing:3,className:a.adGrid,children:s.map((function(e){return Object(i.jsx)(f.a,{item:!0,xs:3,align:"center",children:Object(i.jsx)(x.a,{onClick:function(){return n(e)},className:a.cardActionArea,children:Object(i.jsx)("img",{src:e.img,width:"200",height:"auto"})})})}))})})},E=[{advertisementId:1,img:"https://picsum.photos/id/101/200/220",publisherId:"pub1_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:2,img:"https://picsum.photos/id/102/200/220",publisherId:"pub2_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:3,img:"https://picsum.photos/id/1001/200/220",publisherId:"pub3_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:4,img:"https://picsum.photos/id/1031/200/220",publisherId:"pub4_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:5,img:"https://picsum.photos/id/1012/200/220",publisherId:"pub5_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:6,img:"https://picsum.photos/id/1041/200/220",publisherId:"pub6_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:7,img:"https://picsum.photos/id/103/200/220",publisherId:"pub7_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:8,img:"https://picsum.photos/id/107/200/220",publisherId:"pub8_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:9,img:"https://picsum.photos/id/101/200/220",publisherId:"pub9_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:10,img:"https://picsum.photos/id/110/200/220",publisherId:"pub10_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:11,img:"https://picsum.photos/id/120/200/220",publisherId:"pub11_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]},{advertisementId:12,img:"https://picsum.photos/id/121/200/220",publisheradvertisementId:"pub12_10/2020",snakeApiEndpoints:["api.coolblue.advertisers.sbc.nl","api.albertheijn.advertisers.sbc.nl","api.tweakers.advertisers.sbc.nl","api.medium.advertisers.sbc.nl"]}],y=function(){var e=w(),s=Object(a.useState)(0),t=Object(d.a)(s,2),n=t[0],r=t[1],c=Object(a.useState)(null),l=Object(d.a)(c,2),f=l[0],x=l[1],I=Object(a.useState)(!1),y=Object(d.a)(I,2),C=y[0],S=y[1],_=Object(a.useState)(!1),M=Object(d.a)(_,2),N=M[0],J=M[1],D=function(e){p.a.get("http://localhost:3000").then((function(e){var s=e.data;r(s.length),x(s),J(!0)}))};return Object(a.useEffect)((function(){D()}),[]),Object(i.jsxs)(a.Fragment,{children:[Object(i.jsxs)(o.a,{height:"100vh",width:"100vw",bgcolor:"#f2f2f2",display:"flex",justifyContent:"space-between",alignItems:"center",overflow:"hidden",children:[Object(i.jsx)(b.a,{position:"fixed",children:Object(i.jsxs)(u.a,{className:e.toolbar,children:[Object(i.jsx)(h.a,{variant:"h6",children:"Snake Ads"}),Object(i.jsxs)(o.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(i.jsx)(o.a,{mr:2,children:Object(i.jsx)(m.a,{variant:"contained",color:"secondary",onClick:function(){return S(!0)},children:"Raw output"})}),Object(i.jsx)(h.a,{variant:"body1",color:"initial",children:"Clicks registered: ".concat(n)})]})]})}),Object(i.jsx)(A,{handleCallback:D,ads:E})]}),Object(i.jsxs)(v.a,{open:C,maxWidth:!1,children:[Object(i.jsxs)(j.a,{children:[Object(i.jsx)(h.a,{variant:"h6",paragraph:!0,children:"Total assets: ".concat(f&&f.length)}),f&&f.map((function(e){return Object(i.jsx)(o.a,{py:2,children:Object(i.jsx)(h.a,{paragraph:!0,style:{widht:"100%"},children:JSON.stringify(e.Record)})})}))]}),Object(i.jsx)(O.a,{children:Object(i.jsx)(m.a,{variant:"outlined",onClick:function(){return S(!1)},children:"Close"})})]}),Object(i.jsx)(g.a,{open:N,autoHideDuration:4e3,onClose:function(){return J(!1)},anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(i.jsx)(k.a,{severity:"info",children:"Clicks are updated!"})})]})};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.032e688f.chunk.js.map