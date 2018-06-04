import scroll from "./vue-scroll/scroll.vue";
import lazyLoad from "./lazy-load/lazyLoad.vue";

var plugins = {};

plugins.install = function(Vue) {
    Vue.component("v-scroll", scroll);
    Vue.component("lazy-load", lazyLoad);
}

export default plugins;