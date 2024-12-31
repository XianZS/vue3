<template>
    <div class="person" id="total">
        <h1>中国</h1>
        <h2>北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点击</button>
    </div>
</template>

0
<script setup lang="ts" name="Person">
    function showLog(){
        let some=document.getElementById('total')
        console.log(some.innerText.split('\n')[1])
        console.log(some)
    }
</script>

<style scoped>
.person {
    width: 300px;
    height: 200px;
    border: 1px solid #000;
    text-align: center;
    background-color: #efcece;
}
</style>