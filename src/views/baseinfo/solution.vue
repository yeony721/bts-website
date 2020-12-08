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
              href="#modalEditContact"
              v-on:click="alert('준비중')"
              data-toggle="modal"
              class="btn btn-sm btn-white d-flex align-items-center mg-r-5"
            >
              <i data-feather="save" class="wd-10 mg-r-5"></i>
              <span class="d-none d-sm-inline mg-l-5">소개자료</span>
            </a>

            <a
              href="#modalEditContact"
              v-on:click="alert('준비중')"
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
      <template v-sloat>
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

    <div
      class="modal fade effect-scale"
      id="modalDeleteContact"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">솔루션 정보 삭제</h6>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="mg-b-0">
              솔루션 정보를 삭제 하시겠습니까? 연결되어 있는 프로젝트 및
              기술지원 정보에 영향이 발생하게 됩니다.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              취소
            </button>
            <button
              v-on:click="deleteInfo()"
              type="button"
              class="btn btn-primary"
            >
              삭제하겠습니다.
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from "lodash";
import qs from "qs";
import Modal from "@/components/modal.vue";
import Card from "@/components/card.vue";
import Header from "@/components/header.vue";

const PAGEINFOS = {
  PAGENAME: "솔루션정보 관리",
  CRUMB: "솔루션정보 관리",
};
export default {
  components: { Card, Header, Modal },
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
      this.isModalShow = true;
    },
    updateInfo(idx) {
      this.isModalShow = true;
      this.currentInfoIdx = idx;
      this.soluctionInfo = _.cloneDeep(this.soluctionList[idx]);
    },
    // 솔루션 단건  정보 삭제
    deleteInfo() {
      let soluId = this.soluctionList[this.currentInfoIdx].soluId;
      this.$http.delete("/solution/" + soluId).then((response) => {
        this.soluctionList.splice(this.currentInfoIdx, 1);
        $("#modalDeleteContact").modal("hide");
      });
    },
    // 솔루션 단건 정보 저장
    createInfo() {
      if (this.soluctionInfo.soluId !== undefined) {
        let soluId = this.soluctionList[this.currentInfoIdx].soluId;
        this.$http
          .put(
            "/solution/" + soluId,
            qs.stringify(qs.parse(this.soluctionInfo))
          )
          .then((response) => {
            $("#modalEditContact").modal("hide");
            this.isModalShow = false;
            this.soluctionList[this.currentInfoIdx] = response.data;
          });
      } else {
        this.$http
          .post("/solution", qs.stringify(qs.parse(this.soluctionInfo)))
          .then((response) => {
            $("#modalEditContact").modal("hide");
            this.isModalShow = false;
            this.soluctionList.push(response.data);
          });
      }
    },
  },
  mounted() {
    // 솔루션 전체 목록조회
    this.$http.get("/solution").then((response) => {
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
