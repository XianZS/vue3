<template>
    <div class="person">
        <h2> ref </h2>
        <h2>一辆 [ {{car1.brand}} ] 车价值 [ {{car1.price}} ] 万</h2>
        <button @click="changeBrand1">修改车</button>
        <button @click="changePrice1">修改价格</button>
        <button @click="changeCar1">修改车-1</button>
    </div>
    <br>
    <div class="person">
        <h2> reactive </h2>
        <h2>一辆 [ {{car2.brand}} ] 车价值 [ {{car2.price}} ] 万</h2>
        <button @click="changeBrand2">修改车</button>
        <button @click="changePrice2">修改价格</button>
        <button @click="changeCar2_1">修改车-1</button>
        <button @click="changeCar2_2">修改车-2</button>
    </div>
</template>

<script setup lang="ts" name="person">
    import {ref,reactive} from 'vue'
    // 数据
    // car1 是 ref 响应式对象
    let car1=ref({brand:"奔驰",price:100})
    // car2 是 reactive 响应式对象
    let car2=reactive({brand:"奔驰",price:100})
    function changeBrand1(){
        car1.value.brand="宝马"
    }
    function changePrice1(){
        car1.value.price+=10
    }
    function changeCar1(){
        car1.value={brand:"迪子",price:10}
    }
    function changeBrand2(){
        car2.brand="宝马"
    }
    function changePrice2(){
        car2.price+=10
    }
    function changeCar2_1(){
        // 重新定义响应式对象时，原响应式对象就会被舍弃
        car2={brand:"迪子",price:10}
    }
    function changeCar2_2(){
        // 使用Object.assign(响应式对象,{传入新参数}) 传入新参数 ===> 响应式对象
        Object.assign(car2,{brand:"迪子",price:10})
    }
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