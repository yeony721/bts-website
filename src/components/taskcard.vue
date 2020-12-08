<template>
  <div
    class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white"
    style="font-size:12px;"
  >
    <div class="flex justify-between">
      <span class="badge badge-success" v-if="task.ticketStatusCode == '1'"
        >신규설치</span
      >
      <span class="badge badge-warning" v-if="task.ticketStatusCode == '2'"
        >장애대응</span
      >
      <span class="badge badge-dark" v-if="task.ticketStatusCode == '3'"
        >이전설치</span
      >
      <span class="badge badge-info" v-if="task.ticketStatusCode == '4'"
        >업그레이드</span
      >
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ task.title }}
      </p>
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{ task.date }}</span>
      <badge v-if="task.type" :color="badgeColor">{{ task.type }}</badge>
    </div>
  </div>
</template>
<script>
import Badge from "./badge.vue";
export default {
  components: {
    Badge,
  },
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: "purple",
        "Feature Request": "teal",
        Backend: "blue",
        QA: "green",
        default: "teal",
      };
      return mappings[this.task.type] || mappings.default;
    },
  },
};
</script>
