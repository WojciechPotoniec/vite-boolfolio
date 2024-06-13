<template>
  
  <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">
                    <i class="bi bi-box"></i>Boolfolio
                </router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    @click="show = !show">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" :class="{ 'show': show }" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(link, index) in links" :key="index">
                            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                            <router-link :to="{ name: link.routeName }" class="nav-link" active-class="active">
                                {{ link.label }}
                            </router-link>
                        </li>

                    </ul>
                    <div class="ms-auto">
                        <a href="http://localhost:8000" class="nav-link">
                            <i class="fa-solid fa-user"></i> <span>Area Riservata</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      links: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Projects",
          routeName: "projects",
        },
        {
          label: "Contact Us",
          routeName: "contact",
        },
        {
          label: "About Us",
          routeName: "about",
        }
      ],
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
