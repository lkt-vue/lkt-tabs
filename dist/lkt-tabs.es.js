import { defineComponent as H, ref as $, computed as c, watch as k, createElementBlock as u, createCommentVNode as A, openBlock as i, renderSlot as v, getCurrentInstance as P, useSlots as j, nextTick as q, normalizeClass as C, withDirectives as y, createElementVNode as L, Fragment as S, renderList as g, withModifiers as V, vShow as F, normalizeStyle as z, createBlock as D, withCtx as E } from "vue";
import { getSessionStorage as K, setSessionStorage as N } from "lkt-session";
function U(a = 10) {
  let r = "";
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = t.length;
  for (let s = 0; s < a; s++)
    r += t.charAt(Math.floor(Math.random() * d));
  return r;
}
function Y(a) {
  return typeof a == "string";
}
const G = ["id"], J = /* @__PURE__ */ H({
  __name: "LktTab",
  props: {
    id: { type: String, default: "" },
    name: { type: String, required: !0 },
    hash: { type: String, default: "" },
    activeHash: { type: String, default: "" },
    isDisabled: { type: Boolean, default: !1 }
  },
  emits: ["is-active"],
  setup(a, { emit: r }) {
    const t = a, d = r, s = $(!1), p = $(U(8)), o = c(() => t.id ? t.id : Y(t.name) && t.name.length > 0 ? t.name.toLowerCase().replace(/ /g, "-") : p.value), h = () => {
      s.value = t.activeHash === t.hash, d("is-active", s.value);
    };
    return k(() => t.activeHash, h), h(), (m, f) => s.value ? (i(), u("section", {
      key: 0,
      "data-lkt": "tab-content",
      id: o.value,
      role: "tabpanel"
    }, [
      v(m.$slots, "default")
    ], 8, G)) : A("", !0);
  }
}), B = (a) => `lkt-tabs.${window.location.host}${window.location.pathname}.${a}`, Q = (a) => K(B(a)), R = (a, r, t) => {
  N(B(a), r, t * 60);
}, W = { class: "lkt-tabs__list" }, X = ["href", "onClick"], Z = ["innerHTML", "onClick", "href"], ee = { "data-lkt": "tab" }, te = /* @__PURE__ */ H({
  __name: "LktTabs",
  props: {
    modelValue: { default: "" },
    id: { default: "" },
    useSession: { type: Boolean, default: !1 },
    cacheLifetime: { default: 5 },
    contentPad: { default: "" },
    titles: { default: () => ({}) }
  },
  emits: [
    "update:modelValue"
  ],
  setup(a, { emit: r }) {
    const { ctx: t } = P(), d = j(), s = a, p = r, o = $("");
    if (s.useSession) {
      s.id || console.warn("[LKT Tabs] You're trying to use session provided tabs without the required id. Please, add id attr");
      let e = Q(s.id);
      e && (o.value = e);
    }
    k(() => s.modelValue, (e, l) => {
      typeof e == "string" && (o.value = e);
    }), k(o, (e, l) => {
      p("update:modelValue"), q(() => {
        t.$forceUpdate();
      }), s.useSession && R(t.id, e, s.cacheLifetime);
    });
    const h = c(() => [].join(" ")), m = c(() => {
      let e = [];
      return s.contentPad && e.push(`padding: ${s.contentPad}`), e.join(";");
    }), f = c(() => {
      let e = [];
      for (let l in d) l.indexOf("tab-") !== -1 && e.push(l);
      return e;
    }), x = c(() => {
      let e = [];
      for (let l in d) l.indexOf("title-") !== -1 && e.push(l);
      return e;
    }), I = c(() => {
      let e = [];
      for (let l in d) l.indexOf("li-") !== -1 && e.push(l);
      return e;
    }), b = c(() => {
      let e = {};
      for (let l in t.$refs)
        e[l] = t.$refs[l].hash;
      return e;
    }), M = c(() => Object.keys(f.value).length > 1), T = (e = "") => b.value.length > 0 && b.value[e] ? "#" + b.value[e] : "#", w = (e = "") => s.titles && s.titles[e] ? s.titles[e] : e, O = () => {
      t.$forceUpdate();
    };
    for (let e in f.value)
      o.value === "" && (o.value = e);
    return (e, l) => (i(), u("div", {
      class: C(["lkt-tabs", h.value])
    }, [
      y(L("ul", W, [
        (i(!0), u(S, null, g(f.value, (n) => (i(), u("li", {
          key: n,
          class: C(["lkt-tab", { "is-active": n === o.value }]),
          role: "presentation"
        }, [
          x.value.includes(n) ? (i(), u("a", {
            key: 0,
            href: T(n),
            onClick: V((_) => o.value = n, ["prevent"]),
            role: "tab"
          }, [
            v(e.$slots, "title-" + n)
          ], 8, X)) : (i(), u("a", {
            key: 1,
            innerHTML: w(n),
            onClick: V((_) => o.value = n, ["prevent"]),
            href: T(n),
            role: "tab"
          }, null, 8, Z))
        ], 2))), 128)),
        (i(!0), u(S, null, g(I.value, (n, _) => (i(), u("li", ee, [
          v(e.$slots, "li-" + _)
        ]))), 256))
      ], 512), [
        [F, M.value]
      ]),
      L("div", {
        class: "lkt-tabs__content",
        style: z(m.value)
      }, [
        (i(!0), u(S, null, g(f.value, (n) => (i(), D(J, {
          ref_for: !0,
          ref: n,
          hash: n,
          id: n,
          name: w(n),
          "active-hash": o.value,
          onIsActive: O
        }, {
          default: E(() => [
            v(e.$slots, "tab-" + n)
          ]),
          _: 2
        }, 1032, ["hash", "id", "name", "active-hash"]))), 256))
      ], 4)
    ], 2));
  }
}), ae = {
  install: (a, r) => {
    a.component("lkt-tabs", te);
  }
};
export {
  ae as default
};
