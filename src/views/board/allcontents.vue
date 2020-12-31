<!-- 전체글보기 -->
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
            class="tx-20 board-title"
          >
            {{ viewTitle }}
          </div>
          <Postcard
            style="cursor:pointer;"
            v-for="(item, i) in postList"
            v-bind:key="i"
            v-bind:postTitle="item.postTitle"
            v-bind:postContent="item.postContent"
            v-bind:regDtm="item.regDtm"
            v-bind:regUserId="item.regUserId"
            v-bind:commentCnt="item.commentCnt"
            @click.native="showContent(item)"
          ></Postcard>
        </div>
        <!--body -->
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Postcard from "@/components/postcard.vue";
import Boardside from "@/components/boardside.vue";

const PAGEINFOS = {
  PAGENAME: "게시판&자료실",
  CRUMB: "전체글보기",
};

export default {
  components: { Header, Boardside, Postcard },
  data() {
    return {
      viewTitle: PAGEINFOS.CRUMB,
      activeCrumb: PAGEINFOS.PAGENAME,
      postList: Array,
    };
  },
  methods:{
    showContent(item) {
      this.$router.push({path:`/noticeboard/postcontent/${item.boardDivCd}/${item.postNo}`})
    }
  },
  mounted() {        
    this.$http.get("/post").then((response) => {
      this.postList = response.data;
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
</style>
