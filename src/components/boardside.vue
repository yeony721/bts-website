<template>
    <!-- sidd-bar -->
        <div class="contact-sidebar">
          <div class="flex-fill pd-y-20 pd-x-10">
            <div class="sidebar-body">
              <router-link to="/noticeboard">
                <h5 class="tx-semibold mg-b-30">
                  전체글 보기
                </h5>
              </router-link>
              <router-link to="/noticeboard/clickmenu/01">
                <h5 class="tx-semibold mg-b-30">
                  공지사항
                </h5>
              </router-link>
              <hr />
              <!-- 게시판 -->
              <a
                href="#showboard"
                class="d-flex align-items-center justify-content-between mg-b-2 show"
                data-toggle="collapse"
                ><h5 class="tx-semibold mg-b-10">
                  게시판
                </h5>
                <i data-feather="chevron-down"></i>
              </a>
              <div class="collapse show" id="showboard">
                  <ul class="nav nav-aside mg-b-0 mg-l-15">
                    <li class="nav-item">
                      <router-link to="/noticeboard/clickmenu/02" class="nav-link">
                      <span>기술 지원 이력</span>
                      </router-link>
                    </li>
                  </ul>
              </div>
              <!-- 게시판 -->
            </div>
          </div>
          <div
            class="sidebar-body write-botton"
          >
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="writeContent"
            >
              글쓰기
            </button>
          </div>
        </div>
        <!-- side bar-->
</template>
<script>
export default {
    methods:{
      writeContent(){
        if(String(this.$route.params.boardDivCd) == "undefined"){
          this.$router.push({path: '/noticeboard/writepost'});
        }
        else{
          var boardDivCd = String(this.$route.params.boardDivCd)
          this.$router.push({path:`/noticeboard/writepost/${boardDivCd}`})
        }
      },
    }
}
</script>
<style scoped>
.write-botton{
  position: absolute;bottom: 15px; left: 0; right: 0; display: flex; align-items: center; justify-content: space-between; height: 60px; padding-left: 20px; padding-right: 15px;
}
</style>