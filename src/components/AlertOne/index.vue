<template>
  <AlertOneInner :items="items" />
</template>
<script>
import axios from "axios";
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
      const res = await axios.get("data.json");
      this.items = res.data;
      console.log(res.data);
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
