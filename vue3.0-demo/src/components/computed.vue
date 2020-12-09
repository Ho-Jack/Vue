<!-- computed -->
<template>
  <div>

    <el-progress
      v-loading="true"
      type="circle"
      element-loading-background="rgba(0, 0, 0, 0)"
      :percentage="0"
      :width="20"
      :show-text="false"
    />

    <el-input v-model="firstName" />
    <el-input v-model="lastName" />
    <p>  {{ fullName }}</p>
    <!-- fullName 是一个computed 给它赋值只能触发setter  无法成功赋值 -->
    <el-button @click="()=>{fullName='Hello World'}">Hello World</el-button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const fullName = computed({
      get: () => firstName.value + lastName.value,
      set: (value) => {
        console.log(value)
        console.log('setter')
        console.log(fullName)
        return value
      }
    })
    //    const first=computed({
    //         get:()=>{
    //             console.log('getter');
    //             return  firstName.value
    //         },
    //         set:(value)=>{
    //             console.log(value);
    //             console.log('setter');
    //             return value
    //         }
    //     })
    return {
      firstName,
      lastName,
      fullName
    //  first
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
