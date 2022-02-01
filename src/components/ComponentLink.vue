<template>
  <router-link :to="link" :data-test="`${name.toLowerCase()}-link`">
    <div class="container">
      <h3>{{ name }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "ComponentLink",
    props: {
      name: String,
      description: String,
      link: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px;
    background-color: white;
    transition: ease-in-out 0.15s;
  }

  .container:hover {
    box-shadow: 0px 2px 4px 0px #69707526;
    background-color: #20c4f41a;
    border-color: #20c4f4;
    cursor: pointer;
  }
</style>
