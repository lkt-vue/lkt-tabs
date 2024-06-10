import { defineComponent as H, ref as g, computed as i, watch as $, openBlock as l, createElementBlock as r, unref as u, renderSlot as h, createCommentVNode as P, getCurrentInstance as q, normalizeClass as C, withDirectives as F, createElementVNode as y, Fragment as _, renderList as b, withModifiers as V, vShow as M, normalizeStyle as x, createBlock as z, withCtx as D } from "vue";
import { generateRandomString as E, isString as K, getSlots as S } from "lkt-tools";
import { getSessionStorage as U, setSessionStorage as R } from "lkt-session";
const B = (a) => `lkt-tabs.${window.location.host}${window.location.pathname}.${a}`, Y = (a) => U(B(a)), G = (a, c, e) => {
  R(B(a), c, e * 60);
}, J = ["id"], Q = {
  name: "LktTab",
  inheritAttrs: !1,
  customOptions: {}
}, A = /* @__PURE__ */ H({
  ...Q,
  props: {
    id: { type: String, default: "" },
    name: { type: String, required: !0 },
    hash: { type: String, default: "" },
    activeHash: { type: String, default: "" },
    isDisabled: { type: Boolean, default: !1 }
  },
  emits: ["is-active"],
  setup(a, { emit: c }) {
    const e = a, n = g(!1), o = g(E(8)), m = i(() => e.id ? e.id : K(e.name) && e.name.length > 0 ? e.name.toLowerCase().replace(/ /g, "-") : o.value), p = () => {
      n.value = e.activeHash === e.hash, c("is-active", n.value);
    };
    return $(() => e.activeHash, p), p(), (d, T) => n.value ? (l(), r("section", {
      key: 0,
      "data-lkt": "tab-content",
      id: u(m),
      role: "tabpanel"
    }, [
      h(d.$slots, "default")
    ], 8, J)) : P("", !0);
  }
}), W = { class: "lkt-tabs__list" }, X = ["href", "onClick"], Z = ["innerHTML", "onClick", "href"], tt = { "data-lkt": "tab" }, et = {
  name: "LktTabs",
  inheritAttrs: !1,
  customOptions: {},
  components: { LktTab: A }
}, st = /* @__PURE__ */ H({
  ...et,
  props: {
    id: { type: String, default: "" },
    modelValue: { type: [String, Number], default: "" },
    useSession: { type: Boolean, default: !1 },
    cacheLifetime: { type: Number, default: 5 },
    contentPad: { type: String, default: void 0 },
    palette: { type: String, default: void 0 },
    titles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: c }) {
    const e = a, { ctx: n } = q(), o = g("");
    if (e.useSession) {
      n.id || console.warn("[LKT Tabs] You're trying to use session provided tabs without the required id. Please, add id attr");
      let t = Y(n.id);
      t && (o.value = t);
    }
    $(() => e.modelValue, (t, f) => {
      typeof t == "string" && (o.value = t);
    }), $(o, (t, f) => {
      c("update:modelValue"), n.$nextTick(() => {
        n.$forceUpdate();
      }), e.useSession && G(n.id, t, e.cacheLifetime);
    });
    const m = i(() => {
      let t = [];
      return e.palette && t.push(`lkt-tabs--${e.palette}`), t.join(" ");
    }), p = i(() => {
      let t = [];
      return e.contentPad && t.push(`padding: ${e.contentPad}`), t.join(";");
    }), d = i(() => S(n.$slots, "tab-")), T = i(() => S(n.$slots, "title-")), I = i(() => S(n.$slots, "li-")), v = i(() => {
      let t = {};
      for (let f in n.$refs)
        t[f] = n.$refs[f].hash;
      return t;
    }), j = i(() => Object.keys(d.value).length > 1), k = (t = "") => v.value.length > 0 && v.value[t] ? "#" + v.value[t] : "#", w = (t = "") => e.titles && e.titles[t] ? e.titles[t] : t, N = () => {
      n.$forceUpdate();
    };
    for (let t in d.value)
      o.value === "" && (o.value = t);
    return (t, f) => (l(), r("div", {
      class: C(["lkt-tabs", u(m)])
    }, [
      F(y("ul", W, [
        (l(!0), r(_, null, b(u(d), (L, s) => (l(), r("li", {
          key: s,
          class: C(["lkt-tab", { "is-active": s === o.value }]),
          role: "presentation"
        }, [
          u(T)[s] ? (l(), r("a", {
            key: 0,
            href: k(s),
            onClick: V((O) => o.value = s, ["prevent"]),
            role: "tab"
          }, [
            h(t.$slots, "title-" + s)
          ], 8, X)) : (l(), r("a", {
            key: 1,
            innerHTML: w(s),
            onClick: V((O) => o.value = s, ["prevent"]),
            href: k(s),
            role: "tab"
          }, null, 8, Z))
        ], 2))), 128)),
        (l(!0), r(_, null, b(u(I), (L, s) => (l(), r("li", tt, [
          h(t.$slots, "li-" + s)
        ]))), 256))
      ], 512), [
        [M, u(j)]
      ]),
      y("div", {
        class: "lkt-tabs__content",
        style: x(u(p))
      }, [
        (l(!0), r(_, null, b(u(d), (L, s) => (l(), z(A, {
          ref_for: !0,
          ref: s,
          hash: s,
          id: s,
          name: w(s),
          "active-hash": o.value,
          onIsActive: N
        }, {
          default: D(() => [
            h(t.$slots, "tab-" + s)
          ]),
          _: 2
        }, 1032, ["hash", "id", "name", "active-hash"]))), 256))
      ], 4)
    ], 2));
  }
});
const lt = {
  install: (a, c) => {
    a.component("lkt-tabs", st);
  }
};
export {
  lt as default
};
