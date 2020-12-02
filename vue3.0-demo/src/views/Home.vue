<template>
  <div class="home">
    <reactive />
  </div>
</template>

<script>
// @ is an alias to /src
import reactive from '@/components/reactive.vue'

export default {
  name: 'Home',
  components: {
    reactive
  }
}
</script>
