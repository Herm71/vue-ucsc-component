<template>
  <div
    v-for="(item, id) in items"
    :key="id"
    :class="item.class"
    :message="item.message"
    :url="item.url"
    :urlMessage="item.urlMessage"
    class="ribbon-wrap"
  >
    <div class="ribbon {{class}}" role="complementary">
      <div class="inner">
        {{ message }}
        <a :href="item.url">{{ urlMessage }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertTwoInner",
  props: ["class", "message", "urlMessage", "id"],
  // props: {
  //   items: Array,
  // },
};
</script>
