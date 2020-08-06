<template>
  <div id="app">
    <child :num="d" @change="doThat(e,$event)"></child>{{d}}
    <!-- <button v-on:click="doThat('hello', $event)"></button> -->
  </div>
</template>
 
<script>
import child from './child'
 
export default {
  name: 'app',
  data () {
    return {
      d:1
    }
  },
  components: {
    child
  },
  methods:{
doThat(e,$event){
    debugger
this.d = $event
}
  }
}
 
</script>
 
<style>

</style>