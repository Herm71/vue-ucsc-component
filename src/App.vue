<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <AlertBanner />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AlertBanner from "./components/AlertBanner.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    AlertBanner,
  },
  data() {
    return {
      emergencyMessage1:
        "The Accellion attack impacted University of California (UC), as it previously disclosed in early April.",
      emergencyMessage2:
        "Get the latest information about this event, our response, and available credit protection services.",
      emergencyUrl:
        "https://ucnet.universityofcalifornia.edu/data-security/accellion-notice.html",
    };
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
