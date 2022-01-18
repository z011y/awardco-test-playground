<template>
  <div class="input-container">
    <BackButton/>
    <h1>Input</h1>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'Input',
  components: {
    BackButton,
  }
}
</script>


<style scoped>
  .input-container {
    display: flex;
    height: calc(100vh - 72px);
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>