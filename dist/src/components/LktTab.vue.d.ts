declare const isActive: import("vue").Ref<boolean, boolean>;
declare const computedId: import("vue").ComputedRef<string>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    default?: (props: typeof __VLS_1) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    hash: {
        type: StringConstructor;
        default: string;
    };
    activeHash: {
        type: StringConstructor;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    isActive: typeof isActive;
    computedId: typeof computedId;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "is-active": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    hash: {
        type: StringConstructor;
        default: string;
    };
    activeHash: {
        type: StringConstructor;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onIs-active"?: ((...args: any[]) => any) | undefined;
}>, {
    id: string;
    hash: string;
    activeHash: string;
    isDisabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    hash: {
        type: StringConstructor;
        default: string;
    };
    activeHash: {
        type: StringConstructor;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "is-active": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    hash: {
        type: StringConstructor;
        default: string;
    };
    activeHash: {
        type: StringConstructor;
        default: string;
    };
    isDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onIs-active"?: ((...args: any[]) => any) | undefined;
}>, {
    id: string;
    hash: string;
    activeHash: string;
    isDisabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
