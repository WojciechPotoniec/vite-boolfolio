<template>
  <h1>Welcome</h1>
  <ul>
    <li v-for="project in projects" :key="project.id">
      {{ project.title }}
      <img :src="store.imgBasePath + project.image" :alt="project.title">
    </li>
  </ul>
</template>

<script>
import { store } from "./store";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      store,
      projects: [],
    };
  },
  methods: {
    getAllProjects() {
      axios.get(this.store.apiBaseUrl + "/projects").then((res) => {
          console.log(res.data);
          console.log(res.data.results.image);
          this.projects = res.data.results;
        })
    },
  },
  mounted() {
    this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped></style>
