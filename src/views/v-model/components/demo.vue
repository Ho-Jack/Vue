
<template>
  <div>
    <input type="text" :value="message" @input="updateVal($event.target.value)" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  model: {
    prop: "message",
    // 随便命名事件，对应下面$emit即可
    event: "changeXXX"
  },
  props: {
    message: {
      type: String,
      default: "tom"
    }
  },
  methods: {
    updateVal(val) {
      this.$emit("changeXXX", val);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>