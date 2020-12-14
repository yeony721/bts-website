<template>
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
          @input="currentFilterValue = $event.target.value"
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
              style="cursor:pointer;"
              class="media"
              v-for="(item, i) in filteredData"
              v-on:click="showSiteDetail(item.siteNm)"
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
</template>
<script>
import * as _ from "lodash";

export default {
  props: {
    siteInfoList: Array,
    currentSiteIdx: String,
  },
  data() {
    return {
      currentFilterValue: "",
    };
  },
  computed: {
    filteredData() {
      var self = this;
      if (
        this.currentFilterValue != undefined &&
        this.currentFilterValue != ""
      ) {
        return this.siteInfoList.filter(function(d) {
          return d.siteNm.indexOf(self.currentFilterValue) != -1;
        });
      } else {
        return this.siteInfoList;
      }
    },
  },
  methods: {
    showSiteDetail(sitename) {
      var result = _.findIndex(this.siteInfoList, { siteNm: sitename });
      this.$emit('update-idx',result.toString());
    },
  },
  mounted: {
    filteredData(){
      return this.siteInfoList;
    }
  },
};
</script>
