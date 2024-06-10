/* eslint-disable import/prefer-default-export */
import {default as tabs} from "./lib-components/LktTabs.vue";
import {App} from "vue";
import "../style.css";

const LktTabs = {
    install: (app: App, options: any) => {
        app.component('lkt-tabs', tabs);
    },
};

export default LktTabs;