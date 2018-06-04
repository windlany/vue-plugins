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
    background-color: rgb(96, 182, 204);
    color: #fff;
    margin-bottom: 10px;
}
.test li {
    color: rgb(96, 182, 204);
    color: #555;
    border-bottom: 1px #555 dashed;
    padding: 10px;
} 
</style>
