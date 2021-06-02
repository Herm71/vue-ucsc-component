<template>
  <AlertOneInner :items="items" />
</template>
<script>
// import axios from "axios";
import AlertOneInner from "./AlertOneInner";
export default {
  name: "AlertOne",
  components: {
    AlertOneInner,
  },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      this.items = [
        {
          id: 1,
          message:
            "The Accellion attack impacted University of California (UC), as it previously disclosed in early April.",
          urlMessage:
            "Get the latest information about this event, our response, and available credit protection services.",
          url: "https://ucnet.universityofcalifornia.edu/data-security/accellion-notice.html",
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
          urlMessage: "has a mustache.",
          url: "https://recovery.ucsc.edu/",
          class: "ribbon-notice",
        },
      ]; console.log(this.items);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style scoped lang="scss">
.ribbon-wrap {
  padding: 0.35em;
  text-align: center;
  background-color: $white;
  color: #666666;
  font-size: 18px;
}

.ribbon {
  padding: 0.85em 1em 0.85em 1em;
  margin-bottom: 0;
  background-color: $ribbon-background;
  border-bottom: 2px solid $ribbon-border;
  color: $ribbon-color;
  font-size: 15px !important;
  text-align: center;
  p {
    margin: 0.75em 0;
  }
  a {
    font-weight: 600;
    text-decoration: underline;
  }
  .inner {
    max-width: 48em;
    margin: 0 auto;
  }
}

.ribbon-emergency {
  background-color: $emergency-background;
  border-color: $emergency-border;
  color: $emergency-color;
}
.ribbon-alert {
  background-color: $alert-background;
  border-color: $alert-border;
  color: $alert-color;
}
.ribbon-notice {
  background-color: $notice-background;
  border-color: $notice-border;
  color: $notice-color;
}

@media screen and (min-width: 48em) {
  .ribbon {
    font-size: 24px;
  }
}
</style>
