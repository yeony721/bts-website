import axios from "axios";
import moment from "moment";
import Vue from "vue";
import VueRouter from "vue-router";
import Aside from "./views/aside.vue";
import Dashboard from "./views/dashboard/dashboard.vue";
import Support from "./views/baseinfo/support.vue";
import Project from "./views/baseinfo/project.vue";
import Soluction from "./views/baseinfo/soluction.vue";
import History from "./views/support/history.vue";
import Board from "./views/support/board.vue";

Vue.use(VueRouter);
Vue.prototype.$http = axios;

new Vue({
  router: new VueRouter({
    routes: [
      { path: "/", component: Dashboard },
      { path: "/soluction", component: Soluction },
      { path: "/support", component: Support },
      { path: "/history", component: History },
      { path: "/project", component: Project },
      { path: "/board", component: Board },
    ],
  }),
  el: "#app",
  components: { "aside-view": Aside },
}).$mount("#app");
