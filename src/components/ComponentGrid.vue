<template>
  <div class="grid">
    <component-link
      name="Button"
      description="A standard button with hover state and focused state."
      link="/button"
    />
    <component-link
      name="Input"
      description="A standard input field with hover state and focused state."
      link="/input"
    />
    <component-link
      name="Checkbox"
      description="A standard checkbox with hover state and checked state."
      link="/checkbox"
    />
    <component-link
      name="Toggle"
      description="A standard toggle with hover state and true or false states."
      link="/toggle"
    />
    <component-link
      name="Dropdown"
      description="A standard dropdown with hover state and opened state."
      link="/dropdown"
    />
    <component-link
      name="Modal"
      description="A standard modal with open and closed state."
      link="/modal"
    />
    <component-link
      name="Faker"
      description="A page displaying standard data being pulled from an API."
      link="/faker"
    />
  </div>
</template>

<script>
  import ComponentLink from "./ComponentLink.vue";

  export default {
    name: "ComponentGrid",
    props: {
      name: String,
    },
    components: {
      ComponentLink,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid {
    width: 100%;
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 12px;
  }
</style>
