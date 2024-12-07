<template>
    <div class="person">
        <h2>一辆{{car.brand}}车价值{{car.price}}</h2>
        <button @click="changePrice">点击</button>
    </div>
</template>

<script setup lang="ts" name="person">
    import {ref} from 'vue'
    // 数据
    let car=ref({brand:"奔驰",price:100})
    function changePrice(){
        car.value.price+=10
    }
    console.log(car)
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>