<template>
    <div class="person">
        <h2>当前求和为 : {{ number }}</h2>
        <button @click="changeNumber">change</button>
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'

let number = ref(0);

function changeNumber() {
    number.value = number.value + 1;
}
</script>

<style scoped>

</style>