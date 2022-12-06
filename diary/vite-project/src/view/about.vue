<template>
  <div id="about">
    <div class="box">
      <!-- 头部 -->
      <header>
        <!-- 头像 -->
        <div class="photo" draggable="false">
          <img draggable="false" src="../../public/photo.jpg" alt="头像" />
        </div>
        <!-- 名称 -->
        <div class="name">
          <span class="zh">我看起来呆呆的</span>
          <span class="en">I look dull</span>
        </div>
      </header>
      <!-- 内容 -->
      <main>
        <!-- 介绍 -->
        <div class="introduce">
          <div class="en">
            l hope to create things that can become memories for others.Allat
            sea and light.
          </div>
          <div class="zh">
            希望能成为一个有趣的人,希望能创造出可以成为他人回忆的事物。
          </div>
        </div>

        <!-- 联系方式 -->
        <ul class="contact">
          <li v-for="item in iconData" :key="item.index">
            <i :class="item.icon"></i>
            <span>{{ item.text }}</span>
          </li>
        </ul>

        <!-- 我的信息 -->
        <div class="info">
          <!-- 标题 -->
          <h3 class="title">
            <el-divider content-position="left">小🐏睡不醒</el-divider>
          </h3>
          <!-- 关于我 -->
          <ul class="about-my">
            <li v-for="(item, index) in aboutMy" :key="index">{{ item }}</li>
          </ul>
          <!-- 标题 -->
          <h3 class="title">
            <el-divider content-position="left">前端历程</el-divider>
          </h3>
          <!-- 历程 -->
          <div class="course">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in course"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MoreFilled } from "@element-plus/icons-vue";

// icon 阿里图标数据
let iconData = ref([
  {
    icon: "iconfont icon-QQ",
    text: "2650628380",
    index: 1,
  },
  {
    icon: "iconfont icon-dianhua",
    text: "18269777925",
    index: 2,
  },
  {
    icon: "iconfont icon-weixin",
    text: "ystx2846",
    index: 3,
  },
  {
    icon: "iconfont icon-youjian",
    text: "xiaobaiouo669@gmail.com",
    index: 4,
  },
  {
    icon: "iconfont icon-github-fill",
    text: "xy0908",
    index: 5,
  },
]);

// 关于我的介绍
let aboutMy = ref([
  "您好，我是小🐏",
  "我是一名普普通通的前端摸🐟崽",
  "励志成为开源大佬",
  "喜欢一切新鲜有趣的事情",
  "目前在学习TypeScript和Three.js",
  "喜欢小茜，在我眼里会发光！！",
  "喜欢睡觉，睡十几个小时对我来说简直是小菜一碟",
  "喜欢吃🍉，凑热闹的事情谁会不喜欢呢",
  "喜欢象棋，下棋崽小🐏",
  "喜欢摆烂，遇见困难、开摆！",
]);

// 学习历程数据
const course = [
  {
    content: "2020年2月",
    timestamp: "第一次听说前端",
    color: "#b8b8b8",
  },
  {
    content: "2020年11月",
    timestamp: "学校学习了html",
    color: "#b8b8b8",
  },
  {
    content: "2021年1月",
    timestamp: "开始正式学习前端",
    color: "#b8b8b8",
  },
  {
    content: "2021年2月",
    timestamp: "学习了html+css",
    color: "#b8b8b8",
  },
  {
    content: "2021年4月",
    timestamp: "学习了JavaScript",
    color: "#b8b8b8",
  },
  {
    content: "2021年6月",
    timestamp: "学习了node.js",
    color: "#b8b8b8",
  },
  {
    content: "2021年8月",
    timestamp: "学习了微信小程序开发",
    color: "#b8b8b8",
  },
  {
    content: "2021年10月",
    timestamp: "学习了vue.js",
    color: "#b8b8b8",
  },
  {
    content: "2022年5月",
    timestamp: "开始工作",
    color: "#b8b8b8",
  },
  {
    content: "2021年10月",
    timestamp: "辞职",
    color: "#b8b8b8",
  },
  {
    content: "至今",
    timestamp: "为去四川做准备",
    color: "#b8b8b8",
  },
];
</script>

<style lang="less" >
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fff;
  user-select: none;

  .box {
    display: flex;
    flex-direction: column;
    margin: 30px 0 100px 0;
    width: 40%;

    // 头部
    header {
      display: flex;
      width: 100%;

      //头像
      .photo {
        width: 100px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      // 名称
      .name {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        height: 100px;

        span {
          background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .zh {
          font-size: 30px;
          font-weight: 700;
        }

        .en {
          margin-top: 10px;
          font-size: 24px;
        }
      }
    }

    // 内容
    main {
      margin-top: 30px;
      color: #b8b8b8;

      // 介绍
      .introduce {
        width: 100%;
        font-size: 18px;

        div {
          margin: 20px 0;
        }
      }

      // 联系我
      .contact {
        margin-top: 40px;

        li {
          display: flex;

          margin: 10px 0;

          i {
            font-size: 20px;
          }

          span {
            margin-left: 7px;
            font-size: 15px;
            cursor: pointer;
          }
        }
      }

      // info 信息
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        margin-top: 30px;
        padding: 0 5px;
        width: 100%;
        border-radius: 20px;
        border: 1px solid rgba(84, 84, 84, 0.48);

        // 标题
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 70px;

          .el-divider {
            border-top: 1px solid rgba(84, 84, 84, 0.48) !important;

            .el-divider__text {
              font-size: 30px;
              color: #b8b8b8;
              background-color: #1a1a1a !important;
            }
          }
        }

        // 关于我
        .about-my {
          display: flex;
          flex-direction: column;
          width: 90%;
          margin-bottom: 10px;

          li {
            margin: 5px 0;
            font-size: 16px;
          }
        }

        // 历程
        .course {
          width: 90%;

          .el-timeline-item__content {
            color: #b8b8b8 !important;
          }
        }
      }
    }
  }
}
</style>