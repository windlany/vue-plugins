# lazy-load

图片懒加载插件


![](https://github.com/windlany/vue-plugins/tree/master/demo/static/show/lazyLoad.gif)

## 使用方式

### 下载插件
将下载好的文件夹放到```project/src/components```中
```javaScript
git clone https://github.com/windlany/vue-plugins.git
```

### 在main.js中引入
将lazy-load插件注册到全局
```JavaScript
// main.js
import lazy from "path/vue-plugins/lazy-load";
Vue.use(lazy); 
```

### 在单文件组件中使用
将希望懒加载的页面放在```<lazy-load>```标签中，类似于这样
```JavaScript 
<template>
    <div class="useLazy">
        <lazy-load>
            // some custom components
        </lazy-load>
    </div>
</template>
```
标签内所有需要懒加载的图片都遵循以下格式
```JavaScript
 <img class="lazyImg" src="##" :datasrc="src">
```
- 必须有一个类名为```lazyImg```
- 图片真实的```src```放在```datasrc```属性中

## 实现

### 改变图片src
监听```<lazy-load>```的滚动事件，触发滚动时遍历图片检测图片位置，若在可视区内则显示
```JavaScript
img.src = img.getAttribute("datasrc");
```
### 函数防抖
如果在滚动过程中不断触发遍历并判断图片是否在可视区的监听事件，会耗费很大的性能，这里采用函数防抖：当用户停止滚动时统一遍历判断图片位置
```JavaScript
debounce(fn) {
    // 函数防抖：用户停止操作之后触发
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
        fn();
    }, 1000);
}
```
### 防抖优化
如果用户一次性从页面底部上拉到顶部那么采用上述防抖方法会令用户在松手之前图片都不能显示，为了提高用户体验我们规定，若用户上拉高度大于500px那么就自动加载一次可视区内图片，这里我们用oldScrollTop记录上次上拉高度
```JavaScript
lazyLoad() {
    // 如果上拉距离大于400px则自动加载
    if(this.$refs.lazy.scrollTop - this.oldScrollTop > 500) {
        this.loadImg();
        this.oldScrollTop = this.$refs.lazy.scrollTop;
    } else if(this.$refs.lazy.scrollTop - this.oldScrollTop < 0) {  // 如果向下拉则不做操作
        return ;
    } else {  // 如果向下拉但小于400px则防抖加载
        this.debounce(this.loadImg);
    }
}
```