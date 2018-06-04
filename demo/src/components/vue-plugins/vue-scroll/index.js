import scrollComponent from "./scroll.vue";

var vscroll = {};

vscroll.install = function(Vue) {
    Vue.component("v-scroll", scrollComponent);
}

export default vscroll;