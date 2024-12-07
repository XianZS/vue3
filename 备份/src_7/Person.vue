<template>
    <div class="person">
        <h2>姓名 : {{person.name}}</h2>
        <h2>年龄 : {{person.age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <h2>{{r.name}}</h2>
    </div>
</template>

<script setup lang="ts" name="person">
    import {reactive,toRefs,toRef,ref} from 'vue'
    let person=reactive({name:"jom",age:12})
    let r = toRefs(person)
    let x = toRef(person,"name")
    function changeName(){
        r.name.value+="~"
        console.log(r)
        console.log(person)
        console.log(x)
        console.log(ref({"xx":1}))
    }
    function changeAge(){
        person.age+=1
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