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
                솔루션정보 관리
              </li>
            </ol>
          </nav>
          <h4 class="mg-b-0 tx-spacing--1">솔루션정보 관리</h4>
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
          <div class="card mg-b-20 mg-lg-b-25" style="border:none">
            <!-- card-header -->
            <div class="card-body pd-45">
              <div class="media">
                <div
                  class="wd-80 ht-80 bg-ui-04 rounded d-flex align-items-center justify-content-center"
                >
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
                    class="feather feather-book-open tx-white-7 wd-40 ht-40"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div class="media-body pd-l-25">
                  <h5 class="mg-b-5">관세청 이력</h5>
                  <p class="mg-b-3">
                    <span class="tx-medium tx-color-02"
                      >Holy Name University</span
                    >, Tagbilaran City, Bohol
                  </p>
                  <span class="d-block tx-13 tx-color-03">2002-2006</span>
                </div>
              </div>
              <!-- media -->
            </div>
            <!-- card-footer -->
          </div>

          <div class="media d-block d-lg-flex">
            <div class="media-body">
              <div class="timeline-group tx-13">
                <div class="timeline-label">Today</div>
                <div class="timeline-item">
                  <div class="timeline-time">2020.11.09</div>
                  <div class="timeline-body">
                    <a href="#offCanvas3" class="off-canvas-menu">
                      <h6 class="mg-b-0">
                        <span class="badge badge-success">신규설치</span>3.4.1
                        패치 완료
                      </h6></a
                    >
                    <p>패치완료후 정상 동작 확인</p>
                    <p><a href="">서영무</a></p>
                  </div>
                  <!-- timeline-body -->
                </div>
                <!-- timeline-item -->
                <div class="timeline-item">
                  <div class="timeline-time">2020.10.11</div>
                  <div class="timeline-body">
                    <h6 class="mg-b-0">
                      <span class="badge badge-warning">장애대응</span>
                      최초설치완료
                    </h6>
                    <p>설치를 완료</p>
                    <p><a href="">서영무</a></p>
                  </div>
                  <!-- timeline-body -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- container -->
    </div>

    <div
      id="offCanvas3"
      class="off-canvas off-canvas-overlay off-canvas-right wd-600"
    >
      <a href="#" class="close"><i data-feather="x"></i></a>

      <div class="pd-25 ht-100p tx-13">
        <h6 class="tx-inverse mg-t-50 mg-b-25">What does royalty free mean?</h6>
        <p class="mg-b-25">
          Royalty free means you just need to pay for rights to use the item
          once per end product. You don't need to pay additional or ongoing fees
          for each person who sees or uses it.
        </p>
        <a href="" class="btn btn-primary btn-block">Learn More</a>
      </div>
    </div>
    <!-- off-canvas -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteInfoList: Array,
    };
  },
  mounted() {
    this.$http
      .get("/src/assets/data/baseinfo/customer/list.json")
      .then((response) => {
        this.siteInfoList = response.data;
      });

    $(".off-canvas-menu").on("click", function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $(target).addClass("show");
    });

    $(".off-canvas .close").on("click", function(e) {
      e.preventDefault();
      $(this)
        .closest(".off-canvas")
        .removeClass("show");
    });

    $(document).on("click touchstart", function(e) {
      e.stopPropagation();

      // closing of sidebar menu when clicking outside of it
      if (!$(e.target).closest(".off-canvas-menu").length) {
        var offCanvas = $(e.target).closest(".off-canvas").length;
        if (!offCanvas) {
          $(".off-canvas.show").removeClass("show");
        }
      }
    });
  },
};
</script>

<style>
.contact-sidebar {
  left: 0;
}
.contact-content {
  left: 280px;
}
</style>
