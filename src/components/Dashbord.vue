<template>
    <div class="container">
        <div class="time">{{ hoursAndMinutes }}</div>
        <div v-if="now.getHours() >= 6 && now.getHours() <12" class="msg">{{$t("dashbord.morning")}} {{ user }} !</div>
        <div v-if="now.getHours() >= 12 && now.getHours() <18" class="msg">{{$t("dashbord.afternoon")}} {{ user }} !</div>
        <div v-if="now.getHours() >= 18 && now.getHours() <21" class="msg">{{$t("dashbord.evening")}} {{ user }} !</div>
        <div v-if="now.getHours() >= 21 || now.getHours() < 6" class="msg">{{$t("dashbord.night")}} {{ user }} !</div>
        <div class="nameErr" v-if="user == 'user'">please enter your name in profile tab</div>
    </div>

</template>
<style scoped>

</style>
<script setup lang="ts">
import { toRefs } from 'vue'
    const now = new Date();
    const hoursAndMinutes = now.getHours() + ':' + now.getMinutes();
    let user = localStorage.getItem('Username')
    console.log(user)
    if(!user){
        user = 'user' 
    }
</script>
<style>
.time{
    margin: 0 auto;
    font-size: 70px;
}
.msg{
    margin: 0 auto;
    font-size: 50px;
    display: inline;
}
.container{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    right: 650px;
}
.nameErr{
    margin: 0 auto;
    font-size: 20px;
    color: red;
}
</style>