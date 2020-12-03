<template>
  <div class="hello">
    <p>ref demo</p>
    <p>第一个数：{{ num1 }}</p>
    <p>第二个数：{{ num2 }}</p>
    <input v-model="num1" @change="add"> + <input v-model="num2" @change="add" /> ={{ result }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const num1 = ref(0)
    const num2 = ref(0)
    const result = ref(0)
    const add = () => {
      console.log(num1.value)
      console.log(num2.value)
      result.value = parseInt(num1.value) + parseInt(num2.value)
    }
    return {
      num1,
      num2,
      result,
      add
    }
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
