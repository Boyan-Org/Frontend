<template>
  <div id="app">
    <AccountInput />
  </div>
</template>

<script>
import AccountInput from "./components/AccountInput.vue";

export default {
  name: "App",
  components: {
    AccountInput,
  },
};
</script>


<style>
html,
body {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  height: 100%;
}

#app {
  text-align: center;
}
</style>