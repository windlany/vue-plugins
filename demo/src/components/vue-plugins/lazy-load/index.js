import lazyLoad from "./lazyLoad.vue";

var lazy = {};

lazy.install = function (Vue) {  
    Vue.component("lazy-load", lazyLoad);
}

export default lazy;