<script>
import { ref } from 'vue'
export default {
  props: ['msg'],
  setup(props, { attrs, emit, slots }) {
    const a = 1
    const b = ref(2)
    const getData = () => {
      console.log(props.msg);
    }
    console.log('child组件');
    
    return {
      a,
      b,
      getData
    }
  }
}
</script>
<template>
  <p>子组件</p>
  <p>{{ msg }}</p>
  <button @click="getData()">setup里面需要props.msg获取吗</button>
</template>
<style>
</style>