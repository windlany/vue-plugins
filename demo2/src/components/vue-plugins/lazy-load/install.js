import lazyLoad from "./lazyLoad";

var lazy = {};

lazy.install = function (Vue) {  
    Vue.component("lazy-load", lazyLoad);
}

export default lazy;