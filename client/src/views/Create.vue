<template>
  <form @submit.prevent="createFAQ">
    <div class="field">
      <label class="label">Question</label>
      <div class="control">
        <input
          v-model="question"
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
          v-model="answer"
          class="textarea"
          rows="4"
          placeholder="e.g. Because"
          required
        ></textarea>
      </div>
    </div>
    <button type="submit" class="button is-success">Create</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Create',
  setup() {
    const router = useRouter();
    const question = ref('');
    const answer = ref('');
    const API_URL = 'http://localhost:4242/api/v1/faqs';

    async function createFAQ() {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.value,
          answer: answer.value
        }),
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        router.push({ name: 'Home' });
      } else {
        // TODO: show error
      }
    }

    return {
      question,
      answer,
      createFAQ,
    };
  },
};
</script>

<style></style>
