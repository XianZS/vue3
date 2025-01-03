<template>
    <Person ref="some1"></Person>
    <button @click="func_load2()" class="c1">点击</button>
</template>

<script lang="ts" setup name="App">
import {ref} from "vue";
import Person from "./components/Person.vue";

let some1 = ref()


function func_load2() {
    console.log(some1.value)
    console.log(some1.value.c)
}
</script>

<style>
.c1{
    text-align: center;
    width: 200px;
    height: 50px;
}
</style>