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
            v-on:click="newInfo()"
            class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"
          >
            <i data-feather="file" class="wd-10 mg-r-5"></i> 솔루션등록
          </button>
        </div>
      </template>
    </Header>
    <div class="content-body">
      <div class="container pd-x-0">
        <Card
          v-for="(item, i) in soluctionList"
          v-bind:key="i"
          v-bind:title="item.soluNm"
          v-bind:imgPath="item.soluImgPath"
          v-bind:desc="item.soluDesc"
          v-bind:subdesc="item.soluDetailDesc"
        >
          <template v-sloat>
            <a
              href="#modalEditContact"
              v-on:click="updateInfo(i)"
              data-toggle="modal"
              class="btn btn-sm btn-white d-flex align-items-center mg-r-5"
            >
              <i data-feather="edit-2"></i
              ><span class="d-none d-sm-inline mg-l-5">수정</span>
            </a>
            <a
              href="#"
              v-on:click="showCatalog()"
              data-toggle="modal"
              class="btn btn-sm btn-white d-flex align-items-center mg-r-5"
            >
              <i data-feather="save" class="wd-10 mg-r-5"></i>
              <span class="d-none d-sm-inline mg-l-5">소개자료</span>
            </a>
            <a
              href="#"
              v-on:click="showManual()"
              data-toggle="modal"
              class="btn btn-sm btn-white d-flex align-items-center mg-r-5"
            >
              <i data-feather="save" class="wd-10 mg-r-5"></i>
              <span class="d-none d-sm-inline mg-l-5">매뉴얼</span>
            </a>
            <a
              href="#modalDeleteContact"
              v-on:click="currentInfoIdx = i"
              data-toggle="modal"
              class="btn btn-sm btn-white d-flex align-items-center"
              ><i data-feather="trash"></i
              ><span class="d-none d-sm-inline mg-l-5">삭제</span></a
            >
          </template>
        </Card>
      </div>
    </div>

    <!-- modal -->
    <Modal v-if="isModalShow" @update="createInfo">
      <!-- col -->
      <template v-slot:modal-title>
          <h5 class="tx-18 tx-sm-20 mg-b-20">솔루션 정보</h5>
            <p class="tx-13 tx-color-03 mg-b-30">
              솔루션정보 수정페이지 설명
              <span class="tx-color-02">솔루션정보 수정페이지 설명</span>
              솔루션정보 수정페이지 설명
            </p>
      </template>
      <template v-slot:modal-body>
        <h6 class="mg-b-10">솔루션 명칭</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="soluctionInfo.soluNm"
          />
        </div>

        <h6 class="mg-t-20 mg-b-10">솔루션 이미지</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="soluctionInfo.soluImgPath"
          />
        </div>

        <h6 class="mg-t-20 mg-b-10">설명</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="soluctionInfo.soluDesc"
          />
        </div>

        <h6 class="mg-t-20 mg-b-10">상세설명</h6>
        <textarea
          class="form-control"
          rows="2"
          v-model="soluctionInfo.soluDetailDesc"
        ></textarea>
      </template>
      <!-- col -->
    </Modal>

    <DelModal id="modalDeleteContact" @update="deleteInfo">
      <template v-slot:modal-title>
        <h6 class="modal-title">솔루션 정보 삭제</h6>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template>
      <template v-slot:modal-body>
        <p class="mg-b-0">
          솔루션 정보를 삭제 하시겠습니까? 연결되어 있는 프로젝트 및 기술지원
          정보에 영향이 발생하게 됩니다.
        </p>
      </template>
    </DelModal>
  </div>
</template>

<script>
import * as _ from "lodash";
import qs from "qs";
import Card from "@/components/card.vue";
import Header from "@/components/header.vue";
import Modal from "@/components/modal.vue";
import DelModal from "@/components/deletemodal.vue";
import MixinModal from "@/mixins/mixin.js";
import Toast from "@/utils/toast.js";

const PAGEINFOS = {
  PAGENAME: "솔루션정보 관리",
  CRUMB: "솔루션정보 관리",
};
export default {
  mixins: [MixinModal],
  components: { Card, Header, Modal, DelModal },
  data() {
    return {
      soluctionInfo: Object,
      soluctionList: Array,
      viewTitle: PAGEINFOS.PAGENAME,
      activeCrumb: PAGEINFOS.PAGENAME,
      crumb: PAGEINFOS.CRUMB,
      currentInfoIdx: 0,
      isModalShow: false,
    };
  },
  methods: {
    newInfo() {
      this.soluctionInfo = {};
      this.showModal();
    },
    updateInfo(idx) {
      this.showModal();
      this.currentInfoIdx = idx;
      this.soluctionInfo = _.cloneDeep(this.soluctionList[idx]);
    },
    createInfo() {
      if (this.soluctionInfo.soluId !== undefined) {
        this.$set(this.soluctionList, this.currentInfoIdx, this.soluctionInfo);
        this.closeModal();
        this.$toast("솔루션 정보가 수정되었습니다.");
        /*         let soluId = this.soluctionList[this.currentInfoIdx].soluId;
        this.$http
          .put(
            "/solution/" + soluId,
            qs.stringify(qs.parse(this.soluctionInfo))
          )
          .then((response) => {
            $("#modalEditContact").modal("hide");
            this.isModalShow = false;
            this.soluctionList[this.currentInfoIdx] = response.data;
          }); */
      } else {
        this.soluctionList.push(this.soluctionInfo);
        this.closeModal();
        this.$toast("솔루션 정보가 등록되었습니다.");
        /*         this.$http
          .post("/solution", qs.stringify(qs.parse(this.soluctionInfo)))
          .then((response) => {
            $("#modalEditContact").modal("hide");
            this.isModalShow = false;
            this.soluctionList.push(response.data);
          }); */
      }
    },
    // 솔루션 단건  정보 삭제
    deleteInfo() {
      this.soluctionList.splice(this.currentInfoIdx, 1);
      $("#modalDeleteContact").modal("hide");
      this.$toast("솔루션 정보가 삭제되었습니다.");
      /*       let soluId = this.soluctionList[this.currentInfoIdx].soluId;
      this.$http.delete("/solution/" + soluId).then((response) => {
        this.soluctionList.splice(this.currentInfoIdx, 1);
        $("#modalDeleteContact").modal("hide");
      }); */
    },
    showCatalog() {
      this.$toast("준비중입니다.");
    },
    showManual() {
      this.$toast("준비중입니다");
    },
  },
  mounted() {
    // 솔루션 전체 목록조회
    this.$http.get("/baseinfo/soluction/list.json").then((response) => {
      this.soluctionList = response.data;
    });
  },
};
</script>
<style scoped>
.content-body {
  padding: 0;
}
</style>