<script setup>
// 引入
import { ref } from "vue";
import router from "../router/index";
import { useRouter } from "vue-router";

const route = useRouter();

/**
 * monthArr   1到12月数组  用于渲染header头部
 */
const monthArr = ref([
  {
    text: "一月",
    month: 1,
  },
  {
    text: "二月",
    month: 2,
  },
  {
    text: "三月",
    month: 3,
  },
  {
    text: "四月",
    month: 4,
  },
  {
    text: "五月",
    month: 5,
  },
  {
    text: "六月",
    month: 6,
  },
  {
    text: "七月",
    month: 7,
  },
  {
    text: "八月",
    month: 8,
  },
  {
    text: "九月",
    month: 9,
  },
  {
    text: "十月",
    month: 10,
  },
  {
    text: "十一月",
    month: 11,
  },
  {
    text: "十二月",
    month: 12,
  },
]);

/**
 *  choiceMonth  方法   点击月份跳转到查看日记页面
 *    m 参数  当前点击的月份
 */
const choiceMonth = (m) => {
  //路由跳转
  router.push({
    name: "see",
    param: {
      m,
    },
  });
};
</script>

<template>
  <!-- 头部 选择月份 -->
  <div class="header-choice-month">
    <!-- logo -->
    <div class="logo">小羊日记</div>
    <!-- 返回 -->

    <!-- <a class="link" target="_blank">&larr; Back to Previous </a> -->
    <!-- 选择月份 -->
    <!-- <div class="choice-month-box">
      <ul class="choice-month">
        <li
          v-for="item in monthArr"
          :index="item.month"
          @click="choiceMonth(item.month)"
        >
          {{ item.text }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<style scoped lang="less">
//选择月份
.header-choice-month {
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
  //返回上一页
  .link {
    color: #828282;
    text-decoration: none;
    font-family: "Vibur", cursive;
    font-size: 20px;
    cursor: pointer;

    &:focus,
    &:hover {
      color: #c6e2ff;
      text-shadow: 0 0 2px rgba(202, 228, 225, 0.92),
        0 0 10px rgba(202, 228, 225, 0.34), 0 0 4px rgba(30, 132, 242, 0.52),
        0 0 7px rgba(30, 132, 242, 0.92), 0 0 11px rgba(30, 132, 242, 0.78),
        0 0 16px rgba(30, 132, 242, 0.92);
    }
  }

  //选择月份
  .choice-month-box {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .choice-month {
    display: flex;
    width: 66%;

    li {
      flex-grow: 1;
      font-size: 20px;
      text-align: center;
      color: #afafaf;
      cursor: pointer;

      &:hover {
        background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
