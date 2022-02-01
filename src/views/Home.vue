<template>
  <div class="home">
    <component-grid />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ComponentGrid from "../components/ComponentGrid.vue";

  export default {
    name: "Home",
    components: {
      ComponentGrid,
    },
  };
</script>
