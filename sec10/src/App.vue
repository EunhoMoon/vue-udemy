<template>
  <the-header title="RememberMe"></the-header>
  <stored-resource :resouces="storedResources"></stored-resource>
</template>

<script>

import StoredResource from "@/components/learning-resources/StoredResources.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
    StoredResource
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official_guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>