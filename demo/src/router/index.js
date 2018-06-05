import Vue from 'vue'
import Router from 'vue-router'

import nav from '@/components/Nav'
import VScroll from '../components/vscrollTest/list.vue';
import LazyLoad from '../components/lazyLoadTest/useLazy.vue';
import DragDrop from "../components/dragDropText/index.vue";


Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: nav},
        {path: '/vscroll', component: VScroll},
        {path: '/lazyLoad', component: LazyLoad},
        {path: '/dragDrop', component: DragDrop},
    ]
})
