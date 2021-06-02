<template>
  <AlertOne />
  <span>-------------</span>
  <AlertTwo />
</template>

<script>
import AlertOne from "@/components/AlertOne";
import AlertTwo from "@/components/AlertTwo/AlertTwo";

export default {
  name: "App",
  components: {
    AlertOne,
    AlertTwo,
  },
  
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
