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
    import {ref,computed,watch} from 'vue'
    // 数据
    let person=ref({
        name:"jom",
        age:20
    })
    function changeName(){
        person.value.name+="~"
    }
    function changeAge(){
        person.value.age+=1
    }
    function changePerson(){
        person.value={
            name:"tom",
            age:20
        }
    }
    // 监视 - watch 监视的是 ref 对象类型数据的地址值
    watch(person,(newValue,oldValue)=>{
        console.log(newValue)
        console.log(oldValue)
    },
        // 开启“深度监视”
        {deep:true,immediate:true}
    )
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