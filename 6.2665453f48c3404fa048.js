(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KQ9h:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("ZZ/e"),o=function(){function l(l){this.toastController=l,this.subHeader="subheader here",this.header="More Actions",this.count=1,this.forceActionsheet=!1,this.forcePopover=!1,this.iconsOnly=!0}return l.prototype.ngOnInit=function(){},l.prototype.presentToast=function(l){return n=this,void 0,t=function(){return function(l,n){var u,t,e,o,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(e=2&o[0]?t.return:o[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,o[1])).done)return e;switch(t=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(6===o[0]&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(r){o=[6,r],t=0}finally{u=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}}(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({message:l,duration:2e3})];case 1:return n.sent().present(),[2]}})},new((u=void 0)||(u=Promise))(function(l,e){function o(l){try{r(t.next(l))}catch(n){e(n)}}function i(l){try{r(t.throw(l))}catch(n){e(n)}}function r(n){n.done?l(n.value):new u(function(l){l(n.value)}).then(o,i)}r((t=t.apply(n,[])).next())});var n,u,t},l}(),i=function(){return function(){}}(),r=u("pMnS"),c=u("NcP4"),b=u("tzjl"),s=u("MzJX"),a=u("Xqnl"),d=u("2MiI"),g=u("oBZk"),h=u("XVzZ"),f=u("F5vI"),p=u("8dp0"),k=u("i3KY"),m=u("Ikhr"),v=t.qb({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,4,"ion-button",[],null,null,null,g.Q,g.c)),t.rb(1,49152,null,0,e.l,[t.h,t.k,t.A],{color:[0,"color"],disabled:[1,"disabled"]},null),(l()(),t.sb(2,0,null,0,1,"fiv-icon",[],null,null,null,p.b,p.a)),t.rb(3,114688,null,0,k.a,[],{name:[0,"name"]},null),(l()(),t.Jb(4,0,[" ","\n"]))],function(l,n){var u=n.component;l(n,1,0,u.color,u.disabled),l(n,3,0,u.icon)},function(l,n){l(n,4,0,n.component.text)})}var B=u("Ip0R"),y=u("ZnXl"),x=t.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}"]],data:{}});function z(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onMenuClicked(u)&&t),t},C,v)),t.rb(1,114688,null,0,m.a,[],{text:[0,"text"],color:[1,"color"]},{click:"click"})],function(l,n){var u=n.component;l(n,1,0,u.text,u.color)},null)}function A(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onMenuClicked(u)&&t),t},C,v)),t.rb(1,114688,null,0,m.a,[],{icon:[0,"icon"],color:[1,"color"]},{click:"click"})],function(l,n){l(n,1,0,"md-more",n.component.color)},null)}function I(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onButtonClicked(l.context.index)&&t),t},C,v)),t.rb(1,114688,null,0,m.a,[],{icon:[0,"icon"],color:[1,"color"]},{click:"click"})],function(l,n){l(n,1,0,n.context.$implicit.icon,n.context.$implicit.color)},null)}function j(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),t.jb(16777216,null,null,2,null,I)),t.rb(2,278528,null,0,B.l,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),t.Db(0,B.v,[]),(l()(),t.jb(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,t.Kb(n,2,0,t.Bb(n,3).transform(u.buttons.toArray(),0,u.count)))},null)}function M(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onButtonClicked(l.context.index)&&t),t},C,v)),t.rb(1,114688,null,0,m.a,[],{icon:[0,"icon"],text:[1,"text"],color:[2,"color"]},{click:"click"})],function(l,n){l(n,1,0,n.context.$implicit.icon,n.context.$implicit.text,n.context.$implicit.color)},null)}function P(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),t.jb(16777216,null,null,2,null,M)),t.rb(2,278528,null,0,B.l,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),t.Db(0,B.v,[]),(l()(),t.jb(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,t.Kb(n,2,0,t.Bb(n,3).transform(u.buttons.toArray(),0,u.count)))},null)}function w(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onMenuClicked(u)&&t),t},C,v)),t.rb(1,114688,null,0,m.a,[],{icon:[0,"icon"],color:[1,"color"]},{click:"click"})],function(l,n){var u=n.component;l(n,1,0,u.icon,u.color)},null)}function O(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onMenuClicked(u)&&t),t},C,v)),t.rb(1,114688,null,0,m.a,[],{text:[0,"text"],color:[1,"color"]},{click:"click"})],function(l,n){var u=n.component;l(n,1,0,u.text,u.color)},null)}function L(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,13,"ion-buttons",[],[[8,"slot",0]],null,null,g.R,g.d)),t.rb(1,49152,null,0,e.m,[t.h,t.k,t.A],null,null),(l()(),t.jb(16777216,null,0,1,null,z)),t.rb(3,16384,null,0,B.m,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,0,1,null,A)),t.rb(5,16384,null,0,B.m,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,0,1,null,j)),t.rb(7,16384,null,0,B.m,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,0,1,null,P)),t.rb(9,16384,null,0,B.m,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,0,1,null,w)),t.rb(11,16384,null,0,B.m,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,0,1,null,O)),t.rb(13,16384,null,0,B.m,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,("start"===u.slot||"primary"===u.slot)&&u.count<u.buttons.length&&u.text),l(n,5,0,("start"===u.slot||"primary"===u.slot)&&u.count<u.buttons.length&&!u.text),l(n,7,0,u.iconsOnly),l(n,9,0,!u.iconsOnly),l(n,11,0,("end"===u.slot||"secondary"===u.slot)&&u.count<u.buttons.length&&!u.text),l(n,13,0,("end"===u.slot||"secondary"===u.slot)&&u.count<u.buttons.length&&u.text)},function(l,n){l(n,0,0,n.component.slot)})}function G(l){return t.Lb(0,[(l()(),t.jb(16777216,null,null,1,null,L)),t.rb(1,16384,null,0,B.m,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.buttons)},null)}var X=u("gIcY"),T=t.qb({encapsulation:0,styles:[[""]],data:{}});function S(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"app-header",[["title","Overflow Buttons"]],null,null,null,a.b,a.a)),t.rb(1,114688,null,0,d.a,[e.Hb],{title:[0,"title"]},null),(l()(),t.sb(2,0,null,null,104,"ion-content",[],null,null,null,g.ab,g.m)),t.rb(3,49152,null,0,e.v,[t.h,t.k,t.A],null,null),(l()(),t.sb(4,0,null,0,102,"ion-grid",[["class","page-content"],["fixed",""]],null,null,null,g.eb,g.q)),t.rb(5,49152,null,0,e.B,[t.h,t.k,t.A],{fixed:[0,"fixed"]},null),(l()(),t.sb(6,0,null,0,100,"ion-row",[],null,null,null,g.rb,g.D)),t.rb(7,49152,null,0,e.jb,[t.h,t.k,t.A],null,null),(l()(),t.sb(8,0,null,0,98,"ion-col",[["offsetLg","1"],["offsetMd","0"],["offsetSm","0"],["offsetXl","1"],["offsetXs","0"],["sizeLg","10"],["sizeMd","12"],["sizeSm","12"],["sizeXl","10"],["sizeXs","12"]],null,null,null,g.Z,g.l)),t.rb(9,49152,null,0,e.u,[t.h,t.k,t.A],{offsetLg:[0,"offsetLg"],offsetMd:[1,"offsetMd"],offsetSm:[2,"offsetSm"],offsetXl:[3,"offsetXl"],offsetXs:[4,"offsetXs"],sizeLg:[5,"sizeLg"],sizeMd:[6,"sizeMd"],sizeSm:[7,"sizeSm"],sizeXl:[8,"sizeXl"],sizeXs:[9,"sizeXs"]},null),(l()(),t.sb(10,0,null,0,96,"app-example",[],null,null,null,h.b,h.a)),t.rb(11,114688,null,0,f.a,[],{title:[0,"title"],subtitle:[1,"subtitle"],html:[2,"html"],css:[3,"css"],typescript:[4,"typescript"],api:[5,"api"]},null),(l()(),t.sb(12,0,null,0,4,"ion-item-divider",[],null,null,null,g.ib,g.v)),t.rb(13,49152,null,0,e.J,[t.h,t.k,t.A],null,null),(l()(),t.sb(14,0,null,0,2,"ion-label",[],null,null,null,g.lb,g.x)),t.rb(15,49152,null,0,e.O,[t.h,t.k,t.A],null,null),(l()(),t.Jb(-1,0,["Example"])),(l()(),t.sb(17,0,null,0,89,"ion-card",[],null,null,null,g.W,g.e)),t.rb(18,49152,null,0,e.n,[t.h,t.k,t.A],null,null),(l()(),t.sb(19,0,null,0,12,"ion-toolbar",[],null,null,null,g.Bb,g.N)),t.rb(20,49152,null,0,e.Cb,[t.h,t.k,t.A],null,null),(l()(),t.sb(21,0,null,0,10,"fiv-buttons",[["slot","end"]],null,null,null,G,x)),t.rb(22,1163264,null,1,y.a,[e.Kb,e.Lb,e.a],{slot:[0,"slot"],subHeader:[1,"subHeader"],header:[2,"header"],count:[3,"count"],forceActionsheet:[4,"forceActionsheet"],forcePopover:[5,"forcePopover"],iconsOnly:[6,"iconsOnly"]},null),t.Hb(603979776,1,{buttons:1}),(l()(),t.sb(24,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.presentToast("add clicked")&&t),t},C,v)),t.rb(25,114688,[[1,4]],0,m.a,[],{text:[0,"text"],color:[1,"color"]},{click:"click"}),(l()(),t.sb(26,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.presentToast("delete clicked")&&t),t},C,v)),t.rb(27,114688,[[1,4]],0,m.a,[],{icon:[0,"icon"],text:[1,"text"]},{click:"click"}),(l()(),t.sb(28,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.presentToast("select image clicked")&&t),t},C,v)),t.rb(29,114688,[[1,4]],0,m.a,[],{icon:[0,"icon"],text:[1,"text"]},{click:"click"}),(l()(),t.sb(30,0,null,null,1,"fiv-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.presentToast("take photo clicked")&&t),t},C,v)),t.rb(31,114688,[[1,4]],0,m.a,[],{icon:[0,"icon"],text:[1,"text"]},{click:"click"}),(l()(),t.sb(32,0,null,0,74,"ion-card-content",[],null,null,null,g.S,g.f)),t.rb(33,49152,null,0,e.o,[t.h,t.k,t.A],null,null),(l()(),t.Jb(-1,0,[" Parameters: "])),(l()(),t.sb(35,0,null,0,11,"ion-item",[],null,null,null,g.kb,g.u)),t.rb(36,49152,null,0,e.I,[t.h,t.k,t.A],null,null),(l()(),t.sb(37,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.lb,g.x)),t.rb(38,49152,null,0,e.O,[t.h,t.k,t.A],{position:[0,"position"]},null),(l()(),t.Jb(-1,0,["Number of visible icons outside of popover / actionsheet"])),(l()(),t.sb(40,0,null,0,6,"ion-input",[["max","4"],["min","0"],["placeholder","0 - 4"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,41)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,41)._handleIonChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.count=u)&&e),e},g.hb,g.t)),t.rb(41,16384,null,0,e.Jb,[t.k],null,null),t.Gb(1024,null,X.f,function(l){return[l]},[e.Jb]),t.rb(43,671744,null,0,X.j,[[8,null],[8,null],[8,null],[6,X.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,X.g,null,[X.j]),t.rb(45,16384,null,0,X.h,[[4,X.g]],null,null),t.rb(46,49152,null,0,e.H,[t.h,t.k,t.A],{max:[0,"max"],min:[1,"min"],placeholder:[2,"placeholder"],type:[3,"type"]},null),(l()(),t.sb(47,0,null,0,11,"ion-item",[],null,null,null,g.kb,g.u)),t.rb(48,49152,null,0,e.I,[t.h,t.k,t.A],null,null),(l()(),t.sb(49,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.lb,g.x)),t.rb(50,49152,null,0,e.O,[t.h,t.k,t.A],{position:[0,"position"]},null),(l()(),t.Jb(-1,0,["Header Text (Actionsheet only)"])),(l()(),t.sb(52,0,null,0,6,"ion-input",[["placeholder","header"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,53)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,53)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.header=u)&&e),e},g.hb,g.t)),t.rb(53,16384,null,0,e.Pb,[t.k],null,null),t.Gb(1024,null,X.f,function(l){return[l]},[e.Pb]),t.rb(55,671744,null,0,X.j,[[8,null],[8,null],[8,null],[6,X.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,X.g,null,[X.j]),t.rb(57,16384,null,0,X.h,[[4,X.g]],null,null),t.rb(58,49152,null,0,e.H,[t.h,t.k,t.A],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.sb(59,0,null,0,11,"ion-item",[],null,null,null,g.kb,g.u)),t.rb(60,49152,null,0,e.I,[t.h,t.k,t.A],null,null),(l()(),t.sb(61,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.lb,g.x)),t.rb(62,49152,null,0,e.O,[t.h,t.k,t.A],{position:[0,"position"]},null),(l()(),t.Jb(-1,0,["Subheader Text (Actionsheet only)"])),(l()(),t.sb(64,0,null,0,6,"ion-input",[["placeholder","subHeader"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,65)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,65)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.subHeader=u)&&e),e},g.hb,g.t)),t.rb(65,16384,null,0,e.Pb,[t.k],null,null),t.Gb(1024,null,X.f,function(l){return[l]},[e.Pb]),t.rb(67,671744,null,0,X.j,[[8,null],[8,null],[8,null],[6,X.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,X.g,null,[X.j]),t.rb(69,16384,null,0,X.h,[[4,X.g]],null,null),t.rb(70,49152,null,0,e.H,[t.h,t.k,t.A],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.sb(71,0,null,0,11,"ion-item",[],null,null,null,g.kb,g.u)),t.rb(72,49152,null,0,e.I,[t.h,t.k,t.A],null,null),(l()(),t.sb(73,0,null,0,2,"ion-label",[],null,null,null,g.lb,g.x)),t.rb(74,49152,null,0,e.O,[t.h,t.k,t.A],null,null),(l()(),t.Jb(-1,0,["Force Actionsheet"])),(l()(),t.sb(76,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,77)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,77)._handleIonChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.forceActionsheet=u)&&e),e},g.X,g.j)),t.rb(77,16384,null,0,e.c,[t.k],null,null),t.Gb(1024,null,X.f,function(l){return[l]},[e.c]),t.rb(79,671744,null,0,X.j,[[8,null],[8,null],[8,null],[6,X.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,X.g,null,[X.j]),t.rb(81,16384,null,0,X.h,[[4,X.g]],null,null),t.rb(82,49152,null,0,e.s,[t.h,t.k,t.A],{checked:[0,"checked"]},null),(l()(),t.sb(83,0,null,0,11,"ion-item",[],null,null,null,g.kb,g.u)),t.rb(84,49152,null,0,e.I,[t.h,t.k,t.A],null,null),(l()(),t.sb(85,0,null,0,2,"ion-label",[],null,null,null,g.lb,g.x)),t.rb(86,49152,null,0,e.O,[t.h,t.k,t.A],null,null),(l()(),t.Jb(-1,0,["Force Popover"])),(l()(),t.sb(88,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,89)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,89)._handleIonChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.forcePopover=u)&&e),e},g.X,g.j)),t.rb(89,16384,null,0,e.c,[t.k],null,null),t.Gb(1024,null,X.f,function(l){return[l]},[e.c]),t.rb(91,671744,null,0,X.j,[[8,null],[8,null],[8,null],[6,X.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,X.g,null,[X.j]),t.rb(93,16384,null,0,X.h,[[4,X.g]],null,null),t.rb(94,49152,null,0,e.s,[t.h,t.k,t.A],{checked:[0,"checked"]},null),(l()(),t.sb(95,0,null,0,11,"ion-item",[],null,null,null,g.kb,g.u)),t.rb(96,49152,null,0,e.I,[t.h,t.k,t.A],null,null),(l()(),t.sb(97,0,null,0,2,"ion-label",[],null,null,null,g.lb,g.x)),t.rb(98,49152,null,0,e.O,[t.h,t.k,t.A],null,null),(l()(),t.Jb(-1,0,["Show icons only (Toolbar only)"])),(l()(),t.sb(100,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,101)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,101)._handleIonChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.iconsOnly=u)&&e),e},g.X,g.j)),t.rb(101,16384,null,0,e.c,[t.k],null,null),t.Gb(1024,null,X.f,function(l){return[l]},[e.c]),t.rb(103,671744,null,0,X.j,[[8,null],[8,null],[8,null],[6,X.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,X.g,null,[X.j]),t.rb(105,16384,null,0,X.h,[[4,X.g]],null,null),t.rb(106,49152,null,0,e.s,[t.h,t.k,t.A],{checked:[0,"checked"]},null)],function(l,n){var u=n.component;l(n,1,0,"Overflow Buttons"),l(n,5,0,""),l(n,9,0,"1","0","0","1","0","10","12","12","10","12"),l(n,11,0,"Overflow Buttons","Easily build responsive Toolbar Buttons with overflow menus. By default, this will show a Popover on desktop and an Actionsheet on mobile.","assets/docs/snippets/buttons/buttons.html.md","assets/docs/snippets/buttons/buttons.css.md","assets/docs/snippets/buttons/buttons.typescript.md","assets/docs/snippets/buttons/buttons.api.md"),l(n,22,0,"end",u.subHeader,u.header,u.count,u.forceActionsheet,u.forcePopover,u.iconsOnly),l(n,25,0,"Add","primary"),l(n,27,0,"md-trash","Delete"),l(n,29,0,"md-image","Select Image"),l(n,31,0,"md-camera","Take Photo"),l(n,38,0,"floating"),l(n,43,0,u.count),l(n,46,0,"4","0","0 - 4","number"),l(n,50,0,"floating"),l(n,55,0,u.header),l(n,58,0,"header","text"),l(n,62,0,"floating"),l(n,67,0,u.subHeader),l(n,70,0,"subHeader","text"),l(n,79,0,u.forceActionsheet),l(n,82,0,u.forceActionsheet),l(n,91,0,u.forcePopover),l(n,94,0,u.forcePopover),l(n,103,0,u.iconsOnly),l(n,106,0,u.iconsOnly)},function(l,n){l(n,40,0,t.Bb(n,45).ngClassUntouched,t.Bb(n,45).ngClassTouched,t.Bb(n,45).ngClassPristine,t.Bb(n,45).ngClassDirty,t.Bb(n,45).ngClassValid,t.Bb(n,45).ngClassInvalid,t.Bb(n,45).ngClassPending),l(n,52,0,t.Bb(n,57).ngClassUntouched,t.Bb(n,57).ngClassTouched,t.Bb(n,57).ngClassPristine,t.Bb(n,57).ngClassDirty,t.Bb(n,57).ngClassValid,t.Bb(n,57).ngClassInvalid,t.Bb(n,57).ngClassPending),l(n,64,0,t.Bb(n,69).ngClassUntouched,t.Bb(n,69).ngClassTouched,t.Bb(n,69).ngClassPristine,t.Bb(n,69).ngClassDirty,t.Bb(n,69).ngClassValid,t.Bb(n,69).ngClassInvalid,t.Bb(n,69).ngClassPending),l(n,76,0,t.Bb(n,81).ngClassUntouched,t.Bb(n,81).ngClassTouched,t.Bb(n,81).ngClassPristine,t.Bb(n,81).ngClassDirty,t.Bb(n,81).ngClassValid,t.Bb(n,81).ngClassInvalid,t.Bb(n,81).ngClassPending),l(n,88,0,t.Bb(n,93).ngClassUntouched,t.Bb(n,93).ngClassTouched,t.Bb(n,93).ngClassPristine,t.Bb(n,93).ngClassDirty,t.Bb(n,93).ngClassValid,t.Bb(n,93).ngClassInvalid,t.Bb(n,93).ngClassPending),l(n,100,0,t.Bb(n,105).ngClassUntouched,t.Bb(n,105).ngClassTouched,t.Bb(n,105).ngClassPristine,t.Bb(n,105).ngClassDirty,t.Bb(n,105).ngClassValid,t.Bb(n,105).ngClassInvalid,t.Bb(n,105).ngClassPending)})}function J(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"app-buttons",[],null,null,null,S,T)),t.rb(1,114688,null,0,o,[e.Qb],null,null)],function(l,n){l(n,1,0)},null)}var H=t.ob("app-buttons",o,J,{},{},[]),D=u("M2Lx"),E=u("eDkP"),N=u("Fzqc"),_=u("v9Dh"),Q=u("ZYjt"),Z=u("Wf4p"),F=u("lqlK"),V=u("ZYCi"),q=u("gVIA"),K=u("RDSS"),U=u("/q0c"),Y=u("LOpI"),$=u("dWZg"),R=u("lLAP"),W=u("4c35"),ll=u("qAlS"),nl=u("La40"),ul=u("UOu5"),tl=u("0RK4"),el=u("6wuw"),ol=u("isGY"),il=u("ZhfK"),rl=u("/Gdi"),cl=u("GkVF"),bl=u("j1ZV");u.d(n,"ButtonsPageModuleNgFactory",function(){return sl});var sl=t.pb(i,[],function(l){return t.yb([t.zb(512,t.j,t.db,[[8,[r.a,c.a,b.a,s.a,H]],[3,t.j],t.y]),t.zb(4608,B.o,B.n,[t.v,[2,B.B]]),t.zb(4608,X.o,X.o,[]),t.zb(4608,e.b,e.b,[t.A,t.g]),t.zb(4608,e.Gb,e.Gb,[e.b,t.j,t.r]),t.zb(4608,e.Lb,e.Lb,[e.b,t.j,t.r]),t.zb(4608,D.c,D.c,[]),t.zb(4608,E.a,E.a,[E.f,E.b,t.j,E.e,E.c,t.r,t.A,B.d,N.b,[2,B.i]]),t.zb(5120,E.g,E.h,[E.a]),t.zb(5120,_.b,_.c,[E.a]),t.zb(4608,Q.f,Z.a,[[2,Z.c],[2,Z.e]]),t.zb(4608,F.a,F.a,[t.j,t.G,t.g,t.r]),t.zb(1073742336,B.c,B.c,[]),t.zb(1073742336,X.m,X.m,[]),t.zb(1073742336,X.e,X.e,[]),t.zb(1073742336,e.Eb,e.Eb,[]),t.zb(1073742336,V.p,V.p,[[2,V.v],[2,V.n]]),t.zb(1073742336,q.a,q.a,[]),t.zb(1073742336,K.a,K.a,[]),t.zb(1073742336,U.a,U.a,[]),t.zb(1073742336,Y.b,Y.b,[]),t.zb(1073742336,$.b,$.b,[]),t.zb(1073742336,D.d,D.d,[]),t.zb(1073742336,R.a,R.a,[]),t.zb(1073742336,N.a,N.a,[]),t.zb(1073742336,W.e,W.e,[]),t.zb(1073742336,ll.b,ll.b,[]),t.zb(1073742336,E.d,E.d,[]),t.zb(1073742336,Z.e,Z.e,[[2,Z.b],[2,Q.g]]),t.zb(1073742336,_.e,_.e,[]),t.zb(1073742336,Z.g,Z.g,[]),t.zb(1073742336,nl.j,nl.j,[]),t.zb(1073742336,ul.a,ul.a,[]),t.zb(1073742336,tl.a,tl.a,[]),t.zb(1073742336,el.a,el.a,[]),t.zb(1073742336,ol.a,ol.a,[]),t.zb(1073742336,il.a,il.a,[]),t.zb(1073742336,rl.a,rl.a,[]),t.zb(1073742336,cl.a,cl.a,[]),t.zb(1073742336,bl.a,bl.a,[]),t.zb(1073742336,i,i,[]),t.zb(1024,V.l,function(){return[[{path:"",component:o}]]},[])])})}}]);