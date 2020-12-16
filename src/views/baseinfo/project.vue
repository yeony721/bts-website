<template>
  <div class="content ht-100v pd-0">
    <Header
      v-bind:crumb="crumb"
      v-bind:activeCrumb="activeCrumb"
      v-bind:viewTitle="viewTitle"
    >
      <template v-sloat>
        <div class="d-none d-md-block">
          <button
            data-toggle="modal"
            data-target="#modalEditContact"
            v-on:click="newProjectInfo()"
            class="btn btn-sm pd-x-15 btn-outline-primary btn-uppercase mg-l-5"
          >
            <i data-feather="file" class="wd-10 mg-r-5"></i> 신규프로젝트
          </button>
          <button class="btn btn-sm pd-x-15 btn-white btn-uppercase">
            <i data-feather="mail" class="wd-10 mg-r-5"></i>다운로드
          </button>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://uicdn.toast.com/tui.date-picker/v3.2.1/tui-date-picker.css"
          />
        </div>
      </template>
    </Header>
    <div class="content-body">
      <div class="container pd-x-0">
        <grid
          id="grid"
          ref="tuiGrid"
          data-toggle="modal"
          data-target="#modalEditContact"
          :data="gridProps.data"
          :columns="gridProps.columns"
          height="500px"
          :options="gridProps.options"
          @click="onClick"
        />
      </div>
    </div>

    <Modal v-if="isModalShow" @update="createProjectInfo">
      <!-- col -->
      <template v-slot:modal-title>
        <h5 class="tx-18 tx-sm-20 mg-b-20">프로젝트 정보</h5>
        <p class="tx-13 tx-color-03 mg-b-30">
          프로젝트정보 수정페이지 설명
          <span class="tx-color-02">프로젝트정보 수정페이지 설명</span>
          프로젝트정보 수정페이지 설명
        </p>
      </template>
      <template v-slot:modal-body>
        <h6 class="mg-b-10">고객명</h6>
        <div class="form-group mg-b-10">
          <input type="text" class="form-control" v-model="detailInfo.siteNm" />
        </div>
        <h6 class="mg-t-20 mg-b-10">프로젝트명</h6>
        <div class="form-group mg-b-10">
          <input type="text" class="form-control" v-model="detailInfo.pjtNm" />
        </div>
        <h6 class="mg-t-20 mg-b-10">계약유형</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="detailInfo.contType"
          />
        </div>
        <h6 class="mg-t-20 mg-b-10">계약일자</h6>
        <div class="form-group mg-b-10">
          <input type="text" class="form-control" v-model="detailInfo.contDt" />
        </div>
        <h6 class="mg-t-20 mg-b-10">제품명</h6>
        <div class="form-group mg-b-10">
          <input type="text" class="form-control" v-model="detailInfo.prodNm" />
        </div>
        <h6 class="mg-t-20 mg-b-10">기술지원유형</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="detailInfo.techSupptType"
          />
        </div>
        <h6 class="mg-t-20 mg-b-10">담당자명</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="detailInfo.chargeEnginner"
          />
        </div>
      </template>
      <!-- col -->
    </Modal>
  </div>
</template>
<script>
import Header from "@/components/header.vue";
import Modal from "@/components/modal.vue";
import "tui-grid/dist/tui-grid.css";
import { Grid } from "@toast-ui/vue-grid";
import TuiGrid from "tui-grid";
import MixinModal from "@/mixins/mixin.js";

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
  mixins: [MixinModal],
  components: {
    Header,
    grid: Grid,
    Modal,
  },
  data() {
    return {
      width: Number,
      height: Number,
      gridProps: Object,
      viewTitle: PAGEINFOS.PAGENAME,
      activeCrumb: PAGEINFOS.PAGENAME,
      crumb: PAGEINFOS.CRUMB,
      detailInfo: Object,
      currentProjIdx: 0,
    };
  },
  created() {
    this.gridProps = {
      data: [],
      columns: [
        {
          header: "고객명",
          name: "siteNm",
          filter: { type: "text" },
          resizable: true,
          sortable: true,
        },
        {
          header: "프로젝트명",
          name: "pjtNm",
          filter: { type: "text" },
          resizable: true,
          sortable: true,
        },
        {
          header: "계약유형",
          name: "contType",
          filter: "select",
          resizable: true,
          sortable: true,
        },
        {
          header: "계약일자",
          name: "contDt",
          filter: { type: "date", format: "yyyy.MM.dd" },
          resizable: true,
          sortable: true,
        },
        {
          header: "제품명",
          name: "prodNm",
          filter: "select",
          resizable: true,
          sortable: true,
        },
        {
          header: "기술지원유형",
          name: "techSupptType",
          filter: "select",
          resizable: true,
          sortable: true,
        },
        {
          header: "담당자명",
          name: "chargeEnginner",
          filter: { type: "text" },
          resizable: true,
          sortable: true,
        },
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
      this.$refs.tuiGrid.invoke("setHeight", this.height - 130);
    },
    newProjectInfo() {
      this.detailInfo = {};
      this.showModal();
    },
    onClick(e) {
      console.log(e);
      this.currentProjIdx = String(e.rowKey);
      if (this.currentProjIdx !== "undefined") {
        this.detailInfo = _.cloneDeep(this.gridProps.data[this.currentProjIdx]);
        this.showModal();
      } else {
        this.closeModal();
      }
    },
    createProjectInfo() {
      if (this.detailInfo.siteId !== undefined) {
        this.$set(this.gridProps.data, this.currentProjIdx, this.detailInfo);
        this.$refs.tuiGrid.invoke("resetData", this.gridProps.data);
        this.closeModal();
        this.$toast("프로젝트 정보가 수정되었습니다.");
      } else {
        this.gridProps.data.push(this.detailInfo);
        this.$refs.tuiGrid.invoke("resetData", this.gridProps.data);
        this.closeModal();
        this.$toast("프로젝트 정보가 등록되었습니다.");
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.$http.get("/baseinfo/project/list.json").then((response) => {
      this.gridProps.data = response.data;
      this.$refs.tuiGrid.invoke("resetData", this.gridProps.data);
    });
  },
  beforeDestroy() {
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
