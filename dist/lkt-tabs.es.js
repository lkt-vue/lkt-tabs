var B = Object.defineProperty;
var H = (e, r, a) => r in e ? B(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a;
var i = (e, r, a) => H(e, typeof r != "symbol" ? r + "" : r, a);
import { defineComponent as _, ref as y, computed as m, watch as L, createElementBlock as h, createCommentVNode as O, openBlock as d, renderSlot as v, mergeDefaults as R, getCurrentInstance as z, useSlots as U, nextTick as F, normalizeClass as T, withDirectives as j, createElementVNode as D, Fragment as k, renderList as w, withModifiers as I, vShow as q, normalizeStyle as K, createBlock as Y, withCtx as G } from "vue";
import { getSessionStorage as J, setSessionStorage as Q } from "lkt-session";
function W(e = 10) {
  let r = "";
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = a.length;
  for (let n = 0; n < e; n++)
    r += a.charAt(Math.floor(Math.random() * o));
  return r;
}
function X(e) {
  return typeof e == "string";
}
const Z = ["id"], ee = /* @__PURE__ */ _({
  __name: "LktTab",
  props: {
    id: { type: String, default: "" },
    name: { type: String, required: !0 },
    hash: { type: String, default: "" },
    activeHash: { type: String, default: "" },
    isDisabled: { type: Boolean, default: !1 }
  },
  emits: ["is-active"],
  setup(e, { emit: r }) {
    const a = e, o = r, n = y(!1), b = y(W(8)), u = m(() => a.id ? a.id : X(a.name) && a.name.length > 0 ? a.name.toLowerCase().replace(/ /g, "-") : b.value), p = () => {
      n.value = a.activeHash === a.hash, o("is-active", n.value);
    };
    return L(() => a.activeHash, p), p(), (g, f) => n.value ? (d(), h("section", {
      key: 0,
      "data-lkt": "tab-content",
      id: u.value,
      role: "tabpanel"
    }, [
      v(g.$slots, "default")
    ], 8, Z)) : O("", !0);
  }
}), A = (e) => `lkt-tabs.${window.location.host}${window.location.pathname}.${e}`, te = (e) => J(A(e)), re = (e, r, a) => {
  Q(A(e), r, a * 60);
};
var ae = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e))(ae || {}), ne = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(ne || {}), se = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], c, le = (c = class {
  constructor(r) {
  }
  feed(r = {}, a = this) {
    if (typeof r == "object") for (let [o, n] of Object.entries(r)) a.assignProp(o, n);
  }
  assignProp(r, a) {
    if (!(se.includes(r) || c.lktExcludedProps.includes(r))) {
      if (c.lktDateProps.includes(r)) {
        this[r] = new Date(a);
        return;
      }
      this[r] = a;
    }
  }
}, i(c, "lktAllowUndefinedProps", []), i(c, "lktExcludedProps", []), i(c, "lktDateProps", []), i(c, "lktStrictItem", !1), i(c, "lktDefaultValues", []), c), oe = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(oe || {}), ie = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(ie || {}), ce = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(ce || {}), ue = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(ue || {}), de = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(de || {}), he = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(he || {}), me = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(me || {}), fe = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(fe || {}), pe = ((e) => (e.NotDefined = "", e.Button = "button", e))(pe || {}), ve = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(ve || {}), be = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(be || {}), ge = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ge || {}), Se = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(Se || {}), Ce = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(Ce || {}), ke = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(ke || {}), we = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(we || {}), xe = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(xe || {}), ye = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(ye || {}), Le = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e))(Le || {}), Pe = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Pe || {}), x, Me = (x = class extends le {
  constructor(r = {}) {
    super();
    i(this, "modelValue", "");
    i(this, "id", "");
    i(this, "useSession", !1);
    i(this, "cacheLifetime", 5);
    i(this, "contentPad");
    i(this, "titles");
    this.feed(r);
  }
}, i(x, "lktDefaultValues", ["modelValue", "id", "useSession", "cacheLifetime", "contentPad", "titles"]), x), Te = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Te || {}), De = ((e) => (e.Message = "message", e.Button = "button", e))(De || {}), Ie = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Ie || {}), _e = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(_e || {}), Ae = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Ae || {}), Ee = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Ee || {}), Ne = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ne || {}), $e = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))($e || {}), Ve = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Ve || {}), Be = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Be || {}), He = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(He || {});
function Oe(e) {
  let r = new e(), a = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let o of e.lktDefaultValues) o in r && (a[o] = r[o]);
  return a;
}
const Re = { class: "lkt-tabs__list" }, ze = ["href", "onClick"], Ue = ["innerHTML", "onClick", "href"], Fe = { "data-lkt": "tab" }, je = /* @__PURE__ */ _({
  __name: "LktTabs",
  props: /* @__PURE__ */ R({
    modelValue: {},
    id: {},
    useSession: { type: Boolean },
    cacheLifetime: {},
    contentPad: {},
    titles: {}
  }, Oe(Me)),
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: r }) {
    const { ctx: a } = z(), o = U(), n = e, b = r, u = y("");
    if (n.useSession) {
      n.id || console.warn("[LKT Tabs] You're trying to use session provided tabs without the required id. Please, add id attr");
      let t = te(n.id);
      t && (u.value = t);
    }
    L(() => n.modelValue, (t, l) => {
      typeof t == "string" && (u.value = t);
    }), L(u, (t, l) => {
      b("update:modelValue"), F(() => {
        a.$forceUpdate();
      }), n.useSession && re(a.id, t, n.cacheLifetime);
    });
    const p = m(() => [].join(" ")), g = m(() => {
      let t = [];
      return n.contentPad && t.push(`padding: ${n.contentPad}`), t.join(";");
    }), f = m(() => {
      let t = [];
      for (let l in o) l.indexOf("tab-") !== -1 && t.push(l);
      return t;
    }), E = m(() => {
      let t = [];
      for (let l in o) l.indexOf("title-") !== -1 && t.push(l);
      return t;
    }), N = m(() => {
      let t = [];
      for (let l in o) l.indexOf("li-") !== -1 && t.push(l);
      return t;
    }), S = m(() => {
      let t = {};
      for (let l in a.$refs)
        t[l] = a.$refs[l].hash;
      return t;
    }), $ = m(() => Object.keys(f.value).length > 1), P = (t = "") => S.value.length > 0 && S.value[t] ? "#" + S.value[t] : "#", M = (t = "") => n.titles && n.titles[t] ? n.titles[t] : t, V = () => {
      a.$forceUpdate();
    };
    for (let t in f.value)
      u.value === "" && (u.value = t);
    return (t, l) => (d(), h("div", {
      class: T(["lkt-tabs", p.value])
    }, [
      j(D("ul", Re, [
        (d(!0), h(k, null, w(f.value, (s) => (d(), h("li", {
          key: s,
          class: T(["lkt-tab", { "is-active": s === u.value }]),
          role: "presentation"
        }, [
          E.value.includes(s) ? (d(), h("a", {
            key: 0,
            href: P(s),
            onClick: I((C) => u.value = s, ["prevent"]),
            role: "tab"
          }, [
            v(t.$slots, "title-" + s)
          ], 8, ze)) : (d(), h("a", {
            key: 1,
            innerHTML: M(s),
            onClick: I((C) => u.value = s, ["prevent"]),
            href: P(s),
            role: "tab"
          }, null, 8, Ue))
        ], 2))), 128)),
        (d(!0), h(k, null, w(N.value, (s, C) => (d(), h("li", Fe, [
          v(t.$slots, "li-" + C)
        ]))), 256))
      ], 512), [
        [q, $.value]
      ]),
      D("div", {
        class: "lkt-tabs__content",
        style: K(g.value)
      }, [
        (d(!0), h(k, null, w(f.value, (s) => (d(), Y(ee, {
          ref_for: !0,
          ref: s,
          hash: s,
          id: s,
          name: M(s),
          "active-hash": u.value,
          onIsActive: V
        }, {
          default: G(() => [
            v(t.$slots, "tab-" + s)
          ]),
          _: 2
        }, 1032, ["hash", "id", "name", "active-hash"]))), 256))
      ], 4)
    ], 2));
  }
}), Ge = {
  install: (e, r) => {
    e.component("lkt-tabs", je);
  }
};
export {
  Ge as default
};
