<template>
  <div class="dropdown-container">
    <BackButton/>
    <h1>Dropdown</h1>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'Dropdown',
  components: {
    BackButton,
  }
}
</script>

<style scoped>
  .dropdown-container {
    display: flex;
    height: calc(100vh - 72px);
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>