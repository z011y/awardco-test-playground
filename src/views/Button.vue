<template>
  <div class="button-container">
    <BackButton/>
    <h1>Button</h1>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'Button',
  components: {
    BackButton,
  }
}
</script>

<style scoped>
  .button-container {
    display: flex;
    height: calc(100vh - 72px);
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>