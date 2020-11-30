<template>
  <div class="content ht-100v pd-0">
    <div class="content-header">
      <div class="d-sm-flex align-items-center justify-content-between">
        <div>
          <nav aria-label="breadcrumb">
            <ol
              class="breadcrumb breadcrumb-style1"
              style="margin-bottom: 0px;"
            >
              <li class="breadcrumb-item"><a href="#">기반정보관리</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                기술지원정보 관리
              </li>
            </ol>
          </nav>
          <h4 class="mg-b-0 tx-spacing--1">기술지원정보 관리</h4>
        </div>
      </div>
    </div>
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
              </a>-->
            <!-- contact-add -->
          </div>
          <!-- contact-sidebar-header -->
          <div class="contact-sidebar-body ps ps--active-y">
            <div class="tab-content">
              <div id="tabContact" class="tab-pane fade active show">
                <div class="pd-y-20 pd-x-10 contact-list">
                  <div class="media active">
                    <div class="avatar avatar-sm avatar-online">
                      <span class="avatar-initial rounded-circle bg-gray-700"
                        >A</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">관세청</h6>
                      <span class="tx-12">2020.11.09</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->

                  <div class="media">
                    <div class="avatar avatar-sm avatar-online">
                      <span class="avatar-initial rounded-circle bg-primary"
                        >a</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">지역난방공사</h6>
                      <span class="tx-12">2020.10.02</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->

                  <div class="media">
                    <div class="avatar avatar-sm avatar-online">
                      <span class="avatar-initial rounded-circle bg-gray-700"
                        >E</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">방사청</h6>
                      <span class="tx-12">2020.09.03</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->
                </div>
                <!-- contact-list -->
              </div>
              <!-- tab-pane -->
              <div id="tabTags" class="tab-pane fade">
                <div class="pd-y-20 pd-x-10 contact-list">
                  <label class="contact-list-divider">My Family</label>
                  <div class="media active">
                    <div class="avatar avatar-sm avatar-online">
                      <span class="avatar-initial rounded-circle bg-gray-700"
                        >A</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">Abigail Johnson</h6>
                      <span class="tx-12">+1-234-567-890</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->
                  <div class="media">
                    <div class="avatar avatar-sm avatar-online"></div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">Archie Cantones</h6>
                      <span class="tx-12">archie@cantones.com</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->
                  <label class="contact-list-divider">My Friends</label>
                  <div class="media">
                    <div class="avatar avatar-sm avatar-online">
                      <span class="avatar-initial rounded-circle bg-primary"
                        >a</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">Allan Rey Palban</h6>
                      <span class="tx-12">allanr@palban.com</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->
                  <div class="media">
                    <div class="avatar avatar-sm avatar-offline">
                      <span class="avatar-initial rounded-circle bg-primary"
                        >D</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">Daniel Calinawan</h6>
                      <span class="tx-12">daniel@youremail.com</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->
                  <div class="media">
                    <div class="avatar avatar-sm avatar-offline">
                      <span class="avatar-initial rounded-circle bg-success"
                        >E</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">Elvis Vircede</h6>
                      <span class="tx-12">+63929-123-4567</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->
                  <label class="contact-list-divider">My Officemates</label>
                  <div class="media">
                    <div class="avatar avatar-sm avatar-online">
                      <span class="avatar-initial rounded-circle bg-gray-700"
                        >E</span
                      >
                    </div>
                    <div class="media-body mg-l-10">
                      <h6 class="tx-13 mg-b-3">Elena Salubre</h6>
                      <span class="tx-12">e.salubre@myemail.com</span>
                    </div>
                    <!-- media-body -->
                    <nav>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-star"
                        >
                          <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                          ></polygon></svg
                      ></a>
                      <a href=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2"
                        >
                          <polygon
                            points="16 3 21 8 8 21 3 21 3 16 16 3"
                          ></polygon></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- media -->
                </div>
                <!-- contact-list -->
              </div>
              <!-- tab-pane -->
              <div id="tabExport" class="tab-pane fade">
                <div class="pd-y-25 pd-x-20">
                  <h6 class="tx-12 tx-semibold tx-spacing-1 tx-uppercase">
                    Export Contacts
                  </h6>
                  <p class="tx-13 tx-color-03 mg-b-20">
                    You can export your contacts and import them into other
                    email apps.
                  </p>
                  <div class="form-group">
                    <label class="tx-13"
                      >Which contacts do you want to export?</label
                    >
                    <select class="custom-select tx-13">
                      <option value="1" selected="">All Contacts</option>
                      <option value="2">My Favorites</option>
                      <option value="3">My Family</option>
                      <option value="4">My Friends</option>
                      <option value="4">My Officemates</option>
                    </select>
                  </div>
                  <!-- form-group -->
                  <button class="btn btn-sm btn-primary">Export</button>
                </div>
              </div>
              <!-- tab-pane -->
            </div>
            <!-- tab-content -->
            <div class="ps__rail-x" style="left: 0px; top: 63px;">
              <div
                class="ps__thumb-x"
                tabindex="0"
                style="left: 0px; width: 0px;"
              ></div>
            </div>
            <div
              class="ps__rail-y"
              style="top: 63px; height: 760px; right: 0px;"
            >
              <div
                class="ps__thumb-y"
                tabindex="0"
                style="top: 54px; height: 659px;"
              ></div>
            </div>
          </div>
          <!-- contact-sidebar-body -->
        </div>
        <div class="contact-content">
          <div class="contact-content-header" style="width:100%;">
            <nav class="nav">
              <a
                href="#contactInformation"
                class="nav-link active"
                data-toggle="tab"
                ><span>프로젝트 계약정보</span></a
              >
              <a href="#contactLogs" class="nav-link" data-toggle="tab"
                ><span>설치환경정보</span></a
              >
              <a href="#contactLogs" class="nav-link" data-toggle="tab"
                ><span>프로젝트 이력정보</span></a
              >
            </nav>
          </div>
          <div class="contact-content-body ps" style="width:100%;">
            <div class="tab-content">
              <div
                id="contactInformation"
                class="tab-pane show active pd-20 pd-xl-25"
              >
                <div
                  class="d-flex align-items-center justify-content-between mg-b-25"
                >
                  <h6 class="mg-b-0">
                    관세청 빅데이터 분석을 위한 데이터품질 오류진단 툴 구매
                  </h6>
                  <div class="d-flex">
                    <a
                      href="#modalEditContact"
                      data-toggle="modal"
                      class="btn btn-sm btn-white d-flex align-items-center mg-r-5"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-edit-2"
                      >
                        <polygon
                          points="16 3 21 8 8 21 3 21 3 16 16 3"
                        ></polygon></svg
                      ><span class="d-none d-sm-inline mg-l-5"> Edit</span></a
                    >
                    <a
                      href="#modalDeleteContact"
                      data-toggle="modal"
                      class="btn btn-sm btn-white d-flex align-items-center"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-trash"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        ></path></svg
                      ><span class="d-none d-sm-inline mg-l-5"> Delete</span></a
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="col-6 col-sm">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >계약유형</label
                    >
                    <p class="mg-b-0">유지관리계약</p>
                  </div>
                  <!-- col -->
                  <div class="col-6 col-sm">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >계약일자</label
                    >
                    <p class="mg-b-0">2018.07.31</p>
                  </div>
                  <!-- col -->
                  <div class="col-sm mg-t-20 mg-sm-t-0">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >담당자</label
                    >
                    <p class="mg-b-0">서영무</p>
                  </div>
                  <!-- col -->
                </div>
                <!-- row -->

                <h6 class="mg-t-40 mg-b-20">고객사 담당자 정보</h6>

                <div class="row row-sm">
                  <div class="col-6 col-sm-4">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Mobile Phone</label
                    >
                    <p class="tx-primary tx-rubik mg-b-0">+1 290 912 3868</p>
                  </div>
                  <div class="col-6 col-sm-4">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Home Phone</label
                    >
                    <p class="tx-primary tx-rubik mg-b-0">+1 011 342 3129</p>
                  </div>
                  <div class="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Work Phone</label
                    >
                    <p class="tx-primary tx-rubik mg-b-0">+1 100 003 3344</p>
                  </div>
                  <div class="col-sm-4 mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Email Address</label
                    >
                    <p class="tx-primary mg-b-0">me@themepixels.me</p>
                  </div>
                  <div class="col-sm-4 mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Company</label
                    >
                    <p class="mg-b-0">ThemePixels, Inc.</p>
                  </div>
                  <div class="col-sm-4 mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Job Position</label
                    >
                    <p class="mg-b-0">President &amp; CEO</p>
                  </div>
                  <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Home Address</label
                    >
                    <p class="mg-b-0">
                      4658 Kenwood Place<br />Pompano Beach, FL 33060, United
                      States
                    </p>
                  </div>
                  <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Work Address</label
                    >
                    <p class="mg-b-0">
                      819 Waldeck Street<br />Farmers Branch, TX 75244, United
                      States
                    </p>
                  </div>
                  <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Personal Website</label
                    >
                    <p class="tx-primary mg-b-0">http://themepixels.me/</p>
                  </div>
                  <div class="col-sm-6 mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >Social Profiles</label
                    >
                    <nav class="nav nav-social">
                      <a href="" class="nav-link"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-facebook"
                        >
                          <path
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          ></path></svg
                      ></a>
                      <a href="" class="nav-link"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-twitter"
                        >
                          <path
                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                          ></path></svg
                      ></a>
                      <a href="" class="nav-link"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-instagram"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                          ></path>
                          <line
                            x1="17.5"
                            y1="6.5"
                            x2="17.5"
                            y2="6.5"
                          ></line></svg
                      ></a>
                      <a href="" class="nav-link"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github"
                        >
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          ></path></svg
                      ></a>
                    </nav>
                  </div>
                  <!-- col -->
                  <div class="col-sm mg-t-20 mg-sm-t-30">
                    <label
                      class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"
                      >비고</label
                    >
                    <p class="tx-13 mg-b-0">
                      관세청은 DBMS를 비투엔 연구소에서 설치하였습니다.
                      관리포인트가 연구소에 있으며 고객의 요구사항이 빈번하게
                      발생하는 편입니다.
                    </p>
                  </div>
                </div>
                <!-- row -->
              </div>
              <div id="contactLogs" class="tab-pane pd-20 pd-xl-25">
                <div
                  class="d-flex align-items-center justify-content-between mg-b-30"
                >
                  <h6 class="tx-15 mg-b-0">Call &amp; Message Logs</h6>
                  <a
                    href="#"
                    class="btn btn-sm btn-white d-flex align-items-center"
                    ><i class="icon ion-md-time mg-r-5 tx-16 lh--9"></i> Clear
                    History</a
                  >
                </div>
              </div>
              <!-- tab-pane -->
            </div>
            <!-- tab-content -->
            <div class="ps__rail-x" style="left: 0px; top: 0px;">
              <div
                class="ps__thumb-x"
                tabindex="0"
                style="left: 0px; width: 0px;"
              ></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; right: 0px;">
              <div
                class="ps__thumb-y"
                tabindex="0"
                style="top: 0px; height: 0px;"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- container -->
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.contact-sidebar {
  left: 0;
}
.contact-content {
  left: 280px;
}
</style>
