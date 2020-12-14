export default{
  data() {
    return {
      isModalShow: false,
    }
  },
  methods: {
    showModal() {
      this.isModalShow = true;
    },
    closeModal() {
      $("#modalEditContact").modal("hide");
      this.isModalShow = false;
    }
  }
}
