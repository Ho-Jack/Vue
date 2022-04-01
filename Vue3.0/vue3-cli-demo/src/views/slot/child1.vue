<template>
  <!-- 匿名插槽 -->
  <slot />
  <!-- 具名插槽 -->
  <slot name="title" />
  <!-- 作用域插槽 -->
  <slot name="footer" :scope="state" />
  <!-- $attrs 用来获取父组件中非props的传递到子组件的参数 -->
  <p>{{ attrs.msg == $attrs.msg }}</p>
  <!--true  没想到有啥作用... -->
  <p>{{ slots == $slots }}</p>
</template>

  
<script setup>
import { useSlots, useAttrs, reactive, toRef } from 'vue'
const state = reactive({
  name: '张三',
  age: '18'
})

const slots = useSlots()
console.log(slots.default()); //获取到默认插槽的虚拟dom对象
console.log(slots.title());   //获取到具名title插槽的虚拟dom对象
// console.log(slots.footer()); //报错  不知道为啥有插槽作用域的无法获取
//useAttrs() 用来获取父组件传递的过来的属性数据的（也就是非 props 的属性值）。
const attrs = useAttrs()

</script>

