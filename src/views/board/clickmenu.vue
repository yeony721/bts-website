<!-- 게시판별 목록 grid -->
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
        <!-- 전체글 body -->
        <div id="allpostlist" class="contact-content overflow-y-auto">
          <div
            class="tx-20 board-title"
          >
            기술지원이력
            <span class="mg-l-10 tx-14 tx-color-03">(총 36건)</span>
          </div>
          <div class="search-form pd-10 pd-x-20">
            <input
              type="search"
              class="form-control"
              placeholder="Search posts"
            />
            <button class="btn" type="button">
              <i data-feather="search"></i>
            </button>
          </div>
          <grid
            id="grid"
            ref="tuiGrid"
            height="300px"
            :data="gridProps.data"
            :columns="gridProps.columns"
            :options="gridProps.options"
            @click="onClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import "tui-grid/dist/tui-grid.css";
import { Grid } from "@toast-ui/vue-grid";
import TuiGrid from "tui-grid";
import Boardside from "@/components/boardside.vue";

TuiGrid.setLanguage("ko");
TuiGrid.applyTheme("clean", {
  cell: {
    normal: {
      background: "#fff",
      border: "#e1e5ed",
      showVerticalBorder: false,
      showHorizontalBorder: true,
    },
  },
});

const PAGEINFOS = {
  PAGENAME: "게시판&자료실",
  CRUMB: "공지사항",
};

export default {
  components: { Header, grid: Grid, Boardside },
  data() {
    const boardDivCd = String(this.$route.params.boardDivCd);
    return {
      boardDivCd: boardDivCd,
      width: Number,
      height: Number,
      gridProps: Object,
      viewTitle: PAGEINFOS.CRUMB,
      activeCrumb: PAGEINFOS.PAGENAME,
      postList: Array,
      currenContIdx: "0",
    };
  },
  methods: {
    onClick(e){
      this.currenContIdx = String(e.rowKey);
      var postId = this.gridProps.data[this.currenContIdx].postNo;
      this.$router.push({path:`/noticeboard/postcontent/${this.boardDivCd}/${postId}`})
    },
    handleResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.$refs.tuiGrid.invoke("setHeight", this.height - 130);
    },
  },
  created() {
    this.gridProps = {
      data: [],
      columns: [
        {
          header: "번호",
          name: "postNo",
          filter: { type: "text" },
          resizable: true,
          sortable: true,
          width: 80,
        },
        {
          header: "제목",
          name: "postTitle",
          filter: { type: "text" },
          resizable: true,
          sortable: true,
          whiteSpace: "normal",
        },
        {
          header: "작성자",
          name: "regUserId",
          filter: { type: "text" },
          resizable: true,
          sortable: true,
          width: 150,
        },
        {
          header: "작성일",
          name: "regDtm",
          filter: { type: "date", format: "yyyy-MM-dd" },
          resizable: true,
          sortable: true,
          width: 180,
        },
        {
          header: "조회",
          name: "postHitCnt",
          resizable: true,
          sortable: true,
          width: 80,
        },
      ],
      options: {
        bodyHeight: window.innerHeight - 230,
        scrollX: false,
        scrollY: true,
        rowHeight: 50,
      },
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.$http.get("/post").then((response) => {
      this.postList = response.data;
      this.gridProps.data = _.filter(this.postList, { boardDivCd: this.boardDivCd });
      this.$refs.tuiGrid.invoke("resetData", this.gridProps.data);
    });
    feather.replace();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
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
.tui-grid-container {
  font-family: "Noto Sans KR", sans-serif;
}
.tui-grid-cell-has-input .tui-grid-cell-content {
  padding: 4px 20px;
}
.board-title {
    height: 48px; padding: 10px; padding-left: 22px; border-bottom: 1px solid rgba(72, 94, 144, 0.16);
}
</style>
