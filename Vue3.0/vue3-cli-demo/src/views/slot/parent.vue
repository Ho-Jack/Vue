<template>
  <Child msg="非porps传值子组件用attrs接收" >
    <!-- 匿名插槽 -->
    <span >默认插槽</span>
    <!-- 具名插槽 -->
    <template #title>
      <h1>具名插槽</h1>
    </template>
    <!-- 作用域插槽 -->
    <template #footer="{ scope }">
      <footer>作用域插槽——姓名：{{ scope.name }}，年龄{{ scope.age }}</footer>
    </template>
  </Child>
  <Child msg="非porps传值子组件用attrs接收" >
    <!-- 匿名插槽 -->
    <span >默认插槽</span>
    <!-- 具名插槽 -->
    <template #title>
      <h1>具名插槽</h1>
    </template>
    <!-- 作用域插槽 -->
    <template #footer="{ scope }">
      <footer>作用域插槽——姓名：{{ scope.name }}，年龄{{ scope.age }}</footer>
    </template>
  </Child>
</template>

<script setup>
// 引入子组件
// import Child from './child.vue'
import Child from './child1.vue'

</script>
