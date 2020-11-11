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
import useFAQs from '../hooks/useFAQS';

export default {
  setup() {
    const {
      faqs, getFAQs, updateFAQ, removeFAQ
    } = useFAQs();

    getFAQs();

    return {
      faqs,
      removeFAQ,
      updateFAQ,
    };
  },
};
</script>

<style></style>
