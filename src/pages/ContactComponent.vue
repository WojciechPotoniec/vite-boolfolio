<template>
  <h1>Contact Us</h1>
  <div class="row">
    <form @submit.prevent="sendForm()" class="col-12 text-start">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          name="name"
          type="text"
          class="form-control border-0 border-bottom"
          id="name"
          placeholder="Enter your name"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          name="email"
          type="text"
          class="form-control border-0 border-bottom"
          id="email"
          placeholder="Enter your email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Write your message</label>
        <textarea
          name="message"
          class="form-control border-0 border-bottom"
          id="message"
          placeholder="Enter your text"
          cols="30"
          rows="10"
          v-model="message"
        >
        </textarea>
        <button type="submit" class="btn btn-lg btn-primary text-white">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "ContactComponent",
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendForm() {
      console.log('sendForm');
        const data = {
            name: this.name,
            email: this.email,
            message: this.message
        }

      // console.log(data);
      axios
        .post(`${this.store.apiBaseUrl}/contacts`, data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
