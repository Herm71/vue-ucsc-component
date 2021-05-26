<template>
  <div>
    <p>Hello World Outer</p>
    <AlertTwoInner 
    v-for="(item, id) in goober"
            :class="item.class"
            :datetime="item.datetime"
            :message="item.message"
            :urlMessage="item.urlMessage"
            :url="item.url"
            :key="id"/>
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