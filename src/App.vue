<template>
  <div id="app">
    <p>
      <router-link to="/todo">Go to Todo</router-link>|
      <router-link to="/about">Go to About</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
</style>

