<template>
  <div class="home">
    <reactive1 @fromChild="childMessage" :toChild="state.msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import reactive1 from '@/components/reactive.vue'
 import { reactive }  from 'vue'
export default {
  name: 'Home',
  components: {
    reactive1
  },
  setup() {
     const  state=reactive({
       msg:'父组件'
     })
     console.log(state.msg);
     return {
       state
       }
  },
  methods: {
    childMessage(val) {
      console.log(val)
    }
  }
}
</script>
