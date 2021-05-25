<template>
  <div>
    <p>Hello World Outer</p>
    <AlertTwoInner />
  </div>
</template>

<script>
import axios from "axios";
// import VueAxios from "vue-axios";
import AlertTwoInner from "./AlertTwoInner";
export default {
  name: "AlertTwo",
  components: {
    AlertTwoInner,
  },
  data() {
    return {
      goober: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("test-data.json");
      this.goober = res.data;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>