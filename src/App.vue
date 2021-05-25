<template>
  <AlertBanner :items="items" />
  <AlertTwo />
</template>

<script>
import AlertBanner from "./components/AlertBanner.vue";
import AlertTwo from "./components/AlertTwo/AlertTwo.vue";

export default {
  name: "App",
  components: {
    AlertBanner,
    AlertTwo,
  },
  created() {
    this.items = [
      {
        id: 1,
        message:
          "The Accellion attack impacted University of California (UC), as it previously disclosed in early April.",
        urlMessage:
          "Get the latest information about this event, our response, and available credit protection services.",
        url:
          "https://ucnet.universityofcalifornia.edu/data-security/accellion-notice.html",
        class: "ribbon-emergency",
      },
      {
        id: 2,
        message: "Stay informed:",
        urlMessage: "COVID-19 (coronavirus) information",
        url: "https://recovery.ucsc.edu/",
        class: "ribbon-alert",
      },
      {
        id: 3,
        message: "Your mom",
        urlMessage: "sucks donkey balls.",
        url: "https://recovery.ucsc.edu/",
        class: "ribbon-notice",
      },
    ];
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
