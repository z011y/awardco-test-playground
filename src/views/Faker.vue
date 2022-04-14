<template>
  <div class="container">
      <back-button />
      <component-layout
        title="Faker"
      >
          <faker-component />
      </component-layout>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import ComponentLayout from "../components/ComponentLayout.vue";
import FakerComponent from '../components/FakerComponent.vue';

export default {
    name: "Faker",
    components: {
      BackButton,
      ComponentLayout,
      FakerComponent,
    },

}
</script>

<style scoped>
    .container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 72px);
    justify-content: center;
    align-items: center;
    padding: 48px;
  }
</style>