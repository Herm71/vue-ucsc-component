<template>
  <div>
    <p>Hello World Outer</p>
    <AlertTwoInner :items="items" />
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
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("test-data.json");
      this.items = res.data;
      // console.log(res.data);
    } catch (err) {
      // console.log(err);
    }
  },
};
</script>
