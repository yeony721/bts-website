<template>
     <!-- modal -->
    <div
      class="modal fade effect-scale"
      id="modalEditContact"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body pd-20 pd-sm-30">
            <button
              type="button"
              class="close pos-absolute t-15 r-20"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <slot name="modal-title"></slot> <!-- modal-header -->
            <div class="d-sm-flex">
              <div class="mg-sm-r-30">
                <div class="pos-relative d-inline-block mg-b-20">
                  <div class="avatar avatar-xxl">
                    <span
                      class="avatar-initial rounded-circle bg-gray-700 tx-normal"
                      >A</span
                    >
                  </div>
                  <a href="" class="contact-edit-photo"
                    ><i data-feather="edit-2"></i
                  ></a>
                </div>
              </div>
              <!-- col -->
                <div class="flex-fill">
                <slot name="modal-body"></slot> <!-- modal-body -->
                </div>
              <!-- col -->
            </div>
          </div>
          <div class="modal-footer">
            <div
              class="wd-100p d-flex flex-column flex-sm-row justify-content-end"
            >
              <button type="button" class="btn btn-primary mg-b-5 mg-sm-b-0" @click="save">
                저장
              </button>
              <button
                type="button"
                class="btn btn-secondary mg-sm-l-5"
                data-dismiss="modal"
              >
                닫기
              </button>
            </div>
          </div>
          <!-- modal-footer -->
        </div>
        <!-- modal-content -->
      </div>
      <!-- modal-dialog -->
    </div>
    <!-- modal -->
</template>
<script>
export default {
  methods: {
    save () {
      this.$emit('update')
    }
  }
}
</script>

