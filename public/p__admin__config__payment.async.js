(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("3a4m"),l=t.n(s),r=t("/MKj"),c=t("20nU"),o=t("yWgo");class m extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})}];Object(o["b"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},a);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{l.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(r["c"])(e=>{var a=e.header;return{header:a}})(m),p=t("t3Un");class h extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(p["a"])("/user/logout").then(e=>{l.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"none":"block"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"}))),this.props.search&&i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"form-control rounded-lg px-4",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)})),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))))}}var u=Object(r["c"])(e=>{var a=e.header;return{header:a}})(h);class v extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.1"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class E extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(d,this.props),i.a.createElement(u,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(v,null))}}a["a"]=Object(r["c"])(e=>{var a=e.header;return{header:a}})(E)},"cD2/":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u});var n=t("jehZ"),i=t.n(n),s=(t("BoS7"),t("Sdc0")),l=(t("+L6B"),t("2/Rp")),r=(t("miYZ"),t("tsqr")),c=t("p0pE"),o=t.n(c),m=t("q1tI"),d=t.n(m),p=t("Bl7J"),h=t("t3Un");class u extends d.a.Component{constructor(){super(...arguments),this.state={invite:{},site:{},pay:{},loading:!0}}componentDidMount(){this.fetchData()}fetchData(){Object(h["a"])("/admin/config").then(e=>{200===e.code&&this.setState(o()({},e.data,{loading:!1}))})}submit(e){Object(h["b"])("/admin/config/save",this.state[e]).then(e=>{200===e.code&&e.data&&(this.fetchData(),r["a"].success("\u4fdd\u5b58\u6210\u529f"))})}set(e,a,t){this.setState({[e]:o()({},this.state[e],{[a]:t})})}render(){return d.a.createElement(p["a"],i()({},this.props,{loading:this.state.loading}),d.a.createElement("main",{id:"main-container"},d.a.createElement("div",{className:"content content-full"},d.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u652f\u4ed8\u914d\u7f6e"),d.a.createElement("div",{className:"block block-rounded block-bordered"},d.a.createElement("div",{className:"block-header block-header-default"},d.a.createElement("h3",{className:"block-title"},"\u652f\u4ed8\u5b9d\u5f53\u9762\u4ed8"),d.a.createElement("div",{className:"block-options"},d.a.createElement(l["a"],{type:"primary",onClick:()=>this.submit("pay")},"\u4fdd\u5b58"))),d.a.createElement("div",{className:"block-content"},d.a.createElement("div",{className:"row push"},d.a.createElement("div",{className:"col-lg-8 col-xl-5"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"\u542f\u7528"),d.a.createElement("div",null,d.a.createElement(s["a"],{checked:parseInt(this.state.pay.alipay_enable),onChange:e=>this.set("pay","alipay_enable",e?1:0)}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"APPID"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.pay.alipay_appid,onChange:e=>this.set("pay","alipay_appid",parseInt(e.target.value))})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"\u516c\u94a5"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.pay.alipay_pubkey,onChange:e=>this.set("pay","alipay_pubkey",e.target.value)})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"\u79c1\u94a5"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.pay.alipay_privkey,onChange:e=>this.set("pay","alipay_privkey",e.target.value)})))))),d.a.createElement("div",{className:"block block-rounded block-bordered"},d.a.createElement("div",{className:"block-header block-header-default"},d.a.createElement("h3",{className:"block-title"},"Stripe"),d.a.createElement("div",{className:"block-options"},d.a.createElement(l["a"],{type:"primary",onClick:()=>this.submit("pay")},"\u4fdd\u5b58"))),d.a.createElement("div",{className:"block-content"},d.a.createElement("div",{className:"row push"},d.a.createElement("div",{className:"col-lg-8 col-xl-5"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"\u542f\u7528\u652f\u4ed8\u5b9d\u6536\u6b3e"),d.a.createElement("div",null,d.a.createElement(s["a"],{checked:parseInt(this.state.pay.stripe_alipay_enable),onChange:e=>this.set("pay","stripe_alipay_enable",e?1:0)}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"\u542f\u7528\u5fae\u4fe1\u6536\u6b3e"),d.a.createElement("div",null,d.a.createElement(s["a"],{checked:parseInt(this.state.pay.stripe_wepay_enable),onChange:e=>this.set("pay","stripe_wepay_enable",e?1:0)}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"SK_LIVE"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.pay.stripe_sk_live,onChange:e=>this.set("pay","stripe_sk_live",e.target.value)})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"PL_LIVE"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.pay.stripe_pk_live,onChange:e=>this.set("pay","stripe_pk_live",e.target.value)})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{for:"example-text-input"},"WebHook\u5bc6\u94a5\u7b7e\u540d"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u8bf7\u8f93\u5165",defaultValue:this.state.pay.stripe_webhook_key,onChange:e=>this.set("pay","stripe_webhook_key",e.target.value)})))))))))}}}}]);