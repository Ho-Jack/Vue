<template>
  <button @click="fn">{{cur}}</button>
</template>
 
<script>
  export default {
    name: "blog",
    props: ['num'],
    data(){
      return {
        cur: 0
      }
    },
    created(){
      this.cur = this.num
    },
    methods:{
      fn(){
        this.cur ++
        this.$emit('change',this.cur)
      }
    }
  }
</script>
 
<style scoped>
 
</style>