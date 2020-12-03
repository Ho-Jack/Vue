<template>
  <div class="home">
    <reactive @fromChild="childMessage" />
  </div>
</template>

<script>
// @ is an alias to /src
import reactive from '@/components/reactive.vue'

export default {
  name: 'Home',
  components: {
    reactive
  },
  methods: {
    childMessage(val) {
      console.log(val)
    }
  }
}
</script>
