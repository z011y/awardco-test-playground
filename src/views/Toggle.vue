<template>
  <div class="toggle-container">
    <BackButton/>
    <h1>Toggle</h1>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'Toggle',
  components: {
    BackButton,
  }
}
</script>

<style scoped>
  .toggle-container {
    display: flex;
    height: calc(100vh - 72px);
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>