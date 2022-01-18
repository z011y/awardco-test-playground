<template>
  <div class="modal-container">
    <BackButton/>
    <h1>Modal</h1>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'Modal',
  components: {
    BackButton,
  }
}
</script>

<style scoped>
  .modal-container {
    display: flex;
    height: calc(100vh - 72px);
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>