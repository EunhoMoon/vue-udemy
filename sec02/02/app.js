const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : "",
    };
  },
  methods: {
    add : function (num) {
      this.counter = this.counter + num;
    },
    reduce : function (num) {
      this.counter = this.counter - num;
    },
    setName : function (event, lastName) {
      this.name = event.target.value + " " + lastName;
    }
  }
});

app.mount('#events');
