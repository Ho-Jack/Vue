<template>
  <div class="hello">
    <p>ref demo</p>
    <p>第一个数：{{ num1 }}</p>
    <p>第二个数：{{ num2 }}</p>
    <input v-model="num1" /> + <input v-model="num2" /> ={{ result }}
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

    return {
      num1,
      num2,
      result
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
