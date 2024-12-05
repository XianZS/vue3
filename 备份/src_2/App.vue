<template>
    <Person/>
</template>

<script lang="ts">
import Person from "@/components/Person.vue";

export default {
    name: 'App', // 暴露主键名
    // 注册组件 components
    components: {Person},
}

</script>

<style>
.app {
    background-color: darkslateblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>