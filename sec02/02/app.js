const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : "",
      confirmedName: "",
    };
  },
  computed: {
    fullName() {
      console.log("Running again...")
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Moon";
    }
  },
  methods: {
    resetInput: function() {
      this.name = "";
    },
    confirmInput: function() {
      this.confirmedName = this.name;
    },
    submitForm: function() {
      alert("Submitted!");
    },
    add : function (num) {
      this.counter = this.counter + num;
    },
    reduce : function (num) {
      this.counter = this.counter - num;
    },
    setName : function (event, lastName) {
      this.name = event.target.value;
    },
    outputFullname: function() {
      console.log("Running again...")
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Moon";
    }
  }
});

app.mount('#events');
