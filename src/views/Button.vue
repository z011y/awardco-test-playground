<template>
  <div class="container">
    <back-button />
    <component-layout
      :states="[
        { text: 'submitted', value: submitted },
        { text: 'loading', value: loading },
      ]"
      title="Button"
    >
      <button-component
        :submitted="submitted"
        :loading="loading"
        @onSubmit="onSubmit"
        @onReset="onReset"
      />
    </component-layout>
  </div>
</template>

<script>
  import BackButton from "../components/BackButton.vue";
  import ButtonComponent from "../components/ButtonComponent.vue";
  import ComponentLayout from "../components/ComponentLayout.vue";

  export default {
    name: "Button",
    components: {
      BackButton,
      ButtonComponent,
      ComponentLayout,
    },
    data() {
      return {
        submitted: false,
        loading: false,
      };
    },
    methods: {
      onSubmit() {
        this.loading = true;
        this.submitted = false;
        setTimeout(() => {
          this.submitted = true;
          this.loading = false;
          () =>
            document.getElementsByClassName("button").setAttribute("disabled");
        }, 3000);
      },
      onReset() {
        this.loading = false;
        this.submitted = false;
      },
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
