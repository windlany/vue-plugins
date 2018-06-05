<template>
    <div class="dragTest">
        <h1>drag-drop Demo</h1>
        <drag-drop>
            <div class="test1">
                拖我 拖我
            </div>
        </drag-drop>
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
.dragTest h1 {
    text-align: center;
    padding: 20px;
    background-color: rgb(96, 182, 204);
    color: #fff;
    position: sticky;
    top: 0;
}
.dragTest .test1 {
    width: 130px;
    height: 130px;
    text-align: center;
    line-height: 130px;
    color: #fff;
    background-color: rgb(120, 122, 139);
}
</style>
