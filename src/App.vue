<template>
  <div id="app">
    <h1>{{title}}</h1>
    <!-- Search Form -->
    <form @submit.prevent="formSubmitted()" >
      <label for="searchTerm">Search Term</label>
      <input v-model="searchTerm" class="u-full-width" type="text" id="searchTerm" name="searchTerm">
      <button type="submit">Search</button>
    </form>
    <!-- Loading image -->
    <img v-if="loading" src="./loading-vanilla.gif" alt="loading-image">
    <!-- Images Section -->
    <section class="imageSection">
        <img v-for="image in images" :key="image.id" :src="image.urls.thumb" />
    </section>

  </div>
</template>


<script>
import API from './API';
export default {
  name: 'app',
  data() {
    return {
      title: "🍦 Vanilla VueJS... ⚡",
      searchTerm: "",
      images: [],
      loading: false
    }

  },
  methods: {
    formSubmitted() {
      this.loading = true;
      API.search(this.searchTerm)
        .then(images => {
          this.images = images
          this.loading = false
        })
    }
  }
}
</script>

<style>
body {
  width: 80%;
  margin: 2em auto 0 auto;
}
img {
  width: 100%;
}
.imageSection {
  column-count: 4;
}
</style>
