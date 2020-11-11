<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">Question</label>
      <div class="control">
        <input
          v-model="faq.question"
          class="input"
          type="text"
          name="question"
          placeholder="e.g How?"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Answer</label>
      <div class="control">
        <textarea
          v-model="faq.answer"
          class="textarea"
          rows="4"
          placeholder="e.g. Because"
          required
        ></textarea>
      </div>
    </div>
    <button type="submit" class="button is-success">
      <slot name="button"></slot>
    </button>
  </form>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    submitForm: {
      type: Function,
      default: () => {},
    },
    modelValue: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const faq = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    });

    return {
      faq
    };
  },
};
</script>

<style></style>
