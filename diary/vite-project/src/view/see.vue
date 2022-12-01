<script setup>
import HeaderChoiceMonth from "../components/HeaderChoiceMonth.vue";
import axios from "axios";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import router from "../router/index";
import { useRouter } from "vue-router";

//使用路由
const route = useRouter();

//日记归档数据
const diaryArr = ref([]);

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("<p>hello</p>");

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
    // console.log(route.query);
  }, 1500);
});

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

// 页面挂载的时候 请求数据
onMounted(() => {
  axios.post("http://localhost:1000/diary").then((res) => {
    diaryArr.value = res.data;
  });
});

const add = () => {
  axios
    .post("http://localhost:1000/home", {
      data: {
        m: 10,
        d: 20,
      },
    })
    .then((res) => {
      console.log(res, "res");
      valueHtml.value = res.data;
    });
};
</script>

<template>
  <!--  查看日记-->
  <div id="see">
    <!--  头部  -->
    <header>
      <HeaderChoiceMonth />
    </header>

    <!-- 内容 -->
    <main>
      <!--   日记时间选择   -->
      <div class="diary-time-choice">
        <el-col :span="12">
          <h1 class="mb-2" style="color: #fff" @click="add">日记归档</h1>
          <el-menu
            background-color="#1A1A1A"
            class="el-menu-vertical-demo"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu
              v-for="(item, index) in diaryArr"
              :key="index"
              :index="index"
            >
              <template #title>
                <!-- 一级标题-->
                <span>{{ item.m }}月小记录</span>
              </template>
              <el-menu-item-group
                v-for="(chilren, i) in item.y"
                :key="i"
                :index="i"
              >
                {{ chilren }}
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </div>
      <!-- 日记内容 -->
      <div class="diary-content">
        <div style="border: 1px solid #ccc; border-left: none">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
          />
          <Editor
            style="height: 500px; overflow-y: hidden"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            @onCreated="handleCreated"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="less">
#see::-webkit-scrollbar {
  display: none;
}

#see {
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  user-select: none;
  background: #1a1a1a;

  // 内容
  main {
    display: flex;

    //日记时间选择
    .diary-time-choice {
      width: 200px !important;

      .el-col-12 {
        max-width: none !important;
        width: 100%;

        //标题 h1
        .mb-2 {
          height: 70px;
          line-height: 70px;
          text-align: center;
        }

        //
        .el-sub-menu__title {
          font-size: 16px;
        }

        //
        .el-menu {
          color: #ffffff !important;

          .el-menu-item-group {
            .el-menu-item-group__title {
              display: none;
            }

            ul {
              height: 30px;
              text-indent: 40px;
              line-height: 30px;
            }
          }
        }
      }
    }

    //内容
    .diary-content {
      flex-grow: 1;
      width: 100px;
      margin-top: 70px;
    }
  }
}
</style>
