<template>
  <div
    class="d-flex align-items-center justify-content-start pd-10"
    style="display: inline-flex;"
  >
    <a href="" class="avatar mg-l-5"
      ><img
        src="https://via.placeholder.com/500"
        class="rounded-circle"
        alt=""
        style="width: 30px; height:30px"
    /></a>
    <div style="width:100%" class="pd-5">
      <span class="mg-l-5">{{ regUserId }}</span>
      <span class="tx-color-03">{{ regDtm }}</span>
        <textarea name="commentInfo" class="form-control show-textarea" rows="1" v-model='context'></textarea>
    </div>
      <button
        class="btn btn-sm pd-x-10 btn-white btn-uppercase mg-r-5"
        v-on:click="editComment()"
        style="word-break: keep-all;"
      >
        수정
      </button>
      <button
        class="btn btn-sm pd-x-10 btn-white btn-uppercase mg-r-15"
        v-on:click="deleteComment()"
        style="word-break: keep-all;"
      >
        삭제
      </button>
  </div>
</template>
<script>
export default {
  props: {
    boardComment : String,
    commentNo: Number,
    regUserId: String,
    regDtm: String
  },
  data() {
      return {
          context: '',
          editmode: false,
      }
  },
  methods: {
    editComment() {
        this.editmode = !this.editmode;

        if(this.editmode){
            this.$emit("edit");
        }
        else{
            this.$emit("editfinish");
            this.$emit("change", this.context, this.commentNo);
        }
    },
    deleteComment() {
      this.$emit("delete");
    },
  },
  mounted() {
      this.context = this.boardComment;
  }
};
</script>
<style scoped>
.show-textarea {
  border: none; 
  pointer-events: none;
  resize: none;
}
</style>