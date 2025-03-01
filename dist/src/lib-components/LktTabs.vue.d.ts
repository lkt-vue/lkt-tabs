import LktTab from "../components/LktTab.vue";
import { LktObject, TabsConfig } from "lkt-vue-kernel";
declare const Value: import("vue").Ref<string, string>;
declare const classes: import("vue").ComputedRef<string>;
declare const contentStyles: import("vue").ComputedRef<string>;
declare const tabsSlots: import("vue").ComputedRef<string[]>;
declare const titlesSlots: import("vue").ComputedRef<string[]>;
declare const liSlots: import("vue").ComputedRef<string[]>;
declare const displayButtons: import("vue").ComputedRef<boolean>;
declare const getTabHref: (key?: string | number) => string;
declare const getTabTitle: (key?: string | number) => any;
declare const refresh: () => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_2: string, __VLS_3: {}, __VLS_6: string, __VLS_7: {}, __VLS_16: string, __VLS_17: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
} & {
    [K in NonNullable<typeof __VLS_6>]?: (props: typeof __VLS_7) => any;
} & {
    [K in NonNullable<typeof __VLS_16>]?: (props: typeof __VLS_17) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<TabsConfig, {
    LktTab: typeof LktTab;
    Value: typeof Value;
    classes: typeof classes;
    contentStyles: typeof contentStyles;
    tabsSlots: typeof tabsSlots;
    titlesSlots: typeof titlesSlots;
    liSlots: typeof liSlots;
    displayButtons: typeof displayButtons;
    getTabHref: typeof getTabHref;
    getTabTitle: typeof getTabTitle;
    refresh: typeof refresh;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<TabsConfig> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    id: string;
    modelValue: string | number;
    useSession: boolean;
    cacheLifetime: number;
    contentPad: string;
    titles: LktObject;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<TabsConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<TabsConfig> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    id: string;
    modelValue: string | number;
    useSession: boolean;
    cacheLifetime: number;
    contentPad: string;
    titles: LktObject;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
