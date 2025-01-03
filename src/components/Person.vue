<template>
    <div class="person">
        ???
    </div>
    <button @click="getPerson()">点击</button>
</template>


<script setup lang="ts" name="Person">
import {ref} from 'vue'
import {type Person_inter, Persons} from "@/types";

let person: Person_inter = {id: "1001", name: '张三', age: 18}

function getPerson() {
    console.log("person : ", person);
    console.log("personList : ", personList);
}

let personList: Array<Person_inter> = [
    {id: "num1001", name: "jom", age: 18},
    {id: "num1002", name: "kom", age: 55},
    {id: "num1003", name: "lom", age: 46},
]
let personList1: Persons = [
    {id: "num1001", name: "jom", age: 18},
    {id: "num1002", name: "kom", age: 55},
    {id: "num1003", name: "lom", age: 46},
]
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