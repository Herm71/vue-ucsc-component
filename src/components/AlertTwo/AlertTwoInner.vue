<template>
  {{ items }}
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item.messsage }}</li>
  </ul>
</template>

<script>
export default {
  name: "AlertTwoInner",
  // props: ["item.class", "item.message", "item.urlMessage", "item.id"],
  props: {
    items: Array,
  },
};
</script>
