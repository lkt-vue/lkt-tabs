import { defineComponent as B, ref as g, computed as c, watch as $, openBlock as r, createElementBlock as i, unref as u, renderSlot as p, createCommentVNode as P, getCurrentInstance as q, nextTick as x, normalizeClass as L, withDirectives as F, createElementVNode as V, Fragment as b, renderList as _, withModifiers as H, vShow as O, normalizeStyle as z, createBlock as D, withCtx as E } from "vue";
import { getSessionStorage as K, setSessionStorage as N } from "lkt-session";
function U(a = 10) {
  let l = "";
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = t.length;
  for (let n = 0; n < a; n++)
    l += t.charAt(Math.floor(Math.random() * s));
  return l;
}
function Y(a) {
  return typeof a == "string";
}
const G = ["id"], J = /* @__PURE__ */ B({
  __name: "LktTab",
  props: {
    id: { type: String, default: "" },
    name: { type: String, required: !0 },
    hash: { type: String, default: "" },
    activeHash: { type: String, default: "" },
    isDisabled: { type: Boolean, default: !1 }
  },
  emits: ["is-active"],
  setup(a, { emit: l }) {
    const t = a, s = g(!1), n = g(U(8)), m = c(() => t.id ? t.id : Y(t.name) && t.name.length > 0 ? t.name.toLowerCase().replace(/ /g, "-") : n.value), h = () => {
      s.value = t.activeHash === t.hash, l("is-active", s.value);
    };
    return $(() => t.activeHash, h), h(), (d, T) => s.value ? (r(), i("section", {
      key: 0,
      "data-lkt": "tab-content",
      id: u(m),
      role: "tabpanel"
    }, [
      p(d.$slots, "default")
    ], 8, G)) : P("", !0);
  }
});
function S(a, l) {
  const t = {};
  let s = {};
  if (a && (s = Object.assign(s, a)), l) {
    for (const n in s)
      n.indexOf(l) === 0 && (t[n.replace(l, "")] = s[n]);
    return t;
  }
  for (const n in s)
    t[n] = s[n];
  return t;
}
const I = (a) => `lkt-tabs.${window.location.host}${window.location.pathname}.${a}`, Q = (a) => K(I(a)), R = (a, l, t) => {
  N(I(a), l, t * 60);
}, W = { class: "lkt-tabs__list" }, X = ["href", "onClick"], Z = ["innerHTML", "onClick", "href"], tt = { "data-lkt": "tab" }, et = /* @__PURE__ */ B({
  __name: "LktTabs",
  props: {
    modelValue: { default: "" },
    id: { default: "" },
    useSession: { type: Boolean, default: !1 },
    cacheLifetime: { default: 5 },
    contentPad: { default: "" },
    palette: { default: "" },
    titles: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: l }) {
    const t = a, { ctx: s } = q(), n = g("");
    if (t.useSession) {
      t.id || console.warn("[LKT Tabs] You're trying to use session provided tabs without the required id. Please, add id attr");
      let e = Q(t.id);
      e && (n.value = e);
    }
    $(() => t.modelValue, (e, f) => {
      typeof e == "string" && (n.value = e);
    }), $(n, (e, f) => {
      l("update:modelValue"), x(() => {
        s.$forceUpdate();
      }), t.useSession && R(s.id, e, t.cacheLifetime);
    });
    const m = c(() => {
      let e = [];
      return t.palette && e.push(`lkt-tabs--${t.palette}`), e.join(" ");
    }), h = c(() => {
      let e = [];
      return t.contentPad && e.push(`padding: ${t.contentPad}`), e.join(";");
    }), d = c(() => S(s.$slots, "tab-")), T = c(() => S(s.$slots, "title-")), M = c(() => S(s.$slots, "li-")), v = c(() => {
      let e = {};
      for (let f in s.$refs)
        e[f] = s.$refs[f].hash;
      return e;
    }), j = c(() => Object.keys(d.value).length > 1), k = (e = "") => v.value.length > 0 && v.value[e] ? "#" + v.value[e] : "#", w = (e = "") => t.titles && t.titles[e] ? t.titles[e] : e, y = () => {
      s.$forceUpdate();
    };
    for (let e in d.value)
      n.value === "" && (n.value = e);
    return (e, f) => (r(), i("div", {
      class: L(["lkt-tabs", u(m)])
    }, [
      F(V("ul", W, [
        (r(!0), i(b, null, _(u(d), (C, o) => (r(), i("li", {
          key: o,
          class: L(["lkt-tab", { "is-active": o === n.value }]),
          role: "presentation"
        }, [
          u(T)[o] ? (r(), i("a", {
            key: 0,
            href: k(o),
            onClick: H((A) => n.value = o, ["prevent"]),
            role: "tab"
          }, [
            p(e.$slots, "title-" + o)
          ], 8, X)) : (r(), i("a", {
            key: 1,
            innerHTML: w(o),
            onClick: H((A) => n.value = o, ["prevent"]),
            href: k(o),
            role: "tab"
          }, null, 8, Z))
        ], 2))), 128)),
        (r(!0), i(b, null, _(u(M), (C, o) => (r(), i("li", tt, [
          p(e.$slots, "li-" + o)
        ]))), 256))
      ], 512), [
        [O, u(j)]
      ]),
      V("div", {
        class: "lkt-tabs__content",
        style: z(u(h))
      }, [
        (r(!0), i(b, null, _(u(d), (C, o) => (r(), D(J, {
          ref_for: !0,
          ref: o,
          hash: o,
          id: o,
          name: w(o),
          "active-hash": n.value,
          onIsActive: y
        }, {
          default: E(() => [
            p(e.$slots, "tab-" + o)
          ]),
          _: 2
        }, 1032, ["hash", "id", "name", "active-hash"]))), 256))
      ], 4)
    ], 2));
  }
});
const at = {
  install: (a, l) => {
    a.component("lkt-tabs", et);
  }
};
export {
  at as default
};
