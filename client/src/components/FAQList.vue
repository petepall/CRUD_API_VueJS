<template>
  <div>
    <div v-for="faq in faqs" :key="faq._id" class="card mt-3">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ faq.question }}</p>
          </div>
        </div>

        <div class="content">
          {{ faq.answer }}
        </div>
        <button class="button is-success" @click="updateFAQ(faq._id)">
          <span class="icon is-small">
            <i class="fas fa-edit"></i>
          </span>
          <span>Update</span>
        </button>
        <button
          class="button is-danger is-outlined ml-3"
          @click="removeFAQ(faq._id)"
        >
          <span>Remove</span>
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

import useFAQs from '../hooks/useFAQS';
import API_URL from '../API_URL';

export default {
  setup() {
    const router = useRouter();
    const { faqs, getFAQs } = useFAQs();

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
          id: _id
        }
      });
    }

    getFAQs();

    return {
      faqs,
      removeFAQ,
      updateFAQ
    };
  },
};
</script>

<style></style>
