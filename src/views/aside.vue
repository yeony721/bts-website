<template>
  <aside class="aside aside-fixed">
    <div class="aside-header">
      <img src="../assets/img/logo.png" class="aside-logo" />
      <a href="" class="aside-menu-link">
        <i data-feather="menu"></i>
        <i data-feather="x"></i>
      </a>
    </div>
    <div class="aside-body">
      <div class="aside-loggedin">
        <div class="d-flex align-items-center justify-content-start">
          <a href="" class="avatar"
            ><img
              src="https://via.placeholder.com/500"
              class="rounded-circle"
              alt=""
          /></a>
          <div class="aside-alert-link">
            <a
              href=""
              class="new"
              data-toggle="tooltip"
              title="You have 2 unread messages"
              ><i data-feather="message-square"></i
            ></a>
            <a
              href=""
              class="new"
              data-toggle="tooltip"
              title="You have 4 new notifications"
              ><i data-feather="bell"></i
            ></a>
            <a href="" data-toggle="tooltip" title="Sign out"
              ><i data-feather="log-out"></i
            ></a>
          </div>
        </div>
        <div class="aside-loggedin-user">
          <a
            href="#loggedinMenu"
            class="d-flex align-items-center justify-content-between mg-b-2"
            data-toggle="collapse"
          >
            <h6 class="tx-semibold mg-b-0">서영무 선임</h6>
            <i data-feather="chevron-down"></i>
          </a>
          <p class="tx-color-03 tx-12 mg-b-0">Administrator</p>
        </div>
        <div class="collapse" id="loggedinMenu">
          <ul class="nav nav-aside mg-b-0">
            <li class="nav-item">
              <a href="" class="nav-link"
                ><i data-feather="edit"></i> <span>Edit Profile</span></a
              >
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"
                ><i data-feather="user"></i> <span>View Profile</span></a
              >
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"
                ><i data-feather="settings"></i>
                <span>Account Settings</span></a
              >
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"
                ><i data-feather="help-circle"></i> <span>Help Center</span></a
              >
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"
                ><i data-feather="log-out"></i> <span>Sign Out</span></a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- aside-loggedin -->
      <ul class="nav nav-aside">
        <li class="nav-label">
          <router-link class="nav-link" to="/">대시보드</router-link>
        </li>
        <li class="nav-label mg-t-25">기반정보관리</li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/soluction"
            ><i data-feather="shopping-bag"></i>
            <span>솔루션정보 관리</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/calendar"
            ><i data-feather="pie-chart"></i
            ><span>고객사정보 관리</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/project"
            ><i data-feather="globe"></i
            ><span>프로젝트정보 관리</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/support"
            ><i data-feather="pie-chart"></i
            ><span>기술지원정보 관리</span></router-link
          >
        </li>
        <li class="nav-label mg-t-25">기술지원현황</li>
        <li class="nav-item">
          <router-link class="nav-link" to="/board"
            ><i data-feather="calendar"></i><span>보드</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/history"
            ><i data-feather="message-square"></i>
            <span>기술지원이력</span></router-link
          >
        </li>
        <li class="nav-label mg-t-25">일정관리</li>
        <li class="nav-label mg-t-25">통계분석</li>
        <li class="nav-label mg-t-25">게시판&자료실</li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {};
</script>
