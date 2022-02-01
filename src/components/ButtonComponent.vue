<template>
  <div class="button-wrapper">
    <button
      class="button"
      @click="submit()"
      :disabled="submitted"
      data-test="button"
    >
      <ph-arrow-circle-up
        v-if="!submitted && !loading"
        :size="20"
        style="margin-right: 8px"
      />
      <ph-circle-notch
        v-if="loading"
        :size="20"
        style="margin-right: 8px"
        class="rotate"
      />
      <ph-check-circle v-if="submitted" :size="20" style="margin-right: 8px" />
      <div v-if="!submitted && !loading">Submit</div>
      <div v-if="loading">Submitting...</div>
      <div v-if="submitted">Submitted</div>
    </button>
    <div class="reset" v-show="submitted" @click="reset()" data-test="reset">
      Reset
    </div>
  </div>
</template>

<script>
  import { PhArrowCircleUp, PhCircleNotch, PhCheckCircle } from "phosphor-vue";

  export default {
    name: "ButtonComponent",

    components: {
      PhArrowCircleUp,
      PhCircleNotch,
      PhCheckCircle,
    },
    methods: {
      submit() {
        this.$emit("onSubmit");
      },
      reset() {
        this.$emit("onReset");
      },
    },
    props: {
      submitted: {
        type: Boolean,
      },
      loading: {
        type: Boolean,
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .rotate {
    animation: rotation 1s infinite linear;
  }

  .reset {
    margin-top: 8px;
  }

  .reset:hover {
    cursor: pointer;
  }
</style>
