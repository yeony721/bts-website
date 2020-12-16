<template>
  <div
    class="modal fade effect-scale"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-title"></slot>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            취소
          </button>
          <button
            v-on:click="deleteSiteInfo()"
            type="button"
            class="btn btn-primary"
          >
            삭제하겠습니다.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    deleteSiteInfo() {
      this.$emit("update");
    },
  },
};
</script>
