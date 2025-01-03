<template>
    <div class="person">
        {{ a }}
        <br>
        {{ b }}
        <br>
        {{ c }}
    </div>
</template>


<script setup lang="ts" name="Person">
import {ref, defineExpose} from "vue";

let a = ref(0)
let b = ref(1)
let c = ref(2)

function showLog() {
    console.log(a);
    console.log(b);
    console.log(c);
}

// 将变量 b 和 c 暴露出去
// 简单点说，App.vue中就可以看到子组件Person.vue中的b和c了，但是因为a并没有被暴露，所以App.vue中看不到a
defineExpose({b, c})
// Proxy(Object) {b: RefImpl, c: RefImpl, __v_skip: true}
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