# vue-scroll

上拉加载下拉刷新插件，适用于获取多页数据

## 效果图
![](https://github.com/windlany/vue-plugins/blob/master/demo/static/show/vscroll.gif)

## 使用方式

### 下载插件
将下载好的文件夹放到```project/src/components```中
```javaScript
git clone https://github.com/windlany/vue-plugins.git
```

### 在main.js中引入
将v-scroll插件注册到全局
```JavaScript
// main.js
import vscroll from "path/vue-plugins/vue-scroll";
Vue.use(vscroll);
```

### 在单文件组件中使用
将希望上拉加载下拉刷新的页面放在```<v-scroll>```标签中（注意：必须是一整个页面的内容都放进来，而不要只放一个片段），类似于这样
```JavaScript 
<template>
    <div>
        <v-scroll @refreshData="refresh" @loadData="load" :configs="configs">
            // some custom components
        </v-scroll> 
    </div>
</template>
```
该插件接收一个对象、两个方法：
- 自定义配置项
```JavaScript
configs: {  // 传入自定义配置项
    // 必填项

    // 上拉加载的最终url是：loadUrl + page
    page: Number,  // 请求页数
    loadUrl: String,  // 上拉加载url
    refreshUrl: String,  // 下拉刷新url

    // 非必填项
    refreshText: String, // 刷新前提示语
    refreshLoad: String,  // 刷新时提示语
    refreshFail: String,  // 刷新失败提示语
    load: String,  // 加载时提示语
    loadFail: String, // 加载失败提示语

    cancelLoadTimeout: Boolean,  // 取消默认延迟
    cancelRefreshTimeout: Boolean  // 取消默认延迟
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
