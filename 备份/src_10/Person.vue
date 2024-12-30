<template>
    <div class="person">
        <h1>详情</h1>
        <h2>姓名:{{person.name}}</h2>
        <h2>年龄:{{person.age}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改这个人</button>
    </div>
</template>


<script setup lang="ts">
    import {ref,reactive,computed,watch} from 'vue'
    // 数据
    let person=reactive({
        name:"jom",
        age:20
    })
    function changeName(){
        person.name+="~"
        console.log(person.name)
    }
    function changeAge(){
        person.age+=1
        console.log(person.age)
    }
    function changePerson(){
        // 进行值覆盖
        Object.assign(person,{
            name:"tom",
            age:20
        })
        console.log(person)
    }
    watch(person,(newValue,oldValue)=>{
        console.log(person,newValue,oldValue)
    })
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