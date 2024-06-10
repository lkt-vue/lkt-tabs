import { nextTick } from 'vue';
import { LktObject } from "lkt-ts-interfaces";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            id: string;
            modelValue: string | number;
            useSession: boolean;
            cacheLifetime: number;
            contentPad: string;
            palette: string;
            titles: LktObject;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
            modelValue: string | number;
            id?: string | undefined;
            useSession?: boolean | undefined;
            cacheLifetime?: number | undefined;
            contentPad?: string | undefined;
            palette?: string | undefined;
            titles?: LktObject | undefined;
        }>, {
            modelValue: string;
            id: string;
            useSession: boolean;
            cacheLifetime: number;
            contentPad: string;
            palette: string;
            titles: () => {};
        }>>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "id" | "modelValue" | "useSession" | "cacheLifetime" | "contentPad" | "palette" | "titles">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
            modelValue: string | number;
            id?: string | undefined;
            useSession?: boolean | undefined;
            cacheLifetime?: number | undefined;
            contentPad?: string | undefined;
            palette?: string | undefined;
            titles?: LktObject | undefined;
        }>, {
            modelValue: string;
            id: string;
            useSession: boolean;
            cacheLifetime: number;
            contentPad: string;
            palette: string;
            titles: () => {};
        }>>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            id: string;
            modelValue: string | number;
            useSession: boolean;
            cacheLifetime: number;
            contentPad: string;
            palette: string;
            titles: LktObject;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
        modelValue: string | number;
        id?: string | undefined;
        useSession?: boolean | undefined;
        cacheLifetime?: number | undefined;
        contentPad?: string | undefined;
        palette?: string | undefined;
        titles?: LktObject | undefined;
    }>, {
        modelValue: string;
        id: string;
        useSession: boolean;
        cacheLifetime: number;
        contentPad: string;
        palette: string;
        titles: () => {};
    }>>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number;
    id?: string | undefined;
    useSession?: boolean | undefined;
    cacheLifetime?: number | undefined;
    contentPad?: string | undefined;
    palette?: string | undefined;
    titles?: LktObject | undefined;
}>, {
    modelValue: string;
    id: string;
    useSession: boolean;
    cacheLifetime: number;
    contentPad: string;
    palette: string;
    titles: () => {};
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    id: string;
    modelValue: string | number;
    useSession: boolean;
    cacheLifetime: number;
    contentPad: string;
    palette: string;
    titles: LktObject;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<string, {}> & Record<string, {}> & Record<string, {}>;
});
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
