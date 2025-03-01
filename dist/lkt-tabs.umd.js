(function(t,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("vue"),require("lkt-session")):typeof define=="function"&&define.amd?define(["vue","lkt-session"],s):(t=typeof globalThis<"u"?globalThis:t||self,t.LktTabs=s(t.Vue,t.LktSession))})(this,function(t,s){"use strict";var we=Object.defineProperty;var ve=(t,s,p)=>s in t?we(t,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[s]=p;var d=(t,s,p)=>ve(t,typeof s!="symbol"?s+"":s,p);var u,k;function p(e=10){let n="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=a.length;for(let o=0;o<e;o++)n+=a.charAt(Math.floor(Math.random()*c));return n}function L(e){return typeof e=="string"}const y=["id"],B=t.defineComponent({__name:"LktTab",props:{id:{type:String,default:""},name:{type:String,required:!0},hash:{type:String,default:""},activeHash:{type:String,default:""},isDisabled:{type:Boolean,default:!1}},emits:["is-active"],setup(e,{emit:n}){const a=e,c=n,o=t.ref(!1),b=t.ref(p(8)),m=t.computed(()=>a.id?a.id:L(a.name)&&a.name.length>0?a.name.toLowerCase().replace(/ /g,"-"):b.value),h=()=>{o.value=a.activeHash===a.hash,c("is-active",o.value)};return t.watch(()=>a.activeHash,h),h(),(g,f)=>o.value?(t.openBlock(),t.createElementBlock("section",{key:0,"data-lkt":"tab-content",id:m.value,role:"tabpanel"},[t.renderSlot(g.$slots,"default")],8,y)):t.createCommentVNode("",!0)}}),w=e=>`lkt-tabs.${window.location.host}${window.location.pathname}.${e}`,T=e=>s.getSessionStorage(w(e)),E=(e,n,a)=>{s.setSessionStorage(w(e),n,a*60)};var M=(e=>(e.Button="button",e.Submit="submit",e.Reset="reset",e.Anchor="anchor",e.Content="content",e.Switch="switch",e.HiddenSwitch="hidden-switch",e.Split="split",e.SplitLazy="split-lazy",e.SplitEver="split-ever",e.Tooltip="tooltip",e.TooltipLazy="tooltip-lazy",e.TooltipEver="tooltip-ever",e))(M||{}),P=(e=>(e.Text="text",e.Email="email",e.Tel="tel",e.Password="password",e.Search="search",e.Number="number",e.Color="color",e.Range="range",e.Textarea="textarea",e.Html="html",e.Date="date",e.File="file",e.Image="image",e.Select="select",e.Check="check",e.Switch="switch",e.Calc="calc",e.Card="card",e.Elements="elements",e))(P||{}),D=["lktDateProps","lktStrictItem","lktExcludedProps"],I=(u=class{constructor(n){}feed(n={},a=this){if(typeof n=="object")for(let[c,o]of Object.entries(n))a.assignProp(c,o)}assignProp(n,a){if(!(D.includes(n)||u.lktExcludedProps.includes(n))){if(u.lktDateProps.includes(n)){this[n]=new Date(a);return}this[n]=a}}},d(u,"lktAllowUndefinedProps",[]),d(u,"lktExcludedProps",[]),d(u,"lktDateProps",[]),d(u,"lktStrictItem",!1),d(u,"lktDefaultValues",[]),u),_=(e=>(e.Auto="auto",e.Always="always",e.Lazy="lazy",e.Ever="ever",e))(_||{}),A=(e=>(e.Transform="transform",e.Height="height",e.Display="display",e))(A||{}),N=(e=>(e.Href="href",e.RouterLink="router-link",e.RouterLinkBack="router-link-back",e.Mail="mail",e.Tel="tel",e.Tab="tab",e.Download="download",e.Action="action",e.Legacy="",e))(N||{}),V=(e=>(e.None="",e.Field="field",e.Button="button",e.Anchor="anchor",e))(V||{}),$=(e=>(e.List="list",e.Inline="inline",e.Count="count",e))($||{}),H=(e=>(e.None="",e.Focus="focus",e.Blur="blur",e.Always="always",e))(H||{}),z=(e=>(e.MinStringLength="min-str",e.MinNumber="min-num",e.MaxStringLength="max-str",e.MaxNumber="max-num",e.Email="email",e.Empty="empty",e.EqualTo="equal-to",e.MinNumbers="min-numbers",e.MaxNumbers="max-numbers",e.MinChars="min-chars",e.MaxChars="max-chars",e.MinUpperChars="min-upper-chars",e.MaxUpperChars="max-upper-chars",e.MinLowerChars="min-lower-chars",e.MaxLowerChars="max-lower-chars",e.MinSpecialChars="min-special-chars",e.MaxSpecialChars="max-special-chars",e))(z||{}),O=(e=>(e.Ok="ok",e.Ko="ko",e.Info="info",e))(O||{}),R=(e=>(e.NotDefined="",e.Button="button",e))(R||{}),F=(e=>(e.Create="create",e.Update="update",e.Read="read",e))(F||{}),U=(e=>(e.Inline="inline",e.Modal="modal",e))(U||{}),q=(e=>(e.Top="top",e.Bottom="bottom",e))(q||{}),j=(e=>(e.Changed="changed",e.Always="always",e.Never="never",e))(j||{}),K=(e=>(e.Manual="manual",e.Auto="auto",e.Delay="delay",e))(K||{}),Y=(e=>(e.Toast="toast",e.Inline="inline",e))(Y||{}),G=(e=>(e.Pages="pages",e.PrevNext="prev-next",e.PagesPrevNext="pages-prev-next",e.PagesPrevNextFirstLast="pages-prev-next-first-last",e.LoadMore="load-more",e.Infinite="infinite",e))(G||{}),J=(e=>(e.None="",e.Incremental="incremental",e.Decremental="decremental",e))(J||{}),Q=(e=>(e.NotDefined="",e.Hidden="hidden",e.Integer="integer",e.Decimal="decimal",e.Auto="auto",e))(Q||{}),W=(e=>(e.Table="table",e.Item="item",e.Ul="ul",e.Ol="ol",e))(W||{}),X=(e=>(e[e.Auto=0]="Auto",e[e.PreferItem=1]="PreferItem",e[e.PreferCustomItem=2]="PreferCustomItem",e[e.PreferColumns=3]="PreferColumns",e))(X||{}),Z=(k=class extends I{constructor(n={}){super();d(this,"modelValue","");d(this,"id","");d(this,"useSession",!1);d(this,"cacheLifetime",5);d(this,"contentPad");d(this,"titles");this.feed(n)}},d(k,"lktDefaultValues",["modelValue","id","useSession","cacheLifetime","contentPad","titles"]),k),ee=(e=>(e.NotDefined="",e.ActionIcon="action-icon",e))(ee||{}),te=(e=>(e.Message="message",e.Button="button",e))(te||{}),re=(e=>(e.Left="left",e.Center="center",e.Right="right",e))(re||{}),ae=(e=>(e.Fixed="fixed",e.Absolute="absolute",e))(ae||{}),ne=(e=>(e.Top="top",e.Bottom="bottom",e.Center="center",e.ReferrerCenter="referrer-center",e))(ne||{}),oe=(e=>(e.Left="left",e.Right="right",e.Center="center",e.LeftCorner="left-corner",e.RightCorner="right-corner",e))(oe||{}),le=(e=>(e.Refresh="refresh",e.Close="close",e.ReOpen="reOpen",e.Exec="exec",e.Open="open",e))(le||{}),se=(e=>(e.Modal="modal",e.Confirm="confirm",e))(se||{}),ie=(e=>(e.Asc="asc",e.Desc="desc",e))(ie||{}),ce=(e=>(e.Create="create",e.Update="update",e.Edit="edit",e.Drop="drop",e.Sort="sort",e.SwitchEditMode="switch-edit-mode",e.InlineEdit="inline-edit",e.InlineCreate="inline-create",e.ModalCreate="modal-create",e.InlineCreateEver="inline-create-ever",e))(ce||{}),de=(e=>(e.Lazy="lazy",e.Ever="ever",e))(de||{});function ue(e){let n=new e,a={};if(!Array.isArray(e.lktDefaultValues))throw new Error("lktDefaultValues must be a keys array.");for(let c of e.lktDefaultValues)c in n&&(a[c]=n[c]);return a}const me={class:"lkt-tabs__list"},pe=["href","onClick"],fe=["innerHTML","onClick","href"],he={"data-lkt":"tab"},ke=t.defineComponent({__name:"LktTabs",props:t.mergeDefaults({modelValue:{},id:{},useSession:{type:Boolean},cacheLifetime:{},contentPad:{},titles:{}},ue(Z)),emits:["update:modelValue"],setup(e,{emit:n}){const{ctx:a}=t.getCurrentInstance(),c=t.useSlots(),o=e,b=n,m=t.ref("");if(o.useSession){o.id||console.warn("[LKT Tabs] You're trying to use session provided tabs without the required id. Please, add id attr");let r=T(o.id);r&&(m.value=r)}t.watch(()=>o.modelValue,(r,i)=>{typeof r=="string"&&(m.value=r)}),t.watch(m,(r,i)=>{b("update:modelValue"),t.nextTick(()=>{a.$forceUpdate()}),o.useSession&&E(a.id,r,o.cacheLifetime)});const h=t.computed(()=>[].join(" ")),g=t.computed(()=>{let r=[];return o.contentPad&&r.push(`padding: ${o.contentPad}`),r.join(";")}),f=t.computed(()=>{let r=[];for(let i in c)i.indexOf("tab-")!==-1&&r.push(i);return r}),be=t.computed(()=>{let r=[];for(let i in c)i.indexOf("title-")!==-1&&r.push(i);return r}),ge=t.computed(()=>{let r=[];for(let i in c)i.indexOf("li-")!==-1&&r.push(i);return r}),S=t.computed(()=>{let r={};for(let i in a.$refs)r[i]=a.$refs[i].hash;return r}),Se=t.computed(()=>Object.keys(f.value).length>1),v=(r="")=>S.value.length>0&&S.value[r]?"#"+S.value[r]:"#",x=(r="")=>o.titles&&o.titles[r]?o.titles[r]:r,Ce=()=>{a.$forceUpdate()};for(let r in f.value)m.value===""&&(m.value=r);return(r,i)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["lkt-tabs",h.value])},[t.withDirectives(t.createElementVNode("ul",me,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(f.value,l=>(t.openBlock(),t.createElementBlock("li",{key:l,class:t.normalizeClass(["lkt-tab",{"is-active":l===m.value}]),role:"presentation"},[be.value.includes(l)?(t.openBlock(),t.createElementBlock("a",{key:0,href:v(l),onClick:t.withModifiers(C=>m.value=l,["prevent"]),role:"tab"},[t.renderSlot(r.$slots,"title-"+l)],8,pe)):(t.openBlock(),t.createElementBlock("a",{key:1,innerHTML:x(l),onClick:t.withModifiers(C=>m.value=l,["prevent"]),href:v(l),role:"tab"},null,8,fe))],2))),128)),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(ge.value,(l,C)=>(t.openBlock(),t.createElementBlock("li",he,[t.renderSlot(r.$slots,"li-"+C)]))),256))],512),[[t.vShow,Se.value]]),t.createElementVNode("div",{class:"lkt-tabs__content",style:t.normalizeStyle(g.value)},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(f.value,l=>(t.openBlock(),t.createBlock(B,{ref_for:!0,ref:l,hash:l,id:l,name:x(l),"active-hash":m.value,onIsActive:Ce},{default:t.withCtx(()=>[t.renderSlot(r.$slots,"tab-"+l)]),_:2},1032,["hash","id","name","active-hash"]))),256))],4)],2))}});return{install:(e,n)=>{e.component("lkt-tabs",ke)}}});
