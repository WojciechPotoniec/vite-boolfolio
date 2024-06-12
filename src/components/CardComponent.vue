<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="getImage" class="img-fluid rounded-start" :alt="card.title"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text" v-html="card.content"></p>
          <p class="card-text">
            <small class="text-body-secondary">Last updated: {{ card.updated_at }}</small></p>
          <!-- <span class="badge rounded-pill text-bg-warning me-3">{{ card.category?.name }}</span> -->
          <RouterLink :to="{ name: 'project', params: { slug: card.slug } }" class="btn btn-success">
            Leggi articolo
            </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CardComponent",
  props: ["card"],
  data() {
    return {
      store,
    };
  },
  computed: {
    getImage() {
            return this.card.image ? this.store.imgBasePath + this.card.image : 'https://picsum.photos/200/300';
        }
  },
};
</script>

<style lang="scss" scoped></style>
