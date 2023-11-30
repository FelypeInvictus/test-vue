// homeLogic.js

export default {
  data() {
    return {
      isTextClicked: false
    };
  },
  methods: {
    toggleColor() {
      this.isTextClicked = !this.isTextClicked;
    }
  }
};

