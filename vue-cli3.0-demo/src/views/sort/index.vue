<!--  -->
<template>
  <div>
    姓：
    <input type="text" placeholder="firstName" v-model="firstName" />
    <br/>名：
    <input type="text" placeholder="lastName" v-model="lastName" />
    <br/>

    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import data from "./data";
export default {
  data() {
    return {
      firstName: "A",
      lastName: "B"
    };
  },

  mounted() {
    //  console.log(data)
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  methods: {
    arrayEqual: function(source, target) {
        return source.length == target.length && source.every((item, index) => item.op == target[index].op)
    }
  }
};
</script>
<style lang='scss' scoped>
</style>