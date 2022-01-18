<template>
  <div class="home">
    <ComponentGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentGrid from '../components/ComponentGrid.vue';

export default {
  name: 'Home',
  components: {
    ComponentGrid
  }
}
</script>
