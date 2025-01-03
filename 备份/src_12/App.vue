<template>
    <h1 id="total">App-id</h1>
    <h2 ref="total2">App-ref</h2>
    <Person></Person>
    <button @click="func_load()">点击</button>

</template>

<script lang="ts" setup name="App">
import {ref} from "vue";
import Person from "./components/Person.vue";

let total2 = ref()

function func_load() {
    console.log(document.getElementById("total").innerHTML);
    // App-id
    console.log(total2.value.innerHTML);
    // App-ref
}
</script>

<style>

</style>