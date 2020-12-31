import "../src/assets/css/base.css";
import axios from "axios";
import moment from "moment";
import Vue from "vue";
import VueRouter from "vue-router";
import Aside from "@/components/aside.vue";
import DashboardView from "@/views/dashboard/dashboard.vue";
import SolutionView from "@/views/baseinfo/solution.vue";
import CustomerView from "@/views/baseinfo/customer.vue";
import ProjectView from "@/views/baseinfo/project.vue";
import SupportView from "@/views/baseinfo/support.vue";
import HistoryView from "@/views/support/history.vue";
import BoardView from "@/views/support/board.vue";
import Calendar from "@/views/schedule/calendar.vue";
import Noticeboard from "@/views/board/allcontents.vue";
import Clickmenu from "@/views/board/clickmenu.vue";
import Postcontent from "@/views/board/postcontent.vue";
import Writepost from "@/views/board/writepost.vue";

//axios.defaults.baseURL = "/src/assets/data";
axios.defaults.baseURL = "http://127.0.0.1:18082";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

Vue.use(VueRouter);
Vue.prototype.$http = axios;

const router = new VueRouter({
  linkActiveClass: "active",
  routes: [
    { path: "/", component: DashboardView },
    { path: "/solution", component: SolutionView },
    { path: "/customer", component: CustomerView },
    { path: "/project", component: ProjectView },
    { path: "/support", component: SupportView },
    { path: "/board", component: BoardView },
    { path: "/history", component: HistoryView },
    { path: "/calendar", component: Calendar },
    { path: "/noticeboard", component: Noticeboard},
    { path: "/noticeboard/clickmenu/:boardDivCd", component: Clickmenu },
    { path: "/noticeboard/writepost/:boardDivCd?/:contentId?", component: Writepost },
    { path: "/noticeboard/postcontent/:boardDivCd/:contentId", component: Postcontent}
  ],
  beforeRouteEnter(to, from, next) {
    let item = document.querySelectorAll(".nav-item");
    for (let el of item) {
      el.classList.remove("active");
    }
    // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
    // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
    // `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!
  },
  beforeRouteLeave(to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.
    // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
  },
});

new Vue({
  data() {
    return {};
  },
  router,
  el: "#app",
  components: { "aside-view": Aside },
}).$mount("#app");
