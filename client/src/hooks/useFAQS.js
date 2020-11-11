import { ref } from 'vue';
import { useRouter } from 'vue-router';

// eslint-disable-next-line import/extensions
import API_URL from '../API_URL.js';

export default function useFAQs() {
  const faqs = ref([]);
  const router = useRouter();

  async function getFAQs() {
    const response = await fetch(API_URL);
    const json = await response.json();
    faqs.value = json;
  }

  async function removeFAQ(_id) {
    await fetch(`${API_URL}/${_id}`, {
      method: 'DELETE',
    });
    getFAQs();
  }

  async function updateFAQ(_id) {
    router.push({
      name: 'update',
      params: {
        id: _id,
      },
    });
  }

  return {
    faqs,
    getFAQs,
    updateFAQ,
    removeFAQ
  };
}
