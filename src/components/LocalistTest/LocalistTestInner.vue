<template>
  <ul v-for="event in events" :key="event.id">
    <li class="">
      <img :src="event.event.photo_url">
      <a :href="event.event.url">{{ event.event.title }}</a>
      <span v-html="event.event.description"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LocalistTestInner",
  // props: ["title", "id"],
  props: {
    events: Array,
  },
};
</script>

<style></style>
