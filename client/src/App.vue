<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <UserLogin msg="Welcome to Your Vue.js App sadsdad" />
</template>

<script>
import UserLogin from "./components/UserLogin.vue";

export default {
  name: "App",
  components: {
    UserLogin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
