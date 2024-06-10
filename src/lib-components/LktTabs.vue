<script lang="ts" setup>
import LktTab from "../components/LktTab.vue";
import {computed, getCurrentInstance, nextTick, ref, watch} from 'vue';
import {getSlots} from "lkt-vue-tools";
import {loadSelectedTabFromSession, setSelectedTabFromSession} from "../functions/functions";
import {LktObject} from "lkt-ts-interfaces";

const {ctx: _this}: any = getCurrentInstance();

const props = withDefaults(defineProps<{
    modelValue: string|number,
    id?: string,
    useSession?: boolean,
    cacheLifetime?: number,
    contentPad?: string,
    palette?: string,
    titles?: LktObject,
}>(), {
    modelValue: '',
    id: '',
    useSession: false,
    cacheLifetime: 5,
    contentPad: '',
    palette: '',
    titles: () => ({}),
});

const emit = defineEmits(['update:modelValue'])

const Value = ref('');

if (props.useSession) {
    if (!props.id) {
        console.warn('[LKT Tabs] You\'re trying to use session provided tabs without the required id. Please, add id attr');
    }

    let sessionVal = loadSelectedTabFromSession(props.id);
    if (sessionVal) Value.value = sessionVal;
}

watch(() => props.modelValue, (newVal, oldVal) => {
    if (typeof newVal === "string") {
        Value.value = newVal;
    }
})

watch(Value, (newVal, oldVal) => {
    emit('update:modelValue');
    nextTick(() => {
        _this.$forceUpdate()
    });
    if (props.useSession) {
        setSelectedTabFromSession(_this.id, newVal, props.cacheLifetime);
    }
})

const classes = computed(() => {
    let r = [];
    if (!!props.palette) r.push(`lkt-tabs--${props.palette}`);
    return r.join(' ');
});

const contentStyles = computed(() => {
    let r = [];
    if (!!props.contentPad) r.push(`padding: ${props.contentPad}`);
    return r.join(';');
});

const tabsSlots = computed(() => {
    return getSlots(_this.$slots, 'tab-');
});

const titlesSlots = computed(() => {
    return getSlots(_this.$slots, 'title-');
});

const liSlots = computed(() => {
    return getSlots(_this.$slots, 'li-');
});

const tabsHref = computed(() => {
    let r: LktObject = {};
    for (let k in _this.$refs) {
        r[k] = _this.$refs[k].hash;
    }

    return r;
});

const displayButtons = computed(() => {
    return Object.keys(tabsSlots.value).length > 1;
});

const getTabHref = (key: string|number = '') => {
    if (tabsHref.value.length > 0 && tabsHref.value[key]) {
        return '#' + tabsHref.value[key];
    }
    return '#';
}

const getTabTitle = (key: string|number = '') => {
    if (props.titles && props.titles[key]) return props.titles[key];
    return key;
}

const refresh = () => {
    _this.$forceUpdate();
}

for (let k in tabsSlots.value) {
    if (Value.value === '') Value.value = k;
}
</script>


<template>
    <div class="lkt-tabs" v-bind:class="classes">
        <ul class="lkt-tabs__list" v-show="displayButtons">
            <li
                v-for="(_, key) in tabsSlots"
                v-bind:key="key"
                class="lkt-tab"
                v-bind:class="{'is-active': key === Value}"
                role="presentation"
            >
                <template v-if="!!titlesSlots[key]">
                    <a v-bind:href="getTabHref(key)"
                       v-on:click.prevent="Value = key"
                       role="tab"
                    >
                        <slot v-bind:name="'title-' + key"></slot>
                    </a>
                </template>
                <template v-else>
                    <a v-html="getTabTitle(key)"
                       v-on:click.prevent="Value = key"
                       v-bind:href="getTabHref(key)"
                       role="tab"
                    ></a>
                </template>
            </li>
            <li v-for="(_, key) in liSlots" data-lkt="tab">
                <slot v-bind:name="'li-' + key"></slot>
            </li>
        </ul>
        <div class="lkt-tabs__content" v-bind:style="contentStyles">
            <lkt-tab
                v-for="(_, key) in tabsSlots"
                v-bind:ref="key"
                v-bind:hash="key"
                v-bind:id="key"
                v-bind:name="getTabTitle(key)"
                v-bind:active-hash="Value"
                v-on:is-active="refresh"
            >
                <slot v-bind:name="'tab-' + key"></slot>
            </lkt-tab>
        </div>
    </div>
</template>