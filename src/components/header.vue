<template>
  <div class="content-header">
    <div class="d-sm-flex align-items-center justify-content-between">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-style1" style="margin-bottom: 0px;">
            <li class="breadcrumb-item">
              <a href="#">{{ crumb }}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ activeCrumb }}
            </li>
          </ol>
        </nav>
        <h4 class="mg-b-0 tx-spacing--1">{{ viewTitle }}</h4>
      </div>    
    </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    crumb: String,
    activeCrumb: String,
    viewTitle: String,
  },
};
</script>
