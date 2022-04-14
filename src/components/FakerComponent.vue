<template>
<div>
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
    mounted () {
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => (this.fake = response.data))
    },
}
</script>

<style scoped>
</style>