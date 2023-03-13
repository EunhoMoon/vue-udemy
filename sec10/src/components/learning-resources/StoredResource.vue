<template>
<ul>
  <learning-resource v-for="res in resouces"
                     :key="res.id"
                     :title="res.title"
                     :description="res.description"
                     :link="res.link"
  ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from "@/components/learning-resources/LearningResource.vue";
export default {
  props: ['resouces'],
  components: {
    LearningResource
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>