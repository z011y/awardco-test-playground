<template>
    <router-link to="/" data-test="back-button">
        <div class="back" >
            <ph-arrow-left  weight="bold" :size="18"/>
            <span class="back-text">Back</span>
        </div>
    </router-link>
</template>

<script>
import {PhArrowLeft} from 'phosphor-vue';

export default {
    name: 'BackButton',
    components: {
        PhArrowLeft
    }
}
</script>

<style scoped>
  .back {
    position: fixed;
    top: 96px;
    left: 24px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    width: 72px;
  }

  .back-text {
    transform: translateX(-8px);
    transition: ease-in-out .15s;
  }

  .back:hover .back-text {
    transform: none;
    cursor: pointer;
  }

  .back:hover {
    cursor: pointer;
  }
</style>