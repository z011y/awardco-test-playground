<template>
  <div class="checkbox-container">
    <BackButton/>
    <h1>Checkbox</h1>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'Checkbox',
  components: {
    BackButton,
  }
}
</script>

<style scoped>
  .checkbox-container {
    display: flex;
    height: calc(100vh - 72px);
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>