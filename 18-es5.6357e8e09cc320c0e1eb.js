!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function o(n,o,e){return o&&t(n.prototype,o),e&&t(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{JcOD:function(t,e,i){"use strict";i.r(e),i.d(e,"LoginPageModule",(function(){return x}));var r,c=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),b=i("tyNb"),u=i("fXoL"),l=i("vpl3"),p=i("1eqS"),f=i("n90K"),g=i("tk/3"),d=((r=function(){function t(o){n(this,t),this.httpClient=o}return o(t,[{key:"signupUser",value:function(n){return this.httpClient.post("customers",n)}},{key:"getCustomer",value:function(n){return this.httpClient.get("customers/email/"+n)}}]),t}()).\u0275fac=function(n){return new(n||r)(u.Tb(g.b))},r.\u0275prov=u.Ib({token:r,factory:r.\u0275fac,providedIn:"root"}),r),h=i("np0s");function m(n,t){1&n&&(u.Pb(0,"span"),u.pc(1," Proceed "),u.Ob())}function P(n,t){1&n&&(u.Pb(0,"span"),u.Nb(1,"ion-spinner",20),u.Ob())}var v,O,w,k=[{path:"",component:(v=function(){function t(o,e,i,r,c,a){n(this,t),this.authservice=o,this.router=e,this.activatedRute=i,this.toastService=r,this.storageService=c,this.customerService=a,this.loading=!1}return o(t,[{key:"authenticate",value:function(n,t){var o=this;n&&t?(this.loading=!0,this.authservice.getAuthToken({username:n,password:t}).subscribe((function(n){o.token=n,o.authservice.authenticated.emit(!0),o.customerService.getCustomer(o.token.user_email).subscribe((function(n){o.loading=!1,o.storageService.set("user",n.customer),o.router.navigate(["/home/home"],{replaceUrl:!0})}))}),(function(n){console.log(n.error.message),o.loading=!1,o.toastService.presentToast(n.error.message,5e3)}))):this.toastService.presentToast("Please fill in both the fields")}},{key:"ngOnInit",value:function(){}}]),t}(),v.\u0275fac=function(n){return new(n||v)(u.Mb(l.a),u.Mb(b.g),u.Mb(b.a),u.Mb(p.a),u.Mb(f.a),u.Mb(d))},v.\u0275cmp=u.Gb({type:v,selectors:[["app-login"]],decls:42,vars:3,consts:[["title","Login"],[1,"ion-text-center"],[1,"ion-align-items-center","ion-justify-content-center","ion-text-center",2,"height","95%"],["size","12"],[1,"ion-text-center",2,"margin-top","-6rem"],["lines","none"],["position","floating"],["userid",""],["type","password"],["password",""],[1,"ion-text-right","ion-margin"],["href","#","onclick","window.open('<Forgot password page URL>', '_system', 'location=yes'); return false;",1,"link"],[2,"padding","0 0.75rem"],["expand","full",3,"disabled","click"],[4,"ngIf"],[1,"bottom"],["size","6"],[1,"social-login-btn"],["name","logo-google"],["name","logo-facebook"],["name","dots"]],template:function(n,t){if(1&n){var o=u.Qb();u.Pb(0,"ion-header"),u.Nb(1,"app-toolbar",0),u.Ob(),u.Pb(2,"ion-content",1),u.Pb(3,"ion-row",2),u.Pb(4,"ion-col",3),u.Pb(5,"div",4),u.Pb(6,"h4"),u.pc(7,"Welcome"),u.Ob(),u.Pb(8,"p"),u.pc(9,"Just a step away from the Wooow exeprience"),u.Ob(),u.Ob(),u.Nb(10,"br"),u.Pb(11,"ion-list"),u.Pb(12,"ion-item",5),u.Pb(13,"ion-label",6),u.pc(14,"Email"),u.Ob(),u.Nb(15,"ion-input",null,7),u.Ob(),u.Pb(17,"ion-item",5),u.Pb(18,"ion-label",6),u.pc(19,"Password"),u.Ob(),u.Nb(20,"ion-input",8,9),u.Ob(),u.Ob(),u.Pb(22,"div",10),u.Pb(23,"a",11),u.pc(24," Forgot your password? "),u.Ob(),u.Ob(),u.Pb(25,"div",12),u.Pb(26,"ion-button",13),u.Xb("click",(function(){u.kc(o);var n=u.jc(16),e=u.jc(21);return t.authenticate(n.value,e.value)})),u.oc(27,m,2,0,"span",14),u.oc(28,P,2,0,"span",14),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(29,"div",15),u.Pb(30,"ion-row"),u.Pb(31,"ion-col",16),u.Pb(32,"ion-button",17),u.Nb(33,"ion-icon",18),u.pc(34," \xa0Login with Google "),u.Ob(),u.Ob(),u.Pb(35,"ion-col",16),u.Pb(36,"ion-button",17),u.Nb(37,"ion-icon",19),u.pc(38," \xa0Login with Facebook "),u.Ob(),u.Ob(),u.Pb(39,"ion-col",3),u.Pb(40,"p"),u.pc(41,"Don't have an account? Register"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob()}2&n&&(u.Cb(26),u.cc("disabled",t.loading),u.Cb(1),u.cc("ngIf",!t.loading),u.Cb(1),u.cc("ngIf",t.loading))},directives:[s.p,h.a,s.n,s.F,s.m,s.x,s.v,s.w,s.u,s.cb,s.f,c.j,s.q,s.O],styles:["ion-input[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.link[_ngcontent-%COMP%]{color:#444;text-decoration:none;font-size:13px}p[_ngcontent-%COMP%]{font-size:12px;color:#777}.social-login-btn[_ngcontent-%COMP%]{--background:transparent;font-size:10px;color:#333;border-radius:5px;border:1px solid #ccc;--box-shadow:none}.bottom[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;padding-right:.75rem}ion-label[_ngcontent-%COMP%]{color:#666!important}"]}),v)}],y=((O=function t(){n(this,t)}).\u0275mod=u.Kb({type:O}),O.\u0275inj=u.Jb({factory:function(n){return new(n||O)},imports:[[b.j.forChild(k)],b.j]}),O),C=i("k9Ri"),x=((w=function t(){n(this,t)}).\u0275mod=u.Kb({type:w}),w.\u0275inj=u.Jb({factory:function(n){return new(n||w)},imports:[[c.b,a.a,s.X,C.a,y]]}),w)}}])}();