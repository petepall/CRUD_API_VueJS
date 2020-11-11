<template>
  <FAQForm v-model="faq" :submit-form="createFAQ" >
    <template #button>
      Create
    </template>
  </FAQForm>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import FAQForm from '../components/FAQForm.vue';

export default {
  name: 'Create',
  components: {
    FAQForm,
  },

  setup() {
    const router = useRouter();
    const faq = reactive({
      question: '',
      answer: ''
    });
    const API_URL = 'http://localhost:4242/api/v1/faqs';

    async function createFAQ() {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: faq.question,
          answer: faq.answer,
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
      faq,
      createFAQ,
    };
  },
};
</script>

<style></style>
