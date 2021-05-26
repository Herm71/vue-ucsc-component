<template>
  <div class="ribbon-wrap">
    <div class="ribbon" :class="class" role="complementary">
      <div class="inner">
        {{ message }}
        <a :href="url">{{ urlMessage }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertTwoInner",
  props: [""]
  },
};
</script>
