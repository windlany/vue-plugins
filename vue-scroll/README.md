# vue-scroll

[演示demo]()

## 运行方式

### 下载插件
```javaScript
git clone 
```

### 在main.js中引入
将v-scroll插件注册到全局
```JavaScript
// main.js
import vscroll from "相对位置";
Vue.use(vscroll);
```

### 在单文件组件中使用
将希望上拉加载下拉刷新的页面放在```<v-scroll>```标签中，类似于这样
```JavaScript
// list.vue
<template>
    <v-scroll @refreshData="refresh" @loadData="load" :configs="configs">
        // some custom component
    </v-scroll>
</template>
```
该插件接收一个对象、两个方法：
- 自定义配置项
```JavaScript
configs: {  // 传入自定义配置项
    // 必填项

    // 上拉加载的最终url是：loadUrl + page
    page: 1,  // 请求页数
    loadUrl: "",  // 上拉加载url
    refreshUrl: "",  // 下拉刷新url

    // 非必填项
    refreshText: "", // 刷新前提示语
    refreshLoad: "",  // 刷新时提示语
    refreshFail: "",  // 刷新失败提示语
    load: "",  // 加载时提示语
    loadFail: "", // 加载失败提示语
}
```
- 数据处理方法
```JavaScript
export default { 
    methods: {
        refresh(data) { // 下拉刷新后的处理方法
            // data为刷新后请求的数据
        },
        load(data) { // 上拉加载数据后的处理方法
            // data为上拉加载后获取的数据
        }
    }
}
``` 
请求成功后的数据可以在自定义子组件中使用 