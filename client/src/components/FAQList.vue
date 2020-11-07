<template>
  <div>
    <div
v-for="faq in faqs"
:key="faq._id"
class="card mt-3"
>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ faq.question }}</p>
          </div>
        </div>

        <div class="content">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const faqs = ref([]);

    const API_URL = 'http://localhost:4242/api/v1/faqs';

    async function getFAQs() {
      const response = await fetch(API_URL);
      const json = await response.json();
      faqs.value = json;
    }

    getFAQs();

    return {
      faqs,
    };
  },
};
</script>

<style></style>
