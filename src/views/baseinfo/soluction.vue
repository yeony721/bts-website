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
    <div class="content-body">
      <div class="container pd-x-0">
        <div
          class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
        >
          <div>
            <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">
              <i data-feather="file" class="wd-10 mg-r-5"></i> 추가
            </button>
          </div>
        </div>

        <div class="card mg-b-20 mg-lg-b-25">
          <div class="card-body pd-25">
            <div class="media d-block d-sm-flex">
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
                  class="feather feather-briefcase tx-white-7 wd-40 ht-40"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div class="media-body pd-t-25 pd-sm-t-0 pd-sm-l-25">
                <div
                  class="d-flex align-items-center justify-content-between mg-b-25"
                >
                  <h5 class="mg-b-5">SDQ3</h5>
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
                      ><span class="d-none d-sm-inline mg-l-5">수정</span></a
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
                      ><span class="d-none d-sm-inline mg-l-5">삭제</span></a
                    >
                  </div>
                </div>
                <p class="mg-b-3 tx-color-02">데이터 품질관리 솔루션</p>
                <span class="d-block tx-13 tx-color-03">최신버젼 : 3.4.2</span>
                <ul class="pd-l-10 mg-0 mg-t-20 tx-13">
                  <li>설명입력</li>
                  <li>설치가능 OS는</li>
                  <li>최소, 최대 메모리</li>
                  <li>지원가능 WAS</li>
                  <li>용량, 브라우져</li>
                </ul>
              </div>
            </div>
            <!-- media -->
          </div>
        </div>
        <div class="card mg-b-20 mg-lg-b-25">
          <div class="card-body pd-25">
            <div class="media d-block d-sm-flex">
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
                  class="feather feather-briefcase tx-white-7 wd-40 ht-40"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div class="media-body pd-t-25 pd-sm-t-0 pd-sm-l-25">
                <h5 class="mg-b-5">SMETA</h5>
                <p class="mg-b-3 tx-color-02">
                  <span class="tx-medium tx-color-01">ThemePixels, Inc.</span>,
                  Bay Area, San Francisco, CA
                </p>
                <span class="d-block tx-13 tx-color-03"
                  >December 2016 - Present</span
                >

                <ul class="pd-l-10 mg-0 mg-t-20 tx-13">
                  <li>Reaching the targets and goals set for my area.</li>
                  <li>Servicing the needs of my existing customers.</li>
                  <li>
                    Maintaining the relationships with existing customers for
                    repeat business.
                  </li>
                  <li>Reporting to top managers.</li>
                  <li>Keeping up to date with the products.</li>
                </ul>
              </div>
            </div>
            <!-- media -->
          </div>
        </div>

        <div class="card mg-b-20 mg-lg-b-25">
          <div class="card-body pd-25">
            <div class="media d-block d-sm-flex">
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
                  class="feather feather-briefcase tx-white-7 wd-40 ht-40"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div class="media-body pd-t-25 pd-sm-t-0 pd-sm-l-25">
                <h5 class="mg-b-5">SDQ4</h5>
                <p class="mg-b-3 tx-color-02">
                  <span class="tx-medium tx-color-01">ThemePixels, Inc.</span>,
                  Bay Area, San Francisco, CA
                </p>
                <span class="d-block tx-13 tx-color-03"
                  >December 2016 - Present</span
                >

                <ul class="pd-l-10 mg-0 mg-t-20 tx-13">
                  <li>Reaching the targets and goals set for my area.</li>
                  <li>Servicing the needs of my existing customers.</li>
                  <li>
                    Maintaining the relationships with existing customers for
                    repeat business.
                  </li>
                  <li>Reporting to top managers.</li>
                  <li>Keeping up to date with the products.</li>
                </ul>
              </div>
            </div>
            <!-- media -->
          </div>
        </div>

        <div class="card mg-b-20 mg-lg-b-25">
          <div class="card-body pd-25">
            <div class="media d-block d-sm-flex">
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
                  class="feather feather-briefcase tx-white-7 wd-40 ht-40"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div class="media-body pd-t-25 pd-sm-t-0 pd-sm-l-25">
                <h5 class="mg-b-5">SFLOW</h5>
                <p class="mg-b-3 tx-color-02">
                  <span class="tx-medium tx-color-01">ThemePixels, Inc.</span>,
                  Bay Area, San Francisco, CA
                </p>
                <span class="d-block tx-13 tx-color-03"
                  >December 2016 - Present</span
                >

                <ul class="pd-l-10 mg-0 mg-t-20 tx-13">
                  <li>Reaching the targets and goals set for my area.</li>
                  <li>Servicing the needs of my existing customers.</li>
                  <li>
                    Maintaining the relationships with existing customers for
                    repeat business.
                  </li>
                  <li>Reporting to top managers.</li>
                  <li>Keeping up to date with the products.</li>
                </ul>
              </div>
            </div>
            <!-- media -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
