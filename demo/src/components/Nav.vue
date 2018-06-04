<template>
    <div class="nav">
        <h1>Demo List</h1>
        <ol>
            <li><router-link to="/vscroll">1、v-scroll（上拉加载下拉刷新）</router-link></li>
            <li><router-link to="/lazyLoad">2、lazy-load（图片懒加载）</router-link></li> 
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>  
.nav h1 {
    text-align: center;
    padding: 20px 0; 
    margin-bottom: 10px;
    background-color: rgb(96, 182, 204);
    color: #fff;
} 
.nav ol li {
    padding-left: 25px;
    padding-top: 10px;
    border-bottom: 1px #555 dashed;
} 
.nav a {
    display: block;
    color: #555;
    font-size: 20px;
    text-decoration: none;
    padding: 10px 0;
}
</style>

