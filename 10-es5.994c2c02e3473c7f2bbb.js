!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{x1Ph:function(e,o,i){"use strict";i.r(o),i.d(o,"AppLayoutPageModule",(function(){return C}));var a=i("ofXK"),u=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),b=i("fXoL"),l=i("zJju"),h=i("vpl3");function s(n,t){1&n&&(b.Pb(0,"ion-tab-button",8),b.Nb(1,"ion-icon",9),b.Pb(2,"ion-label"),b.pc(3,"Login"),b.Ob(),b.Ob())}function f(n,t){1&n&&(b.Pb(0,"ion-tab-button",10),b.Nb(1,"ion-icon",9),b.Pb(2,"ion-label"),b.pc(3,"My Account"),b.Ob(),b.Ob())}function d(n,t){if(1&n&&(b.Pb(0,"ion-badge"),b.pc(1),b.Ob()),2&n){var e=b.Zb();b.Cb(1),b.qc(e.cartItemCount)}}var p,m,P,g=[{path:"",component:(p=function(){function e(t,o,i){n(this,e),this.platform=t,this.cartService=o,this.authService=i}var o,i,a;return o=e,(i=[{key:"ionViewDidEnter",value:function(){this.backButtonSubscription=this.platform.backButton.subscribe((function(){navigator.app.exitApp()}))}},{key:"ionViewWillLeave",value:function(){this.backButtonSubscription.unsubscribe()}},{key:"ngOnInit",value:function(){var n=this;this.cartService.getCartItems().then((function(t){n.cartItemCount=(t||[]).length})),this.authService.isAuthenticated().then((function(t){n.isAuthenticated=t})),this.cartService.cart.subscribe((function(t){n.cartItemCount=t})),this.authService.authenticated.subscribe((function(t){n.isAuthenticated=t}))}}])&&t(o.prototype,i),a&&t(o,a),e}(),p.\u0275fac=function(n){return new(n||p)(b.Mb(c.Z),b.Mb(l.a),b.Mb(h.a))},p.\u0275cmp=b.Gb({type:p,selectors:[["app-app-layout"]],decls:13,vars:3,consts:[["slot","bottom"],["tab","home"],["name","home"],["tab","login",4,"ngIf"],["tab","account",4,"ngIf"],["tab","cart"],["name","cart-outline"],[4,"ngIf"],["tab","login"],["name","person-outline"],["tab","account"]],template:function(n,t){1&n&&(b.Pb(0,"ion-tabs"),b.Pb(1,"ion-tab-bar",0),b.Pb(2,"ion-tab-button",1),b.Nb(3,"ion-icon",2),b.Pb(4,"ion-label"),b.pc(5,"Home"),b.Ob(),b.Ob(),b.oc(6,s,4,0,"ion-tab-button",3),b.oc(7,f,4,0,"ion-tab-button",4),b.Pb(8,"ion-tab-button",5),b.Nb(9,"ion-icon",6),b.Pb(10,"ion-label"),b.pc(11,"Cart"),b.Ob(),b.oc(12,d,2,1,"ion-badge",7),b.Ob(),b.Ob(),b.Ob()),2&n&&(b.Cb(6),b.cc("ngIf",!t.isAuthenticated),b.Cb(1),b.cc("ngIf",t.isAuthenticated),b.Cb(5),b.cc("ngIf",t.cartItemCount>0))},directives:[c.S,c.Q,c.R,c.q,c.w,a.j,c.e],styles:[""]}),p),children:[{path:"",redirectTo:"/home/home",pathMatch:"full"},{path:"home",loadChildren:function(){return Promise.all([i.e(0),i.e(17)]).then(i.bind(null,"8xH5")).then((function(n){return n.HomePageModule}))}},{path:"contact-us",loadChildren:function(){return i.e(0).then(i.bind(null,"+NA5")).then((function(n){return n.ContactUsPageRoutingModule}))}},{path:"products-by-category",loadChildren:function(){return Promise.all([i.e(0),i.e(12)]).then(i.bind(null,"E8+X")).then((function(n){return n.ProductListPageModule}))}},{path:"product",loadChildren:function(){return Promise.all([i.e(0),i.e(13)]).then(i.bind(null,"+IFf")).then((function(n){return n.ProductViewPageModule}))}},{path:"cart",loadChildren:function(){return Promise.all([i.e(0),i.e(15)]).then(i.bind(null,"Avph")).then((function(n){return n.CartPageModule}))}},{path:"login",loadChildren:function(){return Promise.all([i.e(0),i.e(18)]).then(i.bind(null,"JcOD")).then((function(n){return n.LoginPageModule}))}},{path:"account",loadChildren:function(){return Promise.all([i.e(0),i.e(14)]).then(i.bind(null,"gZRE")).then((function(n){return n.AccountPageModule}))}},{path:"orders",loadChildren:function(){return Promise.all([i.e(0),i.e(11)]).then(i.bind(null,"wo8r")).then((function(n){return n.OrderListPageModule}))}}]}],v=((P=function t(){n(this,t)}).\u0275mod=b.Kb({type:P}),P.\u0275inj=b.Jb({factory:function(n){return new(n||P)},imports:[[r.j.forChild(g)],r.j]}),P),C=((m=function t(){n(this,t)}).\u0275mod=b.Kb({type:m}),m.\u0275inj=b.Jb({factory:function(n){return new(n||m)},imports:[[a.b,u.a,c.X,v]]}),m)}}])}();