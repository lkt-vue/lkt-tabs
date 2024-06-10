<script lang="ts">
export default {
    name: "LktTab",
    inheritAttrs: false,
    customOptions: {},
};
</script>

<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {generateRandomString, isString} from "lkt-tools";

const props = defineProps({
    id: {type: String, default: ''},
    name: {type: String, required: true},
    hash: {type: String, default: ''},
    activeHash: {type: String, default: ''},
    isDisabled: {type: Boolean, default: false},
});

const emit = defineEmits(['is-active']);

const isActive = ref(false),
    uniqueId = ref(generateRandomString(8));


const computedId = computed(() => {
    if (props.id) return props.id;
    if (isString(props.name) && props.name.length > 0) {
        return props.name.toLowerCase().replace(/ /g, '-');
    }
    return uniqueId.value;
})

const checkIsActive = () => {
    isActive.value = props.activeHash === props.hash;
    emit('is-active', isActive.value);
}

watch(() => props.activeHash, checkIsActive);

checkIsActive();

</script>

<template>
    <section
        data-lkt="tab-content"
        v-if="isActive"
        v-bind:id="computedId"
        role="tabpanel"
    >
        <slot/>
    </section>
</template>
