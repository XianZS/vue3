<template>
    <div class="person">
        <h1 id="total">Person-id</h1>
        <h2 ref="total2">Person-ref</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点击</button>
    </div>
</template>


<script setup lang="ts" name="Person">
import {ref} from "vue";

let total2 = ref()

function showLog() {
    // 如果直接在vue文件中使用id的话，可能在App.vue也出现id相同的情况，所以可能报错
    let some = document.getElementById("total")
    console.log(some.innerText);
    // App-id
    // 输出：事件
    console.log(total2.value.innerHTML)
    // Person-ref
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