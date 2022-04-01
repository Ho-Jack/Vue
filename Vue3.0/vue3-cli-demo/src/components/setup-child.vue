<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)
defineExpose({
  a,
  b
})

const props=defineProps({
  msg:String
})
const getData=()=>{
  console.log(props.msg);
  
}

console.log('child组件');



</script>
<template>
  <p>子组件</p>
  <p>{{msg}}</p>
  <button @click='getData()'>setup里面需要props.msg获取吗</button>
</template>
<style>
</style>