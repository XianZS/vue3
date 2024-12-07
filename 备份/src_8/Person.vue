<template>
    <div class="person">
        <!-- 单向绑定 -->
        <!-- 可以从数据流向页面，不能从页面流向数据 -->
        姓 : <input type="text" :value="firstName1"> <br>
        名 : <input type="text" :value="lastName1"> <br>
        <!-- 更新“姓”和“名”时，全名不会同步修改 -->
        全名 : <input type="text" :value="firstName1+lastName1"> <br>
    </div>
    <br>
    <div class="person">
        <!-- 双向绑定 -->
        姓 : <input type="text" v-model="firstName2"> <br>
        名 : <input type="text" v-model="lastName2"> <br>
        <!-- 更新“姓”和“名”时，全名会同步修改 -->
        全名 :<input type="text" :value="firstName2+lastName2"> <br>
    </div>
    <br>
    <div class="person">
        <!-- 计算属性 -->
        姓 : <input type="text" v-model="firstName3"> <br>
        名 : <input type="text" v-model="lastName3"> <br>
        <!-- 更新“姓”和“名”时，全名会同步修改 -->
        全名 :<input type="text" :value="fullName"> <br>
    </div>
    <br>
    <div class="person">
        <!-- 计算属性-修改 -->
        姓 : <input type="text" v-model="firstName4"> <br>
        名 : <input type="text" v-model="lastName4"> <br>
        <!-- 更新“姓”和“名”时，全名会同步修改 -->
        全名 :<input type="text" :value="fullName4"> <br>
        <button @click="changeFullName">点击修改FullName</button>
    </div>
</template>


<script setup lang="ts" name="person">
    import {ref,computed} from 'vue'
    let firstName1=ref("张")
    let lastName1=ref("三")
    let firstName2=ref("zhang")
    let lastName2=ref("san")
    let firstName3=ref("zhang")
    let lastName3=ref("san")
    let fullName=computed(() => {
        // 计算属性
        return firstName3.value.slice(0,1).toUpperCase()+firstName3.value.slice(1)+lastName3.value.slice(0,1).toUpperCase()+lastName3.value.slice(1)
    })
    let firstName4=ref("zhang")
    let lastName4=ref("san")
    let fullName4=computed({
        get(){
            return firstName4.value.slice(0,1).toUpperCase()+firstName4.value.slice(1)+"-"+lastName4.value.slice(0,1).toUpperCase()+lastName4.value.slice(1)
        },
        set(val){
            const [x,y]=val.split('-')
            console.log([x,y])
            firstName4.value = x
            lastName4.value = y
        }
    })
    function changeFullName(){
        fullName4.value="wang-hong"
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