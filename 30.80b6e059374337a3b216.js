(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{AqxB:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),t=u("ZZ/e"),b=u("a++a"),e=(u("R66G"),function(l,n,u,a){return new(u||(u=Promise))(function(t,b){function e(l){try{r(a.next(l))}catch(n){b(n)}}function o(l){try{r(a.throw(l))}catch(n){b(n)}}function r(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(e,o)}r((a=a.apply(l,n||[])).next())})}),o=function(){function l(l,n){this.routing=l,this.modal=n,this.picsum=Array.from(new Array(10),function(l,n){return"https://picsum.photos/500/?"+n})}return l.prototype.ngOnInit=function(){},l.prototype.presentModal=function(){return e(this,void 0,void 0,function(){var l;return function(l,n){var u,a,t,b,e={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return b={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(b[Symbol.iterator]=function(){return this}),b;function o(b){return function(o){return function(b){if(u)throw new TypeError("Generator is already executing.");for(;e;)try{if(u=1,a&&(t=2&b[0]?a.return:b[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,b[1])).done)return t;switch(a=0,t&&(b=[2&b[0],t.value]),b[0]){case 0:case 1:t=b;break;case 4:return e.label++,{value:b[1],done:!1};case 5:e.label++,a=b[1],b=[0];continue;case 7:b=e.ops.pop(),e.trys.pop();continue;default:if(!(t=(t=e.trys).length>0&&t[t.length-1])&&(6===b[0]||2===b[0])){e=0;continue}if(3===b[0]&&(!t||b[1]>t[0]&&b[1]<t[3])){e.label=b[1];break}if(6===b[0]&&e.label<t[1]){e.label=t[1],t=b;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(b);break}t[2]&&e.ops.pop(),e.trys.pop();continue}b=n.call(l,e)}catch(o){b=[6,o],a=0}finally{u=t=0}if(5&b[0])throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}([b,o])}}}(this,function(n){switch(n.label){case 0:return[4,this.modal.create({component:b.a,componentProps:{value:123}})];case 1:return l=n.sent(),this.routing.registerNavigateable(l),l.present(),[2]}})})},l.prototype.register=function(l){this.routing.registerNavigateable(l)},l.prototype.unregister=function(){this.routing.pop()},l}(),r=function(){return function(){}}(),i=u("pMnS"),c=u("jNDs"),s=u("tzjl"),p=u("q6FX"),z=u("6PGH"),f=u("oVyG"),h=u("NcP4"),d=u("MzJX"),g=u("oBZk"),y=u("ilpg"),w=u("b0fI"),k=u("jy3V"),v=u("SFCN"),m=u("AmBA"),A=u("QgsS"),j=u("RcI6"),B=u("ihYY"),G=u("mEP5"),q=u("Ip0R"),x=u("NrAO"),C=u("QSxq"),O=a.qb({encapsulation:0,styles:[[""]],data:{}});function P(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,3,"ion-col",[["size","6"],["sizeMd","4"]],null,null,null,g.Z,g.l)),a.rb(1,49152,null,0,t.u,[a.h,a.k,a.A],{size:[0,"size"],sizeMd:[1,"sizeMd"]},null),(l()(),a.sb(2,0,null,0,1,"fiv-gallery-image",[],null,null,null,y.b,y.a)),a.rb(3,114688,[[1,4]],0,w.a,[],{src:[0,"src"]},null)],function(l,n){l(n,1,0,"6","4"),l(n,3,0,n.context.$implicit)},null)}function N(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,10,"ion-header",[],null,null,null,g.fb,g.r)),a.rb(1,49152,null,0,t.C,[a.h,a.k,a.A],null,null),(l()(),a.sb(2,0,null,0,8,"ion-toolbar",[],null,null,null,g.Bb,g.N)),a.rb(3,49152,null,0,t.Cb,[a.h,a.k,a.A],null,null),(l()(),a.sb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.R,g.d)),a.rb(5,49152,null,0,t.m,[a.h,a.k,a.A],null,null),(l()(),a.sb(6,0,null,0,1,"fiv-back-button",[],null,null,null,k.b,k.a)),a.rb(7,49152,null,0,v.a,[m.a],null,null),(l()(),a.sb(8,0,null,0,2,"ion-title",[],null,null,null,g.zb,g.L)),a.rb(9,49152,null,0,t.Ab,[a.h,a.k,a.A],null,null),(l()(),a.Jb(-1,0,["test"])),(l()(),a.sb(11,0,null,null,22,"ion-content",[],null,null,null,g.ab,g.m)),a.rb(12,49152,null,0,t.v,[a.h,a.k,a.A],null,null),(l()(),a.sb(13,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.presentModal()&&a),a},g.Q,g.c)),a.rb(14,49152,null,0,t.l,[a.h,a.k,a.A],null,null),(l()(),a.Jb(-1,0,[" Present Modal "])),(l()(),a.sb(16,0,null,0,17,"fiv-gallery",[],null,[[null,"willClose"],[null,"willOpen"],["window","keyup"]],function(l,n,u){var t=!0,b=l.component;return"window:keyup"===n&&(t=!1!==a.Bb(l,17).keyEvent(u)&&t),"willClose"===n&&(t=!1!==b.unregister()&&t),"willOpen"===n&&(t=!1!==b.register(a.Bb(l,17))&&t),t},A.b,A.a)),a.rb(17,1228800,[["gallery",4]],2,j.a,[t.e,a.F,B.b,a.h,t.Kb,G.a,q.d],null,{willOpen:"willOpen",willClose:"willClose"}),a.Hb(603979776,1,{images:1}),a.Hb(603979776,2,{toolbars:1}),(l()(),a.sb(20,0,null,0,7,"fiv-gallery-toolbar",[["position","top"]],null,null,null,x.b,x.a)),a.rb(21,114688,[[2,4]],0,C.a,[],{position:[0,"position"]},null),(l()(),a.sb(22,0,null,0,5,"ion-toolbar",[["color","transparent"]],null,null,null,g.Bb,g.N)),a.rb(23,49152,null,0,t.Cb,[a.h,a.k,a.A],{color:[0,"color"]},null),(l()(),a.sb(24,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.R,g.d)),a.rb(25,49152,null,0,t.m,[a.h,a.k,a.A],null,null),(l()(),a.sb(26,0,null,0,1,"fiv-back-button",[["icon","close"]],null,null,null,k.b,k.a)),a.rb(27,49152,null,0,v.a,[m.a],{icon:[0,"icon"]},null),(l()(),a.sb(28,0,null,0,5,"ion-grid",[["fixed",""]],null,null,null,g.eb,g.q)),a.rb(29,49152,null,0,t.B,[a.h,a.k,a.A],{fixed:[0,"fixed"]},null),(l()(),a.sb(30,0,null,0,3,"ion-row",[],null,null,null,g.rb,g.D)),a.rb(31,49152,null,0,t.jb,[a.h,a.k,a.A],null,null),(l()(),a.jb(16777216,null,0,1,null,P)),a.rb(33,278528,null,0,q.l,[a.Q,a.N,a.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,21,0,"top"),l(n,23,0,"transparent"),l(n,27,0,"close"),l(n,29,0,""),l(n,33,0,u.picsum)},null)}function S(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"app-backbutton",[],null,null,null,N,O)),a.rb(1,114688,null,0,o,[m.a,t.Gb],null,null)],function(l,n){l(n,1,0)},null)}var F=a.ob("app-backbutton",o,S,{},{},[]),Z=u("gIcY"),L=u("ipFy"),M=u("lqlK"),I=u("FNTQ"),D=u("M2Lx"),E=u("eDkP"),R=u("Fzqc"),Y=u("v9Dh"),J=u("ZYjt"),V=u("Wf4p"),K=u("ZYCi"),Q=u("gVIA"),H=u("9rwy"),T=u("/Gdi"),W=u("O1ls"),X=u("7ASE"),U=u("Yb47"),$=u("hVBp"),_=u("hDqg"),ll=u("0RK4"),nl=u("Zhmc"),ul=u("RDSS"),al=u("/q0c"),tl=u("/2B9"),bl=u("ZhfK"),el=u("isGY"),ol=u("dPtH"),rl=u("KZIk"),il=u("gEFB"),cl=u("6wuw"),sl=u("GkVF"),pl=u("1d1C"),zl=u("OhGS"),fl=u("J4NA"),hl=u("Svnq"),dl=u("3CPq"),gl=u("C0fs"),yl=u("01mx"),wl=u("ifaz"),kl=u("TPvq"),vl=u("GgDP"),ml=u("nO+t"),Al=u("LOpI"),jl=u("dWZg"),Bl=u("lLAP"),Gl=u("4c35"),ql=u("qAlS"),xl=u("La40"),Cl=u("UOu5"),Ol=u("j1ZV");u.d(n,"BackButtonPageModuleNgFactory",function(){return Pl});var Pl=a.pb(r,[],function(l){return a.yb([a.zb(512,a.j,a.db,[[8,[i.a,c.a,s.a,p.a,z.a,f.a,h.a,d.a,F]],[3,a.j],a.y]),a.zb(4608,q.o,q.n,[a.v,[2,q.B]]),a.zb(4608,Z.o,Z.o,[]),a.zb(4608,t.b,t.b,[a.A,a.g]),a.zb(4608,t.Gb,t.Gb,[t.b,a.j,a.r]),a.zb(4608,t.Lb,t.Lb,[t.b,a.j,a.r]),a.zb(4608,L.a,L.a,[]),a.zb(4608,M.a,M.a,[a.j,a.G,a.g,a.r]),a.zb(4608,I.a,I.a,[M.a]),a.zb(4608,D.c,D.c,[]),a.zb(4608,E.a,E.a,[E.f,E.b,a.j,E.e,E.c,a.r,a.A,q.d,R.b,[2,q.i]]),a.zb(5120,E.g,E.h,[E.a]),a.zb(5120,Y.b,Y.c,[E.a]),a.zb(4608,J.f,V.a,[[2,V.c],[2,V.e]]),a.zb(1073742336,q.c,q.c,[]),a.zb(1073742336,Z.m,Z.m,[]),a.zb(1073742336,Z.e,Z.e,[]),a.zb(1073742336,t.Eb,t.Eb,[]),a.zb(1073742336,K.p,K.p,[[2,K.v],[2,K.n]]),a.zb(1073742336,Q.a,Q.a,[]),a.zb(1073742336,H.a,H.a,[]),a.zb(1073742336,T.a,T.a,[]),a.zb(1073742336,W.a,W.a,[]),a.zb(1073742336,X.a,X.a,[]),a.zb(1073742336,U.a,U.a,[]),a.zb(1073742336,$.a,$.a,[]),a.zb(1073742336,_.a,_.a,[]),a.zb(1073742336,ll.a,ll.a,[]),a.zb(1073742336,nl.a,nl.a,[]),a.zb(1073742336,ul.a,ul.a,[]),a.zb(1073742336,al.a,al.a,[]),a.zb(1073742336,tl.a,tl.a,[]),a.zb(1073742336,bl.a,bl.a,[]),a.zb(1073742336,el.a,el.a,[]),a.zb(1073742336,ol.a,ol.a,[]),a.zb(1073742336,rl.a,rl.a,[]),a.zb(1073742336,il.a,il.a,[]),a.zb(1073742336,cl.a,cl.a,[]),a.zb(1073742336,sl.a,sl.a,[]),a.zb(1073742336,pl.a,pl.a,[]),a.zb(1073742336,zl.a,zl.a,[]),a.zb(1073742336,fl.a,fl.a,[]),a.zb(1073742336,hl.a,hl.a,[]),a.zb(1073742336,dl.a,dl.a,[]),a.zb(1073742336,gl.a,gl.a,[]),a.zb(1073742336,yl.a,yl.a,[]),a.zb(1073742336,wl.a,wl.a,[]),a.zb(1073742336,kl.a,kl.a,[]),a.zb(1073742336,vl.a,vl.a,[]),a.zb(1073742336,ml.a,ml.a,[]),a.zb(1073742336,Al.b,Al.b,[]),a.zb(1073742336,jl.b,jl.b,[]),a.zb(1073742336,D.d,D.d,[]),a.zb(1073742336,Bl.a,Bl.a,[]),a.zb(1073742336,R.a,R.a,[]),a.zb(1073742336,Gl.e,Gl.e,[]),a.zb(1073742336,ql.b,ql.b,[]),a.zb(1073742336,E.d,E.d,[]),a.zb(1073742336,V.e,V.e,[[2,V.b],[2,J.g]]),a.zb(1073742336,Y.e,Y.e,[]),a.zb(1073742336,V.g,V.g,[]),a.zb(1073742336,xl.j,xl.j,[]),a.zb(1073742336,Cl.a,Cl.a,[]),a.zb(1073742336,Ol.a,Ol.a,[]),a.zb(1073742336,r,r,[]),a.zb(1024,K.l,function(){return[[{path:"",component:o}]]},[])])})}}]);