<template>
  <div class="content ht-100v pd-0">
    <Header
      v-bind:crumb="crumb"
      v-bind:activeCrumb="activeCrumb"
      v-bind:viewTitle="viewTitle"
    >
      <template v-sloat>
        <div class="d-none d-md-block">
          <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">
            <i data-feather="file" class="wd-10 mg-r-5"></i> 티켓생성
          </button>
        </div>
      </template>
    </Header>
    <div class="content-body">
      <div class="container pd-x-0">
        <div class="row flex-row flex-sm-nowrap py-3">
          <div
            class="col-sm-6 col-md-4 col-xl-3"
            v-for="column in columns"
            :key="column.title"
            style="width:100%"
          >
            <div class="card bg-light">
              <div class="flex justify-center">
                <div class="min-h-screen flex overflow-x-scroll py-12">
                  <div
                    class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
                    style="width:100%"
                  >
                    <p
                      class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
                    >
                      {{ column.title }}
                    </p>
                    <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
                    <draggable
                      :list="column.tasks"
                      :animation="200"
                      ghost-class="ghost-card"
                      group="tasks"
                    >
                      <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
                      <task-card
                        v-for="task in column.tasks"
                        :key="task.id"
                        :task="task"
                        class="mt-3 cursor-move"
                      ></task-card>
                      <!-- </transition-group> -->
                    </draggable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "@/components/taskcard.vue";
import Header from "@/components/header.vue";

const PAGEINFOS = {
  PAGENAME: "보드",
  CRUMB: "기술지원현황",
};

export default {
  name: "App",
  components: {
    Header,
    TaskCard,
    draggable,
  },
  data() {
    return {
      viewTitle: PAGEINFOS.PAGENAME,
      activeCrumb: PAGEINFOS.PAGENAME,
      crumb: PAGEINFOS.CRUMB,
      columns: [
        {
          title: "대기",
          tasks: [
            {
              id: 1,
              ticketStatusCode: "1",
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 2,
              ticketStatusCode: "1",
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 3,
              ticketStatusCode: "2",
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 4,
              ticketStatusCode: "3",
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 5,
              ticketStatusCode: "3",
              title: "Test checkout flow",
              date: "Sep 15",
              type: "QA",
            },
          ],
        },
        {
          title: "작업중",
          tasks: [
            {
              id: 6,
              ticketStatusCode: "4",
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 7,
              ticketStatusCode: "1",
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 8,
              ticketStatusCode: "2",
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend",
            },
          ],
        },
        {
          title: "종료",
          tasks: [
            {
              id: 9,
              ticketStatusCode: "4",
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 10,
              ticketStatusCode: "3",
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 11,
              ticketStatusCode: "1",
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 12,
              ticketStatusCode: "4",
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 13,
              ticketStatusCode: "3",
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
          ],
        },
        {
          title: "지연",
          tasks: [
            {
              id: 14,
              ticketStatusCode: "2",
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 15,
              ticketStatusCode: "3",
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 16,
              ticketStatusCode: "4",
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.col-xl-3 {
  max-width: none;
}
.card {
  border: 1px solid #f7fafc;
}
.column-width {
  min-width: 320px;
  width: 320px;
}
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>
