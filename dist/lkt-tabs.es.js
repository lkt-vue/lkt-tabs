var $ = Object.defineProperty;
var H = (e, a, r) => a in e ? $(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r;
var i = (e, a, r) => H(e, typeof a != "symbol" ? a + "" : a, r);
import { defineComponent as D, ref as y, computed as h, watch as L, createElementBlock as m, createCommentVNode as R, openBlock as d, renderSlot as v, mergeDefaults as z, getCurrentInstance as O, useSlots as F, nextTick as U, normalizeClass as T, withDirectives as q, createElementVNode as I, Fragment as k, renderList as w, withModifiers as A, vShow as j, normalizeStyle as K, createBlock as Q, withCtx as Y } from "vue";
import { getSessionStorage as G, setSessionStorage as J } from "lkt-session";
function W(e = 10) {
  let a = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = r.length;
  for (let n = 0; n < e; n++) a += r.charAt(Math.floor(Math.random() * s));
  return a;
}
function X(e) {
  return typeof e == "string";
}
const Z = ["id"], ee = /* @__PURE__ */ D({
  __name: "LktTab",
  props: {
    id: { type: String, default: "" },
    name: { type: String, required: !0 },
    hash: { type: String, default: "" },
    activeHash: { type: String, default: "" },
    isDisabled: { type: Boolean, default: !1 }
  },
  emits: ["is-active"],
  setup(e, { emit: a }) {
    const r = e, s = a, n = y(!1), b = y(W(8)), u = h(() => r.id ? r.id : X(r.name) && r.name.length > 0 ? r.name.toLowerCase().replace(/ /g, "-") : b.value), f = () => {
      n.value = r.activeHash === r.hash, s("is-active", n.value);
    };
    return L(() => r.activeHash, f), f(), (g, p) => n.value ? (d(), m("section", {
      key: 0,
      "data-lkt": "tab-content",
      id: u.value,
      role: "tabpanel"
    }, [
      v(g.$slots, "default")
    ], 8, Z)) : R("", !0);
  }
}), _ = (e) => `lkt-tabs.${window.location.host}${window.location.pathname}.${e}`, te = (e) => G(_(e)), ae = (e, a, r) => {
  J(_(e), a, r * 60);
};
var re = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(re || {}), ne = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(ne || {}), le = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], c, oe = (c = class {
  constructor(a) {
  }
  feed(a = {}, r = this) {
    if (typeof a == "object") for (let [s, n] of Object.entries(a)) r.assignProp(s, n);
  }
  assignProp(a, r) {
    if (!(le.includes(a) || c.lktExcludedProps.includes(a))) {
      if (c.lktDateProps.includes(a)) {
        this[a] = new Date(r);
        return;
      }
      this[a] = r;
    }
  }
}, i(c, "lktAllowUndefinedProps", []), i(c, "lktExcludedProps", []), i(c, "lktDateProps", []), i(c, "lktStrictItem", !1), i(c, "lktDefaultValues", []), c), se = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(se || {}), ie = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(ie || {}), ce = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(ce || {}), ue = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(ue || {}), de = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(de || {}), me = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(me || {}), he = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(he || {}), pe = ((e) => (e.NotDefined = "", e.Button = "button", e))(pe || {}), fe = ((e) => (e.Start = "start", e.End = "end", e))(fe || {}), ve = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(ve || {}), be = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(be || {}), ge = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ge || {}), Ce = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(Ce || {}), Se = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Se || {}), ke = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(ke || {}), we = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(we || {}), xe = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(xe || {}), ye = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(ye || {}), Le = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Le || {}), Me = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Me || {}), Pe = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e))(Pe || {}), Te = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Te || {}), x, Ie = (x = class extends oe {
  constructor(a = {}) {
    super();
    i(this, "modelValue", "");
    i(this, "id", "");
    i(this, "useSession", !1);
    i(this, "cacheLifetime", 5);
    i(this, "contentPad");
    i(this, "titles");
    this.feed(a);
  }
}, i(x, "lktDefaultValues", ["modelValue", "id", "useSession", "cacheLifetime", "contentPad", "titles"]), x), Ae = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Ae || {}), De = ((e) => (e.Message = "message", e.Button = "button", e))(De || {}), _e = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(_e || {}), Ee = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Ee || {}), Ne = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Ne || {}), Ve = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Ve || {}), Be = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Be || {}), $e = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))($e || {}), He = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(He || {}), Re = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Re || {}), ze = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(ze || {}), Oe = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Oe || {}), Fe = ((e) => (e.Quick = "quick", e.Full = "full", e))(Fe || {});
function Ue(e) {
  let a = new e(), r = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let s of e.lktDefaultValues) s in a && (r[s] = a[s]);
  return r;
}
const qe = { class: "lkt-tabs__list" }, je = ["href", "onClick"], Ke = ["innerHTML", "onClick", "href"], Qe = { "data-lkt": "tab" }, Ye = /* @__PURE__ */ D({
  __name: "LktTabs",
  props: /* @__PURE__ */ z({
    modelValue: {},
    id: {},
    useSession: { type: Boolean },
    cacheLifetime: {},
    contentPad: {},
    titles: {}
  }, Ue(Ie)),
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: a }) {
    const { ctx: r } = O(), s = F(), n = e, b = a, u = y("");
    if (n.useSession) {
      n.id || console.warn("[LKT Tabs] You're trying to use session provided tabs without the required id. Please, add id attr");
      let t = te(n.id);
      t && (u.value = t);
    }
    L(() => n.modelValue, (t, o) => {
      typeof t == "string" && (u.value = t);
    }), L(u, (t, o) => {
      b("update:modelValue"), U(() => {
        r.$forceUpdate();
      }), n.useSession && ae(r.id, t, n.cacheLifetime);
    });
    const f = h(() => [].join(" ")), g = h(() => {
      let t = [];
      return n.contentPad && t.push(`padding: ${n.contentPad}`), t.join(";");
    }), p = h(() => {
      let t = [];
      for (let o in s) o.indexOf("tab-") !== -1 && t.push(o);
      return t;
    }), E = h(() => {
      let t = [];
      for (let o in s) o.indexOf("title-") !== -1 && t.push(o);
      return t;
    }), N = h(() => {
      let t = [];
      for (let o in s) o.indexOf("li-") !== -1 && t.push(o);
      return t;
    }), C = h(() => {
      let t = {};
      for (let o in r.$refs)
        t[o] = r.$refs[o].hash;
      return t;
    }), V = h(() => Object.keys(p.value).length > 1), M = (t = "") => C.value.length > 0 && C.value[t] ? "#" + C.value[t] : "#", P = (t = "") => n.titles && n.titles[t] ? n.titles[t] : t, B = () => {
      r.$forceUpdate();
    };
    for (let t in p.value)
      u.value === "" && (u.value = t);
    return (t, o) => (d(), m("div", {
      class: T(["lkt-tabs", f.value])
    }, [
      q(I("ul", qe, [
        (d(!0), m(k, null, w(p.value, (l) => (d(), m("li", {
          key: l,
          class: T(["lkt-tab", { "is-active": l === u.value }]),
          role: "presentation"
        }, [
          E.value.includes(l) ? (d(), m("a", {
            key: 0,
            href: M(l),
            onClick: A((S) => u.value = l, ["prevent"]),
            role: "tab"
          }, [
            v(t.$slots, "title-" + l)
          ], 8, je)) : (d(), m("a", {
            key: 1,
            innerHTML: P(l),
            onClick: A((S) => u.value = l, ["prevent"]),
            href: M(l),
            role: "tab"
          }, null, 8, Ke))
        ], 2))), 128)),
        (d(!0), m(k, null, w(N.value, (l, S) => (d(), m("li", Qe, [
          v(t.$slots, "li-" + S)
        ]))), 256))
      ], 512), [
        [j, V.value]
      ]),
      I("div", {
        class: "lkt-tabs__content",
        style: K(g.value)
      }, [
        (d(!0), m(k, null, w(p.value, (l) => (d(), Q(ee, {
          ref_for: !0,
          ref: l,
          hash: l,
          id: l,
          name: P(l),
          "active-hash": u.value,
          onIsActive: B
        }, {
          default: Y(() => [
            v(t.$slots, "tab-" + l)
          ]),
          _: 2
        }, 1032, ["hash", "id", "name", "active-hash"]))), 256))
      ], 4)
    ], 2));
  }
}), Xe = {
  install: (e, a) => {
    e.component("lkt-tabs", Ye);
  }
};
export {
  Xe as default
};
