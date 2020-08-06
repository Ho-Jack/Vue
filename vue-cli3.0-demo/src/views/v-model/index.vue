<!--  -->
<template>
  <div>
    <!-- <input  type="text" v-model="message"/> <br/> -->
    <!-- <input  type="text" :value="message" @input="message =  $event.target.value "/> -->
   <myInput v-model="message"></myInput>
    <p>{{message}}</p>
  </div>
</template>

<script>
import myInput from './components/demo'
export default {
  data () {
    return {
      message:''
    };
  },

  components: {myInput},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>