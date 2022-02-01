<template>
  <div class="grid-container">
    <div class="title-row">
      <h4 data-test="component-title">{{ title }}</h4>
    </div>
    <div class="content-grid">
      <div class="state-container">
        <h5
          v-for="state in states"
          :key="state.text"
          :data-test="`${state.text}-value`"
        >
          {{ `${state.text}: ${state.value}` }}
        </h5>
      </div>
      <div class="component-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ComponentGrid",
    props: {
      states: Object,
      title: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid-container {
    display: grid;
    background-color: white;
    border-radius: 12px;
    height: 256px;
    width: 100%;
    max-width: 612px;
    grid-template-rows: 57px 1fr;
    border: 1px solid #e5e7eb;
  }

  .title-row {
    padding: 16px;
    border-bottom: 1px solid #e5e7eb;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .state-container {
    display: flex;
    padding: 48px;
    flex-direction: column;
    justify-content: center;

    border-right: 1px solid #e5e7eb;
  }

  .component-container {
    display: flex;
    justify-content: center;
    padding-top: 79.5px;
  }
</style>
