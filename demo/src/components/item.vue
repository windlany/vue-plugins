<template>
    <div class="test">
        <h1>{{data.title}}</h1>
        <ol>
            <li v-for="(item, index) in data.items" :key="index">
                {{index+1}}.  {{item}}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            
        }
    }  
}
</script> 

<style> 
.test h1 {
    text-align: center;
    padding: 20px;
    color: #333;
}
.test li {
    color: #444;
    padding: 10px;
}
.test li:nth-child(2n-1) {
    background-color: #ddd;
}
</style>
