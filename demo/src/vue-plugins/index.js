import scroll from "./vue-scroll/scroll.vue";
import lazyLoad from "./lazy-load/lazyLoad.vue";
import dragDrop from "./drap-drop/dragDrop.vue";

var plugins = {};

plugins.install = function(Vue) {
    Vue.component("v-scroll", scroll);
    Vue.component("lazy-load", lazyLoad);
    Vue.component("drag-drop", dragDrop);
}

export default plugins;