<template>
    <div class="person">
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
        <button @click="changeName">changeName</button>
        <button @click="changeAge">changeAge</button>
    </div>
</template>

<script setup lang="ts" name="person">
    import {ref} from 'vue'
    let name=ref("jom")
    let age=ref(22)
    function changeName(){
        name.value="更改之后的名字"
    }
    function changeAge(){
        age.value+=1
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