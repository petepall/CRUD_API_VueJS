import { ref } from 'vue';

// eslint-disable-next-line import/extensions
import API_URL from '../API_URL.js';

export default function useFAQs() {
  const faqs = ref([]);

  async function getFAQs() {
    const response = await fetch(API_URL);
    const json = await response.json();
    faqs.value = json;
  }

  return {
    faqs,
    getFAQs
  };
}
