<template>
  <AlertTwoInner
    v-for="(item, index) in items"
    :key="index"
    :message="item.message"
    :url="item.url"
    :class="item.class"
    :id="item.id"
    :urlMessage="item.urlMessage"
  />
</template>

<script>
import axios from "axios";
import AlertTwoInner from "./AlertTwoInner";
export default {
  name: "AlertTwo",
  components: {
    AlertTwoInner,
  },
  data() {
    return {
      items: [],
      // items: null,
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
