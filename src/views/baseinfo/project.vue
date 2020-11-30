<template>
  <div class="content ht-100v pd-0">
    <div class="content-header">
      <div class="d-sm-flex align-items-center justify-content-between">
        <div>
          <nav aria-label="breadcrumb">
            <ol
              class="breadcrumb breadcrumb-style1"
              style="margin-bottom: 0px;"
            >
              <li class="breadcrumb-item"><a href="#">기반정보관리</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ title }}
              </li>
            </ol>
          </nav>
          <h4 class="mg-b-0 tx-spacing--1">{{ title }}</h4>
        </div>
      </div>
    </div>
    <div class="content-body">
      <div class="container pd-x-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "프로젝트정보관리",
    };
  },
  created() {
    var vm = this;
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        vm.users = response.data;
      });
  },

  methods: {
    fetchData: function() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/users/")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
