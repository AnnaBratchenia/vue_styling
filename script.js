const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      classForStyleMe: "",
      hiddenClass: false,
      visibleClass: true,
      styleForButton: "",
      inputColorValue: "",
    };
  },

  methods: {
    addStyle() {
      if (this.inputValue === "user1") {
        console.log("HI");
        this.classForStyleMe = "user1";
      } else if (this.inputValue === "user2") {
        this.classForStyleMe = "user2";
      } else {
        this.classForStyleMe = "";
      }
    },
    toggleClass() {
      if (this.visibleClass) {
        this.hiddenClass = true;
        this.visibleClass = false;
      } else if (this.hiddenClass) {
        this.hiddenClass = false;
        this.visibleClass = true;
      }
    },
    addBackgroundColor() {
      console.log(this.inputColorValue);
      this.styleForButton = `background-color:${this.inputColorValue};`;
      console.log(this.styleForButton);
    },
  },
});

app.mount(".container");
