<template>
    <div class="nav">
        <h1>demo list</h1>
        <ol>
            <li><router-link to="/vscroll">1、v-scroll</router-link></li>
            <li><router-link to="/lazyLoad">2、lazy-load</router-link></li>
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
.nav {
    padding: 20px 0;
}
.nav h1 {
    text-align: center;
    padding: 15px 0; 
} 
.nav ol li {
    padding-left: 25px;
}
.nav ol li:nth-child(2n-1) {
    background-color: #eee;
}
.nav a {
    display: block;
    color: #555;
    font-size: 20px;
    text-decoration: none;
    padding: 10px 0;
}
</style>

