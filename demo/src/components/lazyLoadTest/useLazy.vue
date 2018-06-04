<template>
    <div class="useLazy">
        <lazy-load>
            <h1>Lazy-load Demo</h1>
            <ul>
                <li v-for="(src, index) in imgs" :key="index">
                    <img class="lazyImg" src="##" :datasrc="src">
                </li>
            </ul>
        </lazy-load>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [
                "../../../static/img/1.jpg",
                "../../../static/img/2.jpg",
                "../../../static/img/3.jpg",
                "../../../static/img/4.jpg",
                "../../../static/img/5.jpg",
                "../../../static/img/6.jpg",
                "../../../static/img/7.jpg",
                "../../../static/img/8.jpg",
                "../../../static/img/9.jpg",
                "../../../static/img/10.jpg",
                "../../../static/img/11.jpg", 
                "../../../static/img/1.jpg",
                "../../../static/img/2.jpg",
                "../../../static/img/3.jpg",
                "../../../static/img/4.jpg",
                "../../../static/img/5.jpg",
                "../../../static/img/6.jpg",
                "../../../static/img/7.jpg",
                "../../../static/img/8.jpg",
                "../../../static/img/9.jpg",
                "../../../static/img/10.jpg",
                "../../../static/img/11.jpg", 
                "../../../static/img/1.jpg",
                "../../../static/img/2.jpg",
                "../../../static/img/3.jpg",
                "../../../static/img/4.jpg",
                "../../../static/img/5.jpg",
                "../../../static/img/6.jpg",
                "../../../static/img/7.jpg",
                "../../../static/img/8.jpg",
                "../../../static/img/9.jpg",
                "../../../static/img/10.jpg",
                "../../../static/img/11.jpg", 
                "../../../static/img/1.jpg",
                "../../../static/img/2.jpg",
                "../../../static/img/3.jpg",
                "../../../static/img/4.jpg",
                "../../../static/img/5.jpg",
                "../../../static/img/6.jpg",
                "../../../static/img/7.jpg",
                "../../../static/img/8.jpg",
                "../../../static/img/9.jpg",
                "../../../static/img/10.jpg",
                "../../../static/img/11.jpg", 
                "../../../static/img/1.jpg",
                "../../../static/img/2.jpg",
                "../../../static/img/3.jpg",
                "../../../static/img/4.jpg",
                "../../../static/img/5.jpg",
                "../../../static/img/6.jpg",
                "../../../static/img/7.jpg",
                "../../../static/img/8.jpg",
                "../../../static/img/9.jpg",
                "../../../static/img/10.jpg",
                "../../../static/img/11.jpg", 
                "../../../static/img/1.jpg",
                "../../../static/img/2.jpg",
                "../../../static/img/3.jpg",
                "../../../static/img/4.jpg",
                "../../../static/img/5.jpg",
                "../../../static/img/6.jpg",
                "../../../static/img/7.jpg",
                "../../../static/img/8.jpg",
                "../../../static/img/9.jpg",
                "../../../static/img/10.jpg",
                "../../../static/img/11.jpg", 
                "../../../static/img/1.jpg",
                "../../../static/img/2.jpg",
                "../../../static/img/3.jpg",
                "../../../static/img/4.jpg",
                "../../../static/img/5.jpg",
                "../../../static/img/6.jpg",
                "../../../static/img/7.jpg",
                "../../../static/img/8.jpg",
                "../../../static/img/9.jpg",
                "../../../static/img/10.jpg",
                "../../../static/img/11.jpg", 
            ]
        }
    }
}    
</script>

<style>
.useLazy {
    min-height: 100vh;
}
.useLazy h1 {
    text-align: center;
    padding: 20px;
    background-color: rgb(96, 182, 204);
    color: #fff;
    position: sticky;
    top: 0;
} 
.useLazy li {
    display: inline-block;
    width: 33%;
    height: 153px;
    padding: 3px; 
    box-sizing: border-box;
}
.useLazy li img {
    width: 100%;
    height: 100%;
}
</style>
