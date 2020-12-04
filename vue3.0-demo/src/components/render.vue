<!-- 渲染函数 / JSX 中使用 -->
<template>
  <div></div>
</template>

<script>
import { h, ref, reactive } from 'vue'

export default {
setup(){
    
   const count =ref(1111111)
   const  object=reactive({foo:'bar'})

   return ()=>h('div',[count.value,object.foo]) 
}
}

</script>
<style lang='scss' scoped>
</style>