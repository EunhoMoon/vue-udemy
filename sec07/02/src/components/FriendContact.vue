<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show Details" }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "010 1234 1234",
        email: "manuel@localhos.com"
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  }
};
</script>