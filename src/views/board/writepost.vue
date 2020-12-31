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
          <!-- body header-->
          <div
            class="tx-20 d-sm-flex align-items-center justify-content-between board-title"
          >
            글쓰기
            <div class="d-flex">
              <button
                class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-r-5"
                @click="updateMode ? updateContent() : uploadContent()"
              >
                등록
              </button>
              <button
                class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-r-15"
                v-on:click="backPage()"
              >
                닫기
              </button>
            </div>
          </div>
          <!-- body header-->

          <div class="mail-content-body">
            <div
              class="pd-20"
              style="border-bottom: 1px solid rgba(72, 94, 144, 0.16);"
            >
              <div class="d-sm-flex align-items-center justify-content-start">
                <div style="min-width: 70px;">경로</div>

                <div class="form-group mg-b-10 d-sm-flex justify-content-star">
                  <select class="form-control mg-r-10" style="width:250px;">
                    <option value="true">게시판</option>
                    <option value="false">자료실</option>
                  </select>
                  <select v-model="currentBoard" class="form-control">
                    <option value="01">공지사항</option>
                    <option value="02">[기술지원 게시판] 기술지원 이력</option>
                  </select>
                </div>
              </div>
              <div class="d-sm-flex align-items-center justify-content-start mg-b-10">
                <div style="min-width: 70px;">제목</div>
                <input type="text" class="form-control" v-model="title" />
              </div>
              <div class="d-sm-flex align-items-center justify-content-start">
                <div style="min-width: 70px;">파일</div>
                <input type="file" @change="onFileChange">
              </div>
            </div>
          </div>
          <vue-editor
            v-model="content"
            class="pd-25 ht-450"
          ></vue-editor>
        </div>
        <!--body -->
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Boardside from "@/components/boardside.vue";
import { VueEditor } from "vue2-editor";
import * as _ from "lodash";
import qs from "qs";

const PAGEINFOS = {
  PAGENAME: "게시판&자료실",
  CRUMB: "글쓰기",
};

export default {
  components: { Header, VueEditor, Boardside },
  data() {
    const contentId = String(this.$route.params.contentId);
    return {
      contentId: contentId,
      viewTitle: PAGEINFOS.CRUMB,
      activeCrumb: PAGEINFOS.PAGENAME,
      title: null,
      content: null,
      postList: Object,
      currentBoard: "01",
      addContent: Array,
      updateMode: this.$route.params.contentId > 0 ? true : false,
      file: '',
    };
  },
  methods: {
    backPage() {
      history.back();
    },
    uploadContent() {
      this.addContent = {
          postTitle: this.title,
          postContent: this.content,
          boardDivCd: this.currentBoard,
      };

      this.$http
        .post("/post", qs.stringify(qs.parse(this.addContent)))
        .then((response) => {
          this.$toast("게시글이 등록 되었습니다.");
          this.$router.push({
            path: `/noticeboard/clickmenu/${this.currentBoard}`,
          });
        });
      
    },
    updateContent() {
      this.addContent = {
          postNo: this.contentId,
          postTitle: this.title,
          postContent: this.content,
          boardDivCd: this.currentBoard,
        };

      this.$http
        .put("/post/"+ this.contentId , qs.stringify(qs.parse(this.addContent)))
        .then((response) => {
          this.$toast("게시글이 수정 되었습니다.");
          this.$router.push({
            path: `/noticeboard/clickmenu/${this.currentBoard}`,
          });
        });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createFile(files[0]);
    },
    createFile(item){
      var reader = new FileReader();
      reader.onload = (e) => {
        this.file = e.target.result;
      };
      reader.readAsDataURL(item);
    }
  },
  mounted() {
    this.$http.get("/post").then((response) => {
      this.postList = response.data;
      if (this.contentId > 0) {
        var result = _.findIndex(this.postList, {
          postNo: Number(this.contentId),
        });
        this.title = this.postList[result].postTitle;
        this.content = this.postList[result].postContent;
      }
    });

    if (String(this.$route.params.boardDivCd) != "undefined") {
      var boardDivCd = String(this.$route.params.boardDivCd);
      this.currentBoard = boardDivCd;
    }

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
</style>
