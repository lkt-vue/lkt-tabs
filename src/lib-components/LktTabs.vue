<script lang="ts" setup>
import LktTab from "../components/LktTab.vue";
import {computed, getCurrentInstance, nextTick, ref, useSlots, watch} from 'vue';
import {loadSelectedTabFromSession, setSelectedTabFromSession} from "../functions/functions";
import {getDefaultValues, LktObject, Tabs, TabsConfig} from "lkt-vue-kernel";

const {ctx: _this}: any = getCurrentInstance();

const slots = useSlots();

const props = withDefaults(defineProps<TabsConfig>(), getDefaultValues(Tabs));

const emit = defineEmits([
    'update:modelValue'
])

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
    let r: Array<string> = [];
    return r.join(' ');
});

const contentStyles = computed(() => {
    let r = [];
    if (!!props.contentPad) r.push(`padding: ${props.contentPad}`);
    return r.join(';');
});

const tabsSlots = computed(() => {
    let r: string[] = [];
    for (let k in slots) if (k.indexOf('tab-') !== -1) r.push(k);
    return r;
});

const titlesSlots = computed(() => {
    let r: string[] = [];
    for (let k in slots) if (k.indexOf('title-') !== -1) r.push(k);
    return r;
});

const liSlots = computed(() => {
    let r: string[] = [];
    for (let k in slots) if (k.indexOf('li-') !== -1) r.push(k);
    return r;
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
                v-for="key in tabsSlots"
                v-bind:key="key"
                class="lkt-tab"
                v-bind:class="{'is-active': key === Value}"
                role="presentation"
            >
                <template v-if="titlesSlots.includes(key)">
                    <a v-bind:href="getTabHref(key)"
                       v-on:click.prevent="Value = key"
                       role="tab"
                    >
                        <slot v-bind:name="'title-' + key"/>
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
                <slot v-bind:name="'li-' + key"/>
            </li>
        </ul>
        <div class="lkt-tabs__content" v-bind:style="contentStyles">
            <lkt-tab
                v-for="key in tabsSlots"
                v-bind:ref="key"
                v-bind:hash="key"
                v-bind:id="key"
                v-bind:name="getTabTitle(key)"
                v-bind:active-hash="Value"
                v-on:is-active="refresh"
            >
                <slot v-bind:name="'tab-' + key"/>
            </lkt-tab>
        </div>
    </div>
</template>