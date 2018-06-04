import Vue from 'vue'
import Router from 'vue-router'

import nav from '@/components/Nav'
import VScroll from '@/components/scrollTest/list.vue';
import LazyLoad from '@/components/scrollTest/list.vue';


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: nav },
        { path: '/vscroll', component: VScroll},
        { path: '/lazyLoad', component: LazyLoad},
    ]
})
