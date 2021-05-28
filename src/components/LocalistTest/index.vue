<template>
<div> <span>test</span>
  <LocalistTestInner :events="events" />
  </div>
  
</template>

<script>
import axios from "axios";
import LocalistTestInner from "./LocalistTestInner";
export default {
  name: "LocalistTest",
  components: {
    LocalistTestInner,
  },
  
  data() {
    return {
      events: [],
      // events: null,
      // groups: null,
    };
  },
  async created() {
    try {
      const res = await axios.get("https://calendar.ucsc.edu/api/2/events?90.json");
      // const res2 = await axios.get("https://calendar.ucsc.edu/api/2/groups.json");
      this.events = res.data.events;
      // this.groups = res2.data.groups;
      console.log(res.data.events);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
