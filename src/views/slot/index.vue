<!-- 爸爸 -->
<template>
  <div>
<child>
    <template #A="Slotprops" >
        {{Slotprops.A}}
    </template>
    </child>
  </div>
</template>

<script>
import child from './child';
export default {
  components: {child},
  data () {
    return {
      name:'爸爸'
    };
  },
  created(){
  
     
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>