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
    <!-- content-header -->

    <div class="content-body">
      <div class="container pd-x-0">
        <div class="contact-sidebar">
          <div class="contact-sidebar-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <div class="search-form">
              <input
                type="search"
                class="form-control"
                placeholder="고객사명을 입력하세요"
              />
            </div>
            <!--
              <a href="#modalNewContact" class="btn btn-xs btn-icon btn-primary" data-toggle="modal">
                <span data-toggle="tooltip" title="" data-original-title="Add New Contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></span>
              </a>
              -->
            <!-- contact-add -->
          </div>
          <!-- contact-sidebar-header -->
          <div class="contact-sidebar-body ps ps--active-y">
            <div class="tab-content">
              <div id="tabContact" class="tab-pane fade active show">
                <div class="pd-y-20 pd-x-10 contact-list">
                  <!-- media -->
                  <div
                    class="media"
                    v-for="(item, i) in siteInfoList"
                    v-bind:key="i"
                  >
                    <div class="avatar avatar-sm avatar-online">
                      <span class="avatar-initial rounded-circle bg-gray-700">{{
                        item.siteNm.charAt(0)
                      }}</span>
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">{{ item.siteNm }}</h6>
                      <span class="tx-12">+1-234-567-890</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""><i data-feather="star"></i></a>
                      <a href=""><i data-feather="edit-2"></i></a>
                    </nav>
                  </div>
                  <!-- media -->
                </div>
                <!-- contact-list -->
              </div>
              <!-- tab-pane -->
            </div>
            <!-- tab-content -->
          </div>
          <!-- contact-sidebar-body -->
        </div>
        <div class="contact-content">
          <div class="contact-content-body">
            <div id="contactInformation" class="tab-pane show active pd-20 pd-xl-25">
              <div class="d-flex align-items-center justify-content-between mg-b-25">
                <h6 class="mg-b-0">Personal Details</h6>
                <div class="d-flex">
                  <a href="#modalEditContact" data-toggle="modal" class="btn btn-sm btn-white d-flex align-items-center mg-r-5"><i data-feather="edit-2"></i><span class="d-none d-sm-inline mg-l-5"> Edit</span></a>
                  <a href="#modalDeleteContact" data-toggle="modal" class="btn btn-sm btn-white d-flex align-items-center"><i data-feather="trash"></i><span class="d-none d-sm-inline mg-l-5"> Delete</span></a>
                </div>
              </div>

              <div class="row">
                <div class="col-6 col-sm">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Firstname</label>
                  <p class="mg-b-0">Abigail</p>
                </div><!-- col -->
                <div class="col-6 col-sm">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Middlename</label>
                  <p class="mg-b-0">Christensen</p>
                </div><!-- col -->
                <div class="col-sm mg-t-20 mg-sm-t-0">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Lastname</label>
                  <p class="mg-b-0">Johnson</p>
                </div><!-- col -->
              </div><!-- row -->

              <h6 class="mg-t-40 mg-b-20">Contact Details</h6>

              <div class="row row-sm">
                <div class="col-6 col-sm-4">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Mobile Phone</label>
                  <p class="tx-primary tx-rubik mg-b-0">+1 290 912 3868</p>
                </div>
                <div class="col-6 col-sm-4">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Home Phone</label>
                  <p class="tx-primary tx-rubik mg-b-0">+1 011 342 3129</p>
                </div>
                <div class="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Work Phone</label>
                  <p class="tx-primary tx-rubik mg-b-0">+1 100 003 3344</p>
                </div>
                <div class="col-sm-4 mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Email Address</label>
                  <p class="tx-primary mg-b-0">me@themepixels.me</p>
                </div>
                <div class="col-sm-4 mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Company</label>
                  <p class="mg-b-0">ThemePixels, Inc.</p>
                </div>
                <div class="col-sm-4 mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Job Position</label>
                  <p class="mg-b-0">President &amp; CEO</p>
                </div>
                <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Home Address</label>
                  <p class="mg-b-0">4658 Kenwood Place<br>Pompano Beach, FL 33060, United States</p>
                </div>
                <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Work Address</label>
                  <p class="mg-b-0">819 Waldeck Street<br>Farmers Branch, TX 75244, United States</p>
                </div>
                <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Personal Website</label>
                  <p class="tx-primary mg-b-0">http://themepixels.me/</p>
                </div>
                <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Social Profiles</label>
                  <nav class="nav nav-social">
                    <a href="" class="nav-link"><i data-feather="facebook"></i></a>
                    <a href="" class="nav-link"><i data-feather="twitter"></i></a>
                    <a href="" class="nav-link"><i data-feather="instagram"></i></a>
                    <a href="" class="nav-link"><i data-feather="github"></i></a>
                  </nav>
                </div><!-- col -->
                <div class="col-sm mg-t-20 mg-sm-t-30">
                  <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Notes</label>
                  <p class="tx-13 mg-b-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>

                <div data-label="Example" class="df-example">
          <div id="map2"  style="width: 300px; height: 300px;"></div>
        </div>
              </div><!-- row -->
            </div>
        </div>
        </div>
      </div>
      <!-- container -->
    </div>
    <Modal v-if="isModalShow" @update="createInfo">
      <!-- col -->
      <template v-sloat>
        <h6 class="mg-b-10">고객사명</h6>
        <div class="form-group mg-b-10">
          <input type="text" class="form-control" v-model="detailInfo.siteNm" />
        </div>

        <h6 class="mg-t-20 mg-b-10">고객사 유형</h6>
        <div class="form-group mg-b-10">
          <input
            type="text"
            class="form-control"
            v-model="detailInfo.siteType"
          />
        </div>

        <h6 class="mg-t-20 mg-b-10">고객사 주소</h6>
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
  </div>
</template>
<script>
import * as _ from "lodash";
import qs from "qs";
import Modal from "@/components/modal.vue";
import Header from "@/components/header.vue";

const PAGEINFOS = {
  PAGENAME: "고객사정보관리",
  CRUMB: "기반정보관리",
};

export default {
  components: { Header, Modal },
  data() {
    return {
      detailInfo: Object,
      siteInfoList: Array,
      viewTitle: PAGEINFOS.PAGENAME,
      activeCrumb: PAGEINFOS.PAGENAME,
      crumb: PAGEINFOS.CRUMB,
      isModalShow: false,
    };
  },
  methods: {
    newInfo() {
      this.isModalShow = true;
    },
    createInfo() {
      this.$http
        .post("/site", qs.stringify(qs.parse(this.detailInfo)))
        .then((response) => {
          $("#modalEditContact").modal("hide");
          this.isModalShow = false;
          this.siteInfoList.push(response.data);
        });
    },
  },
   mounted() {
    // 솔루션 전체 목록조회
    this.$http.get("/site").then((response) => {
      this.siteInfoList = response.data;
    });



      $(function(){
        'use strict';
        var mapMarker = new GMaps({
          el: '#map2',
          lat: 37.7810822,
          lng: -122.3871956,
          zoom: 13.91
        });

        this.mapMarker.addMarker({
          lat: 37.7810822,
          lng: -122.3871956,
          title: 'Themepixels',
          click: function(e) {
            alert('You clicked in this marker');
          }
        });

      });
  },
};
</script>

<style scoped>
.contact-content-body{
  position: initial;
}
</style>
