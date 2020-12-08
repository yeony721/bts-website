<template>
  <div class="card mg-b-20 mg-lg-b-25">
    <div class="card-body pd-25">
      <div class="media d-block d-sm-flex">
        <div class="avatar avatar-xxl">
          <img class="avatar-initial rounded-circle bg-indigo" :src="imgPath" />
        </div>
        <div class="media-body pd-t-25 pd-sm-t-0 pd-sm-l-25">
          <h5 class="mg-b-5">{{ title }}</h5>
          <p class="mg-b-3 tx-color-02">
            <span class="tx-medium tx-color-01">{{ desc }}</span>
          </p>
          <span class="d-block tx-14 tx-color-03"> {{ subdesc }}</span>
        </div>
        <slot></slot>
      </div>
      <!-- media -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    imgPath: String,
    desc: String,
    subdesc: String,
  },
};
</script>
<style scoped>
.card{
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius:0;
}
</style>
