<template>
  <div class="hello">
    <p>第一个数：{{ state.num1 }}</p>
    <p>第二个数：{{ state.num2 }}</p>
    <input v-model="state.num1" /> +   <input v-model="state.num2" /> ={{ state.result }}
    <button @click="goParent">向父组件通讯</button>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    toChild: String
  },
  setup(props, { emit }) {

    console.log(props);
    
    const goParent = () => {
      console.log(state.num1);
      
      // eslint-disable-next-line vue/custom-event-name-casing
      emit('fromChild', state.num1)
    }

    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })
    return {
      state,
      goParent
    }
  },
  data() {
    return {

    }
  },
  mounted(){
  console.log(this.msg);
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
