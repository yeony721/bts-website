<template>
  <div class="content ht-100v pd-0">
    <Header
      v-bind:crumb="crumb"
      v-bind:activeCrumb="activeCrumb"
      v-bind:viewTitle="viewTitle"
    >
    </Header>
    <div class="content-body">
      <div class="container pd-x-0">
        <calendar
          style="height: 800px;"
          :calendars="calendarList"
          :schedules="scheduleList"
          :view="view"
          :taskView="taskView"
          :scheduleView="scheduleView"
          :theme="theme"
          :week="week"
          :month="month"
          :timezones="timezones"
          :disableDblClick="disableDblClick"
          :isReadOnly="isReadOnly"
          :template="template"
          :useCreationPopup="useCreationPopup"
          :useDetailPopup="useDetailPopup"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "tui-calendar/dist/tui-calendar.css";
import { Calendar } from "@toast-ui/vue-calendar";
import Header from "@/components/header.vue";

const PAGEINFOS = {
  PAGENAME: "솔루션정보 관리",
  CRUMB: "솔루션정보 관리",
};

export default {
  components: {
    calendar: Calendar,
    Header,
  },
  data() {
    return {
      viewTitle: PAGEINFOS.PAGENAME,
      activeCrumb: PAGEINFOS.PAGENAME,
      crumb: PAGEINFOS.CRUMB,
      calendarList: [
        {
          id: "0",
          name: "home",
        },
        {
          id: "1",
          name: "office",
        },
      ],
      scheduleList: [
        {
          id: "1",
          calendarId: "1",
          title: "my schedule",
          category: "time",
          dueDateClass: "",
          start: "2018-10-18T22:30:00+09:00",
          end: "2018-10-19T02:30:00+09:00",
        },
        {
          id: "2",
          calendarId: "1",
          title: "second schedule",
          category: "time",
          dueDateClass: "",
          start: "2018-10-18T17:30:00+09:00",
          end: "2018-10-19T17:31:00+09:00",
        },
      ],
      view: "month",
      taskView: false,
      scheduleView: ["time"],
      theme: {
        // month header 'dayname'
        "month.dayname.height": "42px",
        "month.dayname.borderLeft": "none",
        "month.dayname.paddingLeft": "8px",
        "month.dayname.paddingRight": "0",
        "month.dayname.fontSize": "13px",
        "month.dayname.backgroundColor": "inherit",
        "month.dayname.fontWeight": "normal",
        "month.dayname.textAlign": "left",

        // month day grid cell 'day'
        "month.holidayExceptThisMonth.color": "#f3acac",
        "month.dayExceptThisMonth.color": "#bbb",
        "month.weekend.backgroundColor": "#fafafa",
        "month.day.fontSize": "16px",

        // month schedule style
        "month.schedule.borderRadius": "5px",
        "month.schedule.height": "18px",
        "month.schedule.marginTop": "2px",
        "month.schedule.marginLeft": "10px",
        "month.schedule.marginRight": "10px",

        // month more view
        "month.moreView.boxShadow": "none",
        "month.moreView.paddingBottom": "0",
        "month.moreView.border": "1px solid #9a935a",
        "month.moreView.backgroundColor": "#f9f3c6",
        "month.moreViewTitle.height": "28px",
        "month.moreViewTitle.marginBottom": "0",
        "month.moreViewTitle.backgroundColor": "#f4f4f4",
        "month.moreViewTitle.borderBottom": "1px solid #ddd",
        "month.moreViewTitle.padding": "0 10px",
        "month.moreViewList.padding": "10px",
      },
      week: {
        narrowWeekend: true,
        showTimezoneCollapseButton: true,
        timezonesCollapsed: false,
      },
      month: {
        visibleWeeksCount: 6,
        startDayOfWeek: 1,
      },
      timezones: [
        {
          timezoneOffset: 540,
          displayLabel: "GMT+09:00",
          tooltip: "Seoul",
        },
        {
          timezoneOffset: -420,
          displayLabel: "GMT-08:00",
          tooltip: "Los Angeles",
        },
      ],
      disableDblClick: true,
      isReadOnly: false,
      template: {
        milestone: function(schedule) {
          return `<span style="color:red;">${schedule.title}</span>`;
        },
        milestoneTitle: function() {
          return "MILESTONE";
        },
      },
      useCreationPopup: true,
      useDetailPopup: false,
    };
  },
  methods: {
    setInfos(idx) {
      this.isModalShow = true;
      this.currentInfoIdx = idx;
    },
    showAlert() {
      alert("update");
    },
  },
  mounted() {
    this.$http
      .get("/src/assets/data/baseinfo/soluction/list.json")
      .then((response) => {
        this.soluctionList = response.data;
      });
  },
};
</script>
<style scoped>
.content-body {
  padding: 0;
}
</style>
