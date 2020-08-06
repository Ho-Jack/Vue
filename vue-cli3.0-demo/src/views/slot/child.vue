<!--  -->
<template>
  <div>
      <h5>子组件</h5>
      <slot A="子组件"  name="A">A</slot><br>
       <slot name="B">B</slot>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    };
  },
  created(){
   console.log(this.$parent);
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>