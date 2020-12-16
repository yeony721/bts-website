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
            v-on:click="newSiteInfo()"
            class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"
          >
            <i data-feather="file" class="wd-10 mg-r-5"></i> 솔루션등록
          </button>
        </div>
      </template>
    </Header>
    <!-- content-header -->
    <div class="content-body">
      <div class="container pd-x-0">
        <Sitelist
          v-bind:siteInfoList="siteInfoList"
          v-bind:currentSiteIdx="currentSiteIdx"
          @update-idx="updateIdx"
        >
        </Sitelist>
        <div
          v-if="clicklistinfo === false"
          id="customerdetail"
          class="contact-content"
        >
          <div class="contact-content-body">
            <div
              id="contactInformation"
              class="tab-pane show active pd-20 pd-xl-25"
              style="position: absolute; top: 40%; left: 50%; transform: translateX(-50%);"
            >
              목록을 선택해주세요.
            </div>
          </div>
        </div>
        <div v-if="clicklistinfo" class="contact-content">
          <div class="contact-content-body">
            <div
              id="contactInformation"
              class="tab-pane show active pd-20 pd-xl-25"
            >
              <div
                class="d-flex align-items-center justify-content-between mg-b-25"
              >
                <h6 class="mg-b-0 tx-primary">
                  {{ siteInfoList[currentSiteIdx].siteNm }}
                </h6>
                <div class="d-flex">
                  <a
                    href="#modalEditContact"
                    data-toggle="modal"
                    class="btn btn-sm btn-white d-flex align-items-center mg-r-5"
                    v-on:click="updateSite(currentSiteIdx)"
                    ><i data-feather="edit-2"></i
                    ><span class="d-none d-sm-inline mg-l-5"> Edit</span></a
                  >
                  <a
                    href="#modalDeleteContact"
                    data-toggle="modal"
                    class="btn btn-sm btn-white d-flex align-items-center"
                    ><i data-feather="trash"></i
                    ><span class="d-none d-sm-inline mg-l-5"> Delete</span></a
                  >
                </div>
              </div>

              <div class="row">
                <div class="col-6 col-sm">
                  <label
                    class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                    >고객사 유형</label
                  >
                  <p class="mg-b-0">
                    {{ siteInfoList[currentSiteIdx].siteType }}
                  </p>
                </div>
                <!-- col -->
                <div class="col-6 col-sm">
                  <label
                    class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                    >현재지원여부</label
                  >
                  <p class="mg-b-0">
                    {{ siteInfoList[currentSiteIdx].supportYn ? "Y" : "N" }}
                  </p>
                </div>
                <!-- col -->
              </div>
              <!-- row -->
              <h6 class="mg-t-40 mg-b-20">고객사 상세정보</h6>
              <div class="row row-sm">
                <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                  <label
                    class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                    >도입솔루션</label
                  >
                  <p class="mg-b-0">
                    {{ siteInfoList[currentSiteIdx].sdqUseYn ? "SDQ" : "" }}
                    {{ siteInfoList[currentSiteIdx].sdq4UseYn ? "SDQ4" : "" }}
                    {{ siteInfoList[currentSiteIdx].smetaUseYn ? "SMETA" : "" }}
                    {{ siteInfoList[currentSiteIdx].sflowUseYn ? "SFLOW" : "" }}
                  </p>
                </div>
                <div class="col-sm mg-t-20 mg-sm-t-30">
                  <label
                    class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                    >홈페이지</label
                  >
                  <p class="tx-13 mg-b-0">
                    {{ siteInfoList[currentSiteIdx].siteAddr }}
                  </p>
                </div>
                <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                  <label
                    class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                    >고객사 위치</label
                  >
                  <p class="mg-b-0">
                    {{ siteInfoList[currentSiteIdx].siteLoc }}
                  </p>
                </div>
                <div class="col-sm mg-t-20 mg-sm-t-30">
                  <label
                    class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                    >고객사 설명</label
                  >
                  <p class="tx-13 mg-b-0">
                    {{ siteInfoList[currentSiteIdx].siteDesc }}
                  </p>
                </div>

                <!-- <div data-label="Example" class="df-example">
                  <div id="map2" style="width: 300px; height: 300px;"></div>
                </div> -->
              </div>
              <!-- row -->
            </div>
          </div>
        </div>
      </div>
      <!-- container -->
    </div>
    <Modal v-if="isModalShow" @update="createSiteInfo" >
      <!-- col -->
        <template v-slot:modal-title>
          <h5 class="tx-18 tx-sm-20 mg-b-20">고객사 정보</h5>
            <p class="tx-13 tx-color-03 mg-b-30">
              고객사정보 수정페이지 설명
              <span class="tx-color-02">고객사정보 수정페이지 설명</span>
              고객사정보 수정페이지 설명
            </p>
      </template>
      <template v-slot:modal-body>
        <h6 class="mg-b-10">고객사명</h6>
        <div class="form-group mg-b-10">
          <input type="text" class="form-control" v-model="detailInfo.siteNm" />
        </div>
        <h6 class="mg-t-20 mg-b-10">고객사 유형</h6>
        <div class="form-group mg-b-10">
          <select v-model="detailInfo.siteType" class="form-control">
            <option value="공공">공공</option>
            <option value="민간">민간</option>
          </select>
        </div>
        <h6 class="mg-t-20 mg-b-10">현재지원여부</h6>
        <div class="form-group mg-b-10">
          <select v-model="detailInfo.supportYn" class="form-control">
            <option value="true">Y</option>
            <option value="false">N</option>
          </select>
        </div>
        <h6 class="mg-t-20 mg-b-10">도입 솔루션</h6>
        <div class="form-group mg-b-10">
          <input type="checkbox" v-model="detailInfo.sdqUseYn" />
          <label for="SDQ">SDQ</label>
          <input type="checkbox" v-model="detailInfo.sdq4UseYn" />
          <label for="SDQ4">SDQ4</label>
          <input type="checkbox" v-model="detailInfo.smetaUseYn" />
          <label for="SMETA">SMETA</label>
          <input type="checkbox" v-model="detailInfo.sflowUseYn" />
          <label for="SFLOW">SFLOW</label>
        </div>
        <h6 class="mg-t-20 mg-b-10">홈페이지</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="detailInfo.siteAddr"
          />
        </div>
        <h6 class="mg-t-20 mg-b-10">고객사 위치</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="detailInfo.siteLoc"
          />
        </div>
        <h6 class="mg-t-20 mg-b-10">고객사 설명</h6>
        <textarea
          class="form-control"
          rows="2"
          v-model="detailInfo.siteDesc"
        ></textarea>
      </template>
      <!-- col -->
    </Modal>

    <!-- 삭제 모달 출력-->
    <DelModal id="modalDeleteContact" @update="deleteSiteInfo">
      <template v-slot:modal-title>
        <h6 class="modal-title">고객사 정보 삭제</h6>
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
              고객사 정보를 삭제 하시겠습니까? <br>연결되어 있는 프로젝트 및
              기술지원 정보에 영향이 발생하게 됩니다.
            </p>
      </template>
    </DelModal>
  </div>
</template>
<script>
import qs from "qs";
import Sitelist from "@/components/sitelist.vue";
import Header from "@/components/header.vue";
import Modal from "@/components/modal.vue";
import DelModal from "@/components/deletemodal.vue";
import MixinModal from "@/mixins/mixin.js";
import Toast from "@/utils/toast.js";

const PAGEINFOS = {
  PAGENAME: "고객사정보관리",
  CRUMB: "기반정보관리",
};

export default {
  mixins: [MixinModal],
  components: { Header, Modal, Sitelist, DelModal },
  data() {
    return {
      detailInfo: Object,
      siteInfoList: Array,
      viewTitle: PAGEINFOS.PAGENAME,
      activeCrumb: PAGEINFOS.PAGENAME,
      crumb: PAGEINFOS.CRUMB,
      currentSiteIdx: '0',
    };
  },
  methods: {
    newSiteInfo() {
      this.detailInfo = {};
      this.detailInfo.siteType = "공공";
      this.detailInfo.supportYn = "false";
      this.showModal();
    },
    createSiteInfo() {
      if (this.detailInfo.siteId !== undefined) {
        this.$set(this.siteInfoList, this.currentSiteIdx, this.detailInfo);
        this.closeModal();
        this.$toast("고객사 정보가 수정되었습니다.");
        /* let siteId = this.siteInfoList[this.currentSiteIdx].siteId;
        this.$http
          .put(
            "/site" + siteId,
            qs.stringify(qs.parse(this.detailInfo))
          )
          .then((response) => {
            $("#modalEditContact").modal("hide");
            this.isModalShow = false;
            this.siteInfoList[this.currentSiteIdx] = response.data;
          }); */
      } else {
        this.siteInfoList.push(this.detailInfo);
        this.closeModal();
        this.$toast("고객사 정보가 등록되었습니다.");
        // this.$http
        //   .post("/site", qs.stringify(qs.parse(this.detailInfo)))
        //   .then((response) => {
        //     $("#modalEditContact").modal("hide");
        //     this.isModalShow = false;
        //     this.siteInfoList.push(response.data);
        //   });
      }
    },
    // 고객사 단건 정보 삭제
    deleteSiteInfo() {
      let siteId = this.siteInfoList[this.currentSiteIdx].siteId;
      this.siteInfoList.splice(this.currentSiteIdx, 1);
      $("#modalDeleteContact").modal("hide");
      this.clicklistinfo = false;
      this.$toast("고객사 정보가 삭제되었습니다.");
      //this.$http.delete("/site" + siteId).then((response) => {
      //  this.siteInfoList.splice(this.currentSiteIdx, 1);
      //  $("#modalDeleteContact").modal("hide");
      //});
    },
    updateSite(idx) {
      this.showModal();
      this.detailInfo = _.cloneDeep(this.siteInfoList[idx]);
    },
    updateIdx(idx) {
      this.currentSiteIdx = idx;
      this.clicklistinfo = true;
    },
  },
  mounted() {
    // 솔루션 전체 목록조회
    this.$http.get("/baseinfo/site/list.json").then((response) => {
      this.siteInfoList = response.data;
      this.clicklistinfo = true;
    });
  },
};
</script>
<style scoped>
.contact-content-body {
  position: initial;
}
</style>