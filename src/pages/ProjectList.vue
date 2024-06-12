<template>
  <h1>Project List</h1>
  <div class="row">
    <div class="col-12 col-lg-6" v-for="project in projects" :key="project.id">
      <CardComponent :card="project" />
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import { store } from "../store";
import axios from "axios";
export default {
  name: "ProjectList",
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
      projects: [],
      params: null
    };
  },
  methods: {
    getAllProjects() {
      axios
        .get(this.store.apiBaseUrl + "/projects")
        .then((res) => {
          console.log(res.data);
          this.projects = res.data.results;
        })
        .catch((err) => {
          // console.log(err);
          // console.log(err.response.data);
          this.$router.push({ name: "NotFound" });
        })
        .finally(() => {
          console.log("finally");
        });
    },
  },
  mounted() {
    this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped></style>
