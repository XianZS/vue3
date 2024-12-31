<template>
    <div class="person">
        <h2>当前水温 : {{ temp }}℃</h2>
        <h2>当前水位 : {{ height }}㎝</h2>
        <button @click="changeTemp">change</button>
        <br>
        <button @click="changeHeight">change</button>
    </div>
</template>


<script setup lang="ts">
// watch 惰性监视 [发现A、B变化时，执行 C 函数]
import {ref, watch} from 'vue'
// watchEffect 监视，动态的，自己分析去监视什么 [发现有数据变化时，执行 C 函数]
import {watchEffect} from "vue";

let temp = ref(10);
let height = ref(0);

/**
 * 增加水温
 * 当点击按钮时，此函数会被调用，每次调用会使水温增加 10 度
 */
function changeTemp() {
    // 增加 temp 的值
    temp.value += 10;
}


function changeHeight() {
    height.value += 10;
}

// watch 监视
// watch([temp, height], (newVal, oldVal) => {
//     console.log("newVal : ", newVal, "oldVal : ", oldVal);
//     // 获取最新的水温和水位
//     let [newTemp, newHeight] = newVal;
//     console.log(newTemp, newHeight);
//     if (newTemp > 100 || newHeight >= 80) {
//         alert("水温过高或水位过高，停止加热");
//     }
// })

// watchEffect 监视，在页面执行时，会自动启动，会自动分析你所监听的数据
watchEffect(() => {
    console.log("#");
    if (temp.value >= 100 || height.value >= 80) {
        alert("水温过高或水位过高，停止加热");
    }
})

</script>

<style scoped>
.person {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    text-align: center;
    background-color: #efcece;
}
</style>