<template>
  <!--  首页-->
  <div class="home">
    <!-- 内容 -->
    <main class="main">
      <h1>小羊日记</h1>
      <h2>记录每天发生的事情</h2>
      <h3>懒狗不会每天写日记,点击提醒小羊写日记</h3>
      <!--  处理按钮  -->
      <div class="handle">
        <button class="see" @click="see">查看日记</button>
        <button class="remind" @click="remind">提醒</button>
      </div>
    </main>
    <!--  尾部  -->
    <footer>
      <span>网站作者:我看起来呆呆的</span>
    </footer>

    <!-- 路由渲染出口 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// 引入路由
import router from "../router/index.js";
/**
 *  see 跳转到查看日记页面
 *
 *  remind 跳转到提醒页面
 * */
const see = () => {
  router.push({
    name: "see",
  });
};

const remind = () => {
  router.push({
    name: "remind",
  });
};
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  user-select: none;
  background: #1a1a1a;

  //内容
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid rgb(84 84 84 / 48%);

    h1,
    h2 {
      font-size: 65px;
      line-height: 80px;
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: 50px;
    }

    h3 {
      font-size: 28px;
      line-height: 50px;
      color: #979797;
    }

    // 处理按钮
    .handle {
      button {
        margin: 20px 10px;
        padding: 10px 20px;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        cursor: pointer;
      }

      //查看按钮
      .see {
        color: #233248;
        background: #00c681;
      }

      .see:hover {
        color: #233248;
        background: #00e390;
      }

      //提醒按钮
      .remind {
        color: #acc5e6;
        background: #2f2f2f;
      }

      .remind:hover {
        background: #3a3a3a;
      }
    }
  }

  //尾部
  footer {
    width: 100%;
    height: 70px;
    text-align: center;
    border-bottom: 1px solid rgb(84 84 84 / 48%);

    span {
      font-size: 20px;
      line-height: 70px;
      color: #979797;
    }
  }
}
</style>
