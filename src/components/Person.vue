<template>
    <div class="person">
        ???
    </div>
    <button @click="getPerson()">点击</button>
</template>


<script setup lang="ts" name="Person">
import {ref} from 'vue'
import {type Person_inter} from "@/types";

let person: Person_inter = {id: "1001", name: '张三', age: 18}
function getPerson(){
    console.log(person);
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