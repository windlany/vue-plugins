<template>
    <div class="list">
        <v-scroll @refreshData="refresh" @loadData="load" :configs="configs">
            <item :data="data"/>
        </v-scroll>
    </div>
</template>

<script>
import item from "./item";

export default { 
    data() {
        return {
            data: "",  
            // 相关配置
            configs: {  
                // require
                page: 1,  // 页数
                // 上拉加载url
                loadUrl: "https://www.easy-mock.com/mock/5b13539be2546c72e6c64ea8/api/scroll/",
                // 下拉刷新url
                refreshUrl: "https://www.easy-mock.com/mock/5b13539be2546c72e6c64ea8/api/scroll/1",

                // not require
                refreshText: "", // 刷新前提示语
                refreshLoad: "",  // 刷新时提示语
                refreshFail: "",  // 刷新失败提示语
                load: "",  // 加载时提示语
                loadFail: "", // 加载失败提示语
            }
        }
    }, 
    methods: {
        load(data) {  // 获取加载后数据后的处理函数
            this.data.items = this.data.items.concat(data.items);  
        },
        refresh(data) {  // 刷新后的处理函数
            this.data = data;
        }
    },
    components: {
        item
    }
}
</script>

<style>
.list {
    background-color: #f9f9f9;
}
</style>
