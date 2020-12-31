<template>
  <div class="content ht-100v pd-0">
    <Header v-bind:activeCrumb="activeCrumb" v-bind:viewTitle="viewTitle">
      <slot>
        <div class="search-form">
          <input type="search" class="form-control" placeholder="Search" />
          <button class="btn" type="button">
            <i data-feather="search"></i>
          </button>
        </div>
      </slot>
    </Header>

    <div class="content-body">
      <div class="container pd-x-0">
        <Boardside></Boardside>
        <!-- body -->
        <div class="contact-content overflow-y-auto">
          <div
            class="tx-20 d-sm-flex align-items-center justify-content-between board-title"
          >
            기술지원이력
            <div class="d-flex">
              <button
                class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-r-5"
              >
                답글쓰기
              </button>
              <button
                class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-r-5"
                v-on:click="backPage()"
              >
                목록
              </button>
              <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-r-5">
                인쇄
              </button>
              <button
                class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-r-5"
                v-on:click="editContent()"
              >
                수정
              </button>
              <button
                class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-r-15"
                v-on:click="deleteContent()"
              >
                삭제
              </button>
            </div>
          </div>
          <!-- 본문 -->
          <div class="mail-content-body">
            <div
              class="pd-20 pd-lg-25 pd-xl-30"
              style="border-bottom: 1px solid rgba(72, 94, 144, 0.16);"
            >
              <div
                class="mg-b-30 d-sm-flex align-items-center justify-content-between"
              >
                <h4>
                  {{ currentItem.postTitle }}
                  <i
                    class="far fa-comment-dots mg-l-15 mg-r-5"
                    style="align-self: center;"
                  ></i>
                  {{ currentItem.commentCnt }}
                </h4>
                <div class="d-flex">
                  <a href="" class="avatar" style="margin-left: auto; "
                    ><img
                      src="https://via.placeholder.com/500"
                      class="rounded-circle"
                      alt=""
                      style="width: 30px; height:30px"
                  /></a>
                  <span class="tx-14">{{ currentItem.regUserId }}</span>
                  <span class="tx-14 mg-l-15 tx-color-03"
                    >{{ currentItem.regDtm }}</span
                  >
                </div>
              </div>

              <div id="conetent" style="margin-bottom: auto;"></div>
            </div>

            <Commentcard
              v-for="(item, i) in commentList"
              v-bind:key="i"
              v-bind:boardComment="item.commentContent"
              v-bind:commentNo="item.commentNo"
              v-bind:regUserId="item.regUserId"
              v-bind:regDtm="item.regDtm"
              @delete="delComment(item)"
              @edit="edit(i, item.commentContent)"
              @editfinish="editfinish(i, item)"
              @change="change"
            ></Commentcard>

            <!-- 댓글 작성 -->
            <div
              class="mg-t-10 pd-10 pd-b-50 d-sm-flex align-items-center justify-content-between"
            >
              <a href="" class="avatar mg-l-5 mg-r-5"
                ><img
                  src="https://via.placeholder.com/500"
                  class="rounded-circle"
                  alt=""
                  style="width: 30px; height:30px"
              /></a>
              <textarea
                class="form-control pd-10"
                rows="1"
                v-model="incomment"
              ></textarea>
              <div class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-5">
                <h6 class="tx-color-02"><i class="far fa-file"></i></h6>
              </div>
              <button
                class="btn btn-sm pd-x-15 d-flex btn-white btn-uppercase mg-r-5"
                style="white-space:nowrap;"
                v-on:click="addComment()"
              >
                <h6 class="tx-color-02">댓글 작성</h6>
              </button>
            </div>
            <!-- 댓글 작성 -->
          </div>
        </div>
        <!--body -->
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Boardside from "@/components/boardside.vue";
import Commentcard from "@/components/commentcard.vue";
import Toast from "@/utils/toast.js";
import qs from "qs";

const PAGEINFOS = {
  PAGENAME: "게시판&자료실",
  CRUMB: "전체글보기",
};

export default {
  components: { Header, Boardside, Commentcard },
  data() {
    const contentId = String(this.$route.params.contentId);
    const boardDivCd = String(this.$route.params.boardDivCd);
    return {
      contentId: contentId,
      boardDivCd: boardDivCd,
      viewTitle: PAGEINFOS.CRUMB,
      activeCrumb: PAGEINFOS.PAGENAME,
      currentItem: Array,
      commentList: Array,
      addcommentList: Array,
      incomment: null,
    };
  },
  methods: {
    editContent() {
      this.$router.push({
        path: `/noticeboard/writepost/${this.boardDivCd}/${this.contentId}`,
      });
    },
    deleteContent() {
      this.$http.delete("/post/" + this.contentId).then((response) => {
        this.$router.push({
          path: `/noticeboard/clickmenu/${this.boardDivCd}`,
        });
        this.$toast("게시글이 삭제되었습니다.");
      });
    },
    addComment() {
      if (this.incomment != null) {
        this.addcommentList = {
          postNo: this.contentId,
          commentContent: this.incomment,
        };
        this.incomment = null;
        this.$http
          .post(
            "/post/" + this.contentId + "/comment",
            qs.stringify(qs.parse(this.addcommentList))
          )
          .then((response) => {
            this.$http.get("/post/" + this.contentId + "/comment").then((response) => {
                this.commentList = response.data;
            });
            this.currentItem.commentCnt ++;
            this.$toast("댓글이 추가되었습니다.");
          });
      }
    },
    editfinish(i, item) {
      $("[name=commentInfo]")
        .eq(i)
        .addClass("show-textarea");
    },
    change(updatetext, commentNo) {
      this.addcommentList = {
        postNo: this.contentId,
        commentContent: updatetext,
      };

      this.$http
        .put(
          "/post/" + this.contentId + "/comment/" + commentNo,
          qs.stringify(qs.parse(this.addcommentList))
        )
        .then((response) => {
            this.$http.get("/post/" + this.contentId + "/comment").then((response) => {
                this.commentList = response.data;
            });
            this.$toast("댓글이 수정되었습니다.");
        });
    },
    edit(i, commentContent) {
      $("[name=commentInfo]")
        .eq(i)
        .removeClass("show-textarea");
    },
    delComment(item) {
      this.$http
        .delete(
          "/post/" + this.contentId + "/comment/" + String(item.commentNo)
        )
        .then((response) => {
          this.$http.get("/post/" + this.contentId + "/comment").then((response) => {
                this.commentList = response.data;
            });
            this.currentItem.commentCnt --;
            this.$toast("댓글이 삭제되었습니다.");
        });
    },
    backPage() {
      history.back();
    }
  },
  mounted() {
    this.$http.get("/post/"+this.contentId).then((response) => {
      this.currentItem = response.data;
      document.getElementById(
        "conetent"
      ).innerHTML = this.currentItem.postContent;
    });

    this.$http.get("/post/" + this.contentId + "/comment").then((response) => {
      this.commentList = response.data;
    });
    feather.replace();
  },
};
</script>

<style scoped>
.contact-sidebar {
  left: 0;
}
.contact-content {
  left: 280px;
}
.board-title {
    height: 48px; padding: 10px; padding-left: 22px; border-bottom: 1px solid rgba(72, 94, 144, 0.16);
}
.show-textarea {
  border: none; 
  pointer-events: none;
  resize: none;
}
</style>