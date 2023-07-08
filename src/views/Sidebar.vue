
<template>
  <div class="sidebar" :class="{darkTheme : isDarkMode == 'dark' }" >
    <a-menu class="Theme" mode="vertical" >
      <a-menu-item key="dashboard">
        <router-link  :class="{itemDark : isDarkMode == 'dark' }" to="/dashbord" >{{ $t("sidebar.dashbord")}}</router-link>
      </a-menu-item>
      <a-menu-item key="todo">
        <router-link :class="{itemDark : isDarkMode == 'dark' }" to="/todos" >{{ $t("sidebar.todos")}}</router-link>
      </a-menu-item>
      <a-menu-item key="weather">
        <router-link :class="{itemDark : isDarkMode == 'dark' }" to="/weather" >{{ $t("sidebar.weather")}}</router-link>
      </a-menu-item>
      <a-menu-item key="profile">
        <router-link :class="{itemDark : isDarkMode == 'dark' }" to="/profile">{{ $t("sidebar.profile")}}</router-link>
      </a-menu-item>
    </a-menu>
  </div>
  <RouterView />  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Switch, Menu } from 'ant-design-vue';

export default defineComponent({
  components: {
    ASwitch: Switch,
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  setup() {
    if(!localStorage.getItem('Username')){
      alert('go to profile an Enter your name!')
    }
    let isDarkMode = localStorage.getItem('Theme')
    return {
      isDarkMode,
    };
  }
});
</script>

<style>
.sidebar {
  width: 350px;
  padding: 16px;
  position: fixed;
  left: 0;
  height: 100%;
  top: 0;
  border-radius: 4px;
  background: #CC95C0;
  background: -webkit-linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0);
  background: linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0);

}
.darkTheme{
  background: #3C3B3F;
  background: -webkit-linear-gradient(to right, #605C3C, #3C3B3F);
  background: linear-gradient(to right, #605C3C, #3C3B3F);
}
.itemDark{
  color: white !important;
}
.Theme{
 background-color: transparent !important;
}
.router-link-active{
  color: brown !important;
  background-color: white !important;
}

</style>