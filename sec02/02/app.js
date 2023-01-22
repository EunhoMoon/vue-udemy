const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: "",
            lastName: "",
            // fullName: "",
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000)
            }
        }
        // name(value) {
        //     if (value === "") {
        //         this.fullName = "";
        //     } else {
        //         this.fullName = value + " " + this.lastName;
        //     }
        // },
        // lastName(value) {
        //     if (value === "") {
        //         this.fullName = "";
        //     } else {
        //         this.fullName = this.name + " " + value;
        //     }
        // }
    },
    computed: {
        fullName() {
          console.log("Running again...")
          if (this.name === "" || this.lastName === "") {
            return "";
          }
          return this.name + " " + this.lastName;
        }
    },
    methods: {
        resetInput: function () {
            this.name = "";
        },
        confirmInput: function () {
            this.confirmedName = this.name;
        },
        submitForm: function () {
            alert("Submitted!");
        },
        add: function (num) {
            this.counter = this.counter + num;
        },
        reduce: function (num) {
            this.counter = this.counter - num;
        },
        setName: function (event, lastName) {
            this.name = event.target.value;
        },
        outputFullname: function () {
            console.log("Running again...")
            if (this.name === "") {
                return "";
            }
            return this.name + " " + "Moon";
        }
    }
});

app.mount('#events');
