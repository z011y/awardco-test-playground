<template>
<div>
    <button class="button" v-on:click="getFaker">Get Data</button>
    <div id="containerData" v-for="user in fake" :key="user.id">
        <p>{{ user.name }}</p>
        <p><i>{{ user.catchPhrase}}</i></p>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: "FakerComponent",
    data () {
        return {
            fake: null
        }
    },
    methods: {
        getFaker: function () {
            axios
                .get('https://jsonplaceholder.typicode.com/users/1')
                .then(response => (this.fake = response.data))
            
        }
    }
}
</script>

<style scoped>
  .component-container[data-v-314b4107] {
    padding-top: 0;
  }
    .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;

    height: 40px;
    color: white;
    font-size: 16px;

    background: #111827;
    border-radius: 20px;
    transition: 0.25s ease-in-out;
    border: none;
  }

  .button:hover {
    cursor: pointer;
    background: #000;
  }

  .button:disabled {
    opacity: 0.4;
  }

  .button:disabled:hover {
    cursor: not-allowed;
  }
</style>