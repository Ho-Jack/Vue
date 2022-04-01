<script setup>
// import { ref } from 'vue'
// import Child from './components/child.vue'
// import SetupChild from './components/setup-child.vue'
// const childRef = ref()
// const msg =ref('父组件传递过来的')
// const ifshow=ref(false)
// const getChildData = () => {
//   //子组件接收暴露出来得值
//   console.log(childRef.value);
//   console.log(childRef.value.a) //1
//   console.log(childRef.value.b) //2
//   ifshow.value=!ifshow.value
// }

</script>

<template>
  <!-- <div>父组件</div>
  <Child ref="childRef"  :msg='msg'/>
  <SetupChild ref="childRef"  :msg='msg'/>
  <Child v-if='ifshow' ref="childRef"  :msg='msg'/>
  <SetupChild  v-if='ifshow' ref="childRef"  :msg='msg'/>
  <button @click="getChildData()">通过ref获取子组件的属性</button>-->
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/slot">slot</router-link>|
      <router-link to="/myHook">myHook</router-link>|
      <router-link to="/script-setup">script-setup</router-link>|

      
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
