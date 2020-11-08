<template>
  <FAQForm :faq="faq" :submit-form="createFAQ" />
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FAQForm from '../components/FAQForm.vue';

export default {
  name: 'Create',
  components: {
    FAQForm,
  },

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
          answer: answer.value,
        }),
      });
      await response.json();
      if (response.ok) {
        router.push({ name: 'Home' });
      } else {
        // TODO: show error
      }
    }

    return {
      faq: {
        question,
        answer,
      },
      createFAQ,
    };
  },
};
</script>

<style></style>
