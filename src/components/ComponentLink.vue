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
  name: 'ComponentLink',
  props: {
    name: String,
    description: String,
    link: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 12px;
  background-color: white;
  transition: ease-in-out 0.15s;
}

.container:hover {
  box-shadow: 0px 2px 4px 0px #69707526;  
  background-color: #20C4F41A;
  border-color: #20C4F4;
  cursor: pointer;
}
</style>
