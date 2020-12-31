<template>
  <div class="card" style="border-top: none; border-left: none; border-right: none; border-radius: 0;">
    <div class="card-body pd-25">
      <div class="d-block d-sm-flex">
        <div class="pd-sm-t-0"  style="width:100%;">
          <span class="d-block tx-14 tx-color-03 pd-b-2"> 게시판 > 기술지원 게시판 > 기술지원 이력 </span>
          <div class="d-flex justify-content-start">
            <h5>
              {{ postTitle }}
              <i class="far fa-comment-dots mg-l-5 mg-r-5"></i>{{ commentCnt }}
            </h5>
            <a href="" class="avatar" style="margin-left: auto; "
              ><img
                src="https://via.placeholder.com/500"
                class="rounded-circle"
                alt=""
                style="width: 30px; height:30px"
            /></a>
            <span
              class="tx-color-03"
              style="align-items: center;"
              >{{ regUserId }}
            </span>
            <span
              class="mg-l-15 tx-color-03"
              style="align-items: center;"
              >{{ regDtm }}</span
            >
          </div>
          <span class="d-block tx-14 tx-color-03"> {{ content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    postTitle: String,
    postContent: String,
    regUserId: String,
    regDtm: String,
    commentCnt: Number,
  },
  data() {
    return {
      content : String
    }
  },
  mounted() {
    this.content = this.postContent.replace(/(<([^>]+)>)/ig,"");
  }
};
</script>
