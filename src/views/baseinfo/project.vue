<template>
  <div class="content ht-100v pd-0">
    <Header
      v-bind:crumb="crumb"
      v-bind:activeCrumb="activeCrumb"
      v-bind:viewTitle="viewTitle"
    >
      <template v-sloat>
          <div class="d-none d-md-block">
            <button class="btn btn-sm pd-x-15 btn-outline-primary btn-uppercase mg-l-5"><i data-feather="file" class="wd-10 mg-r-5"></i> 신규프로젝트</button>
            <button class="btn btn-sm pd-x-15 btn-white btn-uppercase"><i data-feather="mail" class="wd-10 mg-r-5"></i>다운로드</button>   
          </div>
      </template>
    </Header>
    <div class="content-body">
      <div class="container pd-x-0">
        <grid
          ref="tuiGrid"
          :data="gridProps.data"
          :columns="gridProps.columns"
          height="500px"
          :options="gridProps.options"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import "tui-grid/dist/tui-grid.css";
import { Grid } from "@toast-ui/vue-grid";
import TuiGrid from "tui-grid";

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
  PAGENAME: "프로젝트 정보관리",
  CRUMB: "기반정보관리",
};

export default {
  components: {
    Header,
    grid: Grid,
  },
  data() {
    return {
      width: Number,
      height: Number,
      gridProps: Object,
      viewTitle: PAGEINFOS.PAGENAME,
      activeCrumb: PAGEINFOS.PAGENAME,
      crumb: PAGEINFOS.CRUMB,
    };
  },
  created() {
    this.gridProps = {
      data: [],
      columns: [
        { header: "고객명", name: "siteNm" },
        { header: "프로젝트명", name: "pjtNm" },
        { header: "계약유형", name: "contType" },
        { header: "계약일자", name: "contDt" },
        { header: "제품명", name: "prodNm" },
        { header: "기술지원유형", name: "techSupptType" },
        { header: "담당자명", name: "chargeEnginner" },
      ],
      options: {
        bodyHeight: window.innerHeight - 130,
        scrollX: false,
        scrollY: true,
        rowHeight: 50,
      },
    };
  },
  methods: {
    handleResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      //$('#grid-wrapper').height(this.width + 'px');

      this.$refs.tuiGrid.invoke("setHeight", this.height - 130);
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.$http
      .get("/src/assets/data/baseinfo/project/list.json")
      .then((response) => {
        this.gridProps.data = response.data;
        this.$refs.tuiGrid.invoke("resetData", this.gridProps.data);
      });
  },
  beforeDestroy() {
    // console.log("beforeDestroy...");
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.tui-grid-container {
  font-family: "Noto Sans KR", sans-serif;
}
.content-body {
  padding: 0;
}
.tui-grid-cell-has-input .tui-grid-cell-content {
  padding: 4px 20px;
}
</style>
