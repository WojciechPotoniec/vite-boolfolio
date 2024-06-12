<template>
  <h1>Project Detail</h1>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="getImage"
          class="img-fluid rounded-start"
          :alt="project.title"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text" v-html="project.content"></p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Last updated: {{ project.updated_at }}</small
            >
          </p>
          <!-- <span class="badge rounded-pill text-bg-warning me-3">{{ card.category?.name }}</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "ProjectComponent",

  data() {
    return {
      store,
      project: [],
    };
  },
  methods: {
    getProject() {
      axios
        .get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`)
        .then((res) => {
          console.log(res.data.results);
          this.project = res.data.results;
        })
        .catch((error) => {
          // console.log(error);
          // console.log(error.response.data);
          this.$router.push({ name: "notfound" });
        })
        .finally();
    },
  },
  computed: {
    getImage() {
      return this.project.image
        ? this.store.imgBasePath + this.project.image
        : "https://picsum.photos/200/300";
    },
  },
  mounted() {
    this.getProject();
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // react to route changes...
        this.getProject();
      }
    );
  },
};
</script>

<style lang="scss" scoped></style>
