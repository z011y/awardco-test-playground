<template>
  <div class="container">
    <back-button />
    <component-layout
      :states="[{ text: 'state value name', value: 'state value' }]"
      title="Component Title Here"
    >
      <!-- your component goes here -->
    </component-layout>
  </div>
</template>

<script>
  import BackButton from "../components/BackButton.vue";
  import ComponentLayout from "../components/ComponentLayout.vue";

  export default {
    name: "Button",
    components: {
      BackButton,
      ComponentLayout,
    },
    data() {
      return {
        // define state here
      };
    },
    methods: {
      // define methods here
    },
  };
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
