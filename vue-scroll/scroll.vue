<template>
    <div class="vscroll">
        <div class="header" ref="header">
            <div v-show="refreshText" class="refresh">{{configs.refreshText ? configs.refreshText : "释放立即刷新"}}</div>
            <span v-show="refreshLoad">
                <img class="load" src="./loading.gif" alt="loading...">
                {{configs.refreshLoad ? configs.refreshLoad : "正在刷新..."}}
            </span>
            <p v-show="refreshFail" @click="touchEnd">
                {{configs.refreshFail ? configs.refreshFail : "刷新失败，点击重试"}}
            </p>
        </div>
        <div class="main" 
            @scroll="scroll"
            @touchstart="touchStart"
            @touchmove="touchmove"
            @touchend="touchEnd"
            ref="scrollBody"> 
            <slot>
                没有数据，重新加载试试    
            </slot> 
        </div>
        <div class="footer">
            <span v-show="loading">
                <img class="load" src="./loading.gif" alt="loading...">
                {{configs.load ? configs.load : "正在加载，请稍后..."}}
            </span>
            <p v-show="fail" @click="reload">
                {{configs.loadFail ? configs.loadFail : "加载失败，点击重试"}}
            </p>
        </div> 
    </div>
</template>

<script>
    export default {
        props: ["configs"],
        data() {
            return {
                refreshLoad: false,
                refreshText: false,
                refreshFail: false,
                loading: false,
                fail: false,
                startY: '',
                endY: ''
            }
        },
        created() {
            this.refresh();
        },
        methods: { 
            touchStart(ev) {
                ev = ev || window.event;
                this.startY = ev.touches[0].pageY;
            },
            touchmove(ev) {
                ev = ev || window.event;
                this.endY = ev.touches[0].pageY;

                var dis = this.endY - this.startY;  

                if(dis > 0) {  // 下拉
                    this.refreshLoad = this.refreshText = this.refreshFail = false;
                    if(this.$refs.scrollBody.scrollTop == 0) {  // 如果是下拉顶部
                        this.$refs.header.style.height = dis+"px";
                        this.$refs.header.style.lineHeight = dis+"px";
                        
                        if(dis > 50) {
                            this.refreshText = true; // 显示释放刷新提示
                        }
                    }
                } 
            }, 
            touchEnd(ev) {                    
                if(this.refreshText || this.refreshFail) {  // 避免上拉加载时刷新
                    this.$refs.header.style.height = "50px";
                    this.$refs.header.style.lineHeight = "50px";
                    this.refreshText = this.refreshFail = false;
                    this.refreshLoad = true;
                    
                    if(this.configs.cancelRefreshTimeout) {
                        this.refresh();
                    } else {
                        setTimeout(()=> {
                            this.refresh();
                        }, 2000);
                    } 
                } else {
                    this.$refs.header.style.height = "0px";
                }
            },
            refresh() {
                this.configs.page = 1;
                fetch(this.configs.refreshUrl).then(res=> {
                    return res.json();
                }).then(data=> {
                    this.refreshLoad = false;
                    this.$refs.header.style.height = "0";
                    this.$emit("refreshData", data);
                }).catch(err=> {
                    this.refreshLoad = false;
                    this.refreshFail = true;
                    console.log(err);
                })
            },
            scroll() {
                var scrollBody = this.$refs.scrollBody; 
                this.loading = this.fail = false;

                // 滑动到页面最底端
                if(window.screen.height + scrollBody.scrollTop >= scrollBody.scrollHeight) {
                    this.loading = true;
                    if(this.configs.cancelLoadTimeout) {
                        this.load();
                    } else {
                        setTimeout(() => {
                            this.load();
                        }, 1000);
                    } 
                }
            }, 
            load() {
                fetch(this.configs.loadUrl + this.configs.page).then(res=> {
                    return res.json();
                }).then(data=> {
                    this.loading = false;  
                    this.$emit("loadData", data);  // 传递数据给父元素
                    this.configs.page++;
                }).catch(err=> {
                    this.loading = false;
                    this.fail = true;
                })
            },
            reload() { // 重新加载
                this.loading = true;
                this.fail = false;
                if(this.configs.cancelLoadTimeout) {
                    this.load();
                } else {
                    setTimeout(() => {
                        this.load();
                    }, 1000);
                }
            }, 
        }
    }
</script>

<style scoped>
.vscroll .header {
    text-align: center;
    vertical-align: middle;
    color: #555;
}
.vscroll .main {
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden; 
}
.vscroll .footer {
    text-align: center;
    color: #555; 
}
.vscroll .load {
    width: 96px;
    height: 70px;
    vertical-align: middle;
}
</style>
