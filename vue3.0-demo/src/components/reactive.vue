<template>
  <div class="hello">
    <p>第一个数：{{ state.num1 }}</p>
    <p>第二个数：{{ state.num2 }}</p>
    <input v-model="state.num1" /> +   <input v-model="state.num2" /> ={{ state.result }}

  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })
    return {
      state
    }
  },
  data() {
    return {

    }
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
