<template>
  <div id="app">
    <!--  头部  -->
    <div class="header">
      <!-- logo -->
      <div class="logo" @click="clickLogoJumpHomePage">小羊日记</div>
      <!-- 路由 -->
      <ul class="nav">
        <li
          v-for="(item, index) in routerData"
          :key="index"
          @click="PageJump(item.name)"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>

    <!-- 路由 显示首页 -->
    <router-link to="/"></router-link>
    <!-- 路由渲染出口 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// 引入路由
import router from "./router/index";

// 路由数据
let routerData = [
  {
    name: "home",
    text: "首页",
  },
  {
    name: "see",
    text: "日记",
  },
  {
    name: "remind",
    text: "提醒",
  },
  {
    name: "about",
    text: "关于我",
  },
];

// 页面跳转的方法
let PageJump = (name) => {
  router.push({ name });
};
// 点击logo 跳转首页
let clickLogoJumpHomePage = () => {
  router.push({
    name: "home",
  });
};
</script>

<style scoped lang="less">
//头部
.header {
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  color: #fff;
  user-select: none;
  border-bottom: 1px solid rgb(84 84 84 / 48%);
  background-color: #1a1a1a;

  //logo
  .logo {
    width: 250px;
    height: 100%;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #c6e2ff;
    animation: neon 0.08s ease-in-out infinite;
    cursor: pointer;
  }

  // 导航栏
  .nav {
    margin-right: 100px;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    height: 100%;

    .liActivation {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100%;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  //动画
  @keyframes neon {
    from {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
        0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
        0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
        0 0 54px rgba(30, 132, 242, 0.92);
    }
    to {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
        0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
        0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
        0 0 60px rgba(30, 132, 242, 1);
    }
  }
}
</style>
