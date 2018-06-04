<template>
    <div class="useLazy">
        <h1>Lazy-load Demo</h1>
        <lazy-load>
            <ul>
                <li v-for="(src, index) in imgs" :key="index">
                    <img src="##" :dataAlt="src">
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
                "./image/1.jpg",
                "./image/2.jpg",
                "./image/3.jpg",
                "./image/4.jpg",
                "./image/5.jpg",
                "./image/6.jpg",
                "./image/7.jpg",
                "./image/8.jpg",
                "./image/9.jpg",
                "./image/10.jpg",
                "./image/11.jpg", 
                "./image/1.jpg",
                "./image/2.jpg",
                "./image/3.jpg",
                "./image/4.jpg",
                "./image/5.jpg",
                "./image/6.jpg",
                "./image/7.jpg",
                "./image/8.jpg",
                "./image/9.jpg",
                "./image/10.jpg",
                "./image/11.jpg", 
                "./image/1.jpg",
                "./image/2.jpg",
                "./image/3.jpg",
                "./image/4.jpg",
                "./image/5.jpg",
                "./image/6.jpg",
                "./image/7.jpg",
                "./image/8.jpg",
                "./image/9.jpg",
                "./image/10.jpg",
                "./image/11.jpg", 
                "./image/1.jpg",
                "./image/2.jpg",
                "./image/3.jpg",
                "./image/4.jpg",
                "./image/5.jpg",
                "./image/6.jpg",
                "./image/7.jpg",
                "./image/8.jpg",
                "./image/9.jpg",
                "./image/10.jpg",
                "./image/11.jpg", 
                "./image/1.jpg",
                "./image/2.jpg",
                "./image/3.jpg",
                "./image/4.jpg",
                "./image/5.jpg",
                "./image/6.jpg",
                "./image/7.jpg",
                "./image/8.jpg",
                "./image/9.jpg",
                "./image/10.jpg",
                "./image/11.jpg", 
                "./image/1.jpg",
                "./image/2.jpg",
                "./image/3.jpg",
                "./image/4.jpg",
                "./image/5.jpg",
                "./image/6.jpg",
                "./image/7.jpg",
                "./image/8.jpg",
                "./image/9.jpg",
                "./image/10.jpg",
                "./image/11.jpg", 
                "./image/1.jpg",
                "./image/2.jpg",
                "./image/3.jpg",
                "./image/4.jpg",
                "./image/5.jpg",
                "./image/6.jpg",
                "./image/7.jpg",
                "./image/8.jpg",
                "./image/9.jpg",
                "./image/10.jpg",
                "./image/11.jpg", 
            ]
        }
    }
}    
</script>

<style>
.useLazy {
    background-color: #eee;
    min-height: 100vh;
}
.useLazy h1 {
    padding: 10px 0;
    text-align: center;
}
.useLazy li {
    display: inline-block;
    width: 33%;
    height: 147px;
    padding: 0 5px;
    margin: 5px 0;
    box-sizing: border-box;
}
.useLazy li img {
    width: 100%;
    height: 100%;
    border: 1px #000 solid;
}
</style>
