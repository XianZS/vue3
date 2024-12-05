<template>
    <div class="person">
        <h2>姓名 : {{ name }}</h2>
        <h2>年龄 : {{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel"> show tel</button>
    </div>
</template>

<script lang="ts">

export default {
    // vue2 是【选项式】
    // vue3 是【组合式】
    name: "Person",
    setup() {
        // 数据
        // let 定义的变量并不是响应式的
        let name = "jom"
        let age = 3
        let tel = "10086"

        // 函数
        function changeName() {
            console.log(1)
            name = "jom"
        }

        function changeAge() {
            console.log(2)
            age += 1
        }

        function showTel() {
            console.log(3)
            tel += "000000000"
        }

        return {
            name, age, tel, changeName, changeAge, showTel,
        }
    }
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