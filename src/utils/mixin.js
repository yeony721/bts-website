export default{
  data() {
    return {
      isModalShow: false
    }
  },
  methods: {
    showModal() {
      this.isModalShow = true;
    },
    closeModal() {
      this.isModalShow = false;
    }
  }
}