<template>
  <FAQForm v-model="faq" :submit-form="updateFAQ">
    <template #button>
      Update
    </template>
  </FAQForm>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import FAQForm from '../components/FAQForm.vue';
import API_URL from '../API_URL';

export default {
  name: 'Update',
  components: {
    FAQForm,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const faq = ref({
      question: '',
      answer: '',
    });
    // const API_URL = 'http://localhost:4242/api/v1/faqs';

    async function updateFAQ() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: faq.value.question,
          answer: faq.value.answer,
        }),
      });
      await response.json();
      if (response.ok) {
        router.push({ name: 'Home' });
      } else {
        console.log('error');
        // TODO: show error
      }
    }

    async function getCurrentFAQ() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      faq.value = json;
    }

    getCurrentFAQ();

    return {
      faq,
      updateFAQ,
    };
  },
};
</script>

<style></style>
