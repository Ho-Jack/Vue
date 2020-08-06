<template>
  <div class="about">
    <h1>This is an about page</h1>
    <icon-svg icon-class="mima">111</icon-svg>
    <span>{{fullName}}</span>
    <!--    <span>  {{}}</span>-->
    姓：<input v-model="firstName">
    姓名：<input v-model="fullName">
    <button @click="obj.a += 2">修改</button>
  </div>
</template>
<script>
//import  '../icons/svg/mima.svg';
export default {
  data () {
    return {
      firstName: 11,
      lastName: 22,
      obj: {
        a: 1,
      }
      // fullName:''
    }
  },
  mounted () {

  },
  computed: {
    fullName: {
      get () {
        return this.firstName + "" + this.lastName
      },
      set (val) {
        //debugger
        this.firstName = "姓" + val
        return ("姓名" + val)
      }
    }
  },
  watch: {
    obj: {
      handler: function (newVal, oldVal) {
        console.log(newVal);
      },
      // deep: true,
      immediate: true
    }

    // firstName(val){
    //   return    this.fullName= '姓：'+val
    // }
  },
  methods: {
    // async f () {
    //   // await setTimeout(() => {
    //   //   console.log("1111")
    //   // }, 1000)

    //   console.log("222")
    // }

  }
}
</script>