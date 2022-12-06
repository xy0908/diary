<template>
  <div id="remind">
    <div class="remind-box">
      <el-form
        :label-position="Right"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 400px"
      >
        <!-- 名称 -->
        <el-form-item label="您的姓名">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <!-- qq -->
        <el-form-item label="您的QQ号">
          <el-input v-model="formLabelAlign.qq" />
        </el-form-item>
        <!-- 内容 -->
        <el-form-item label="提醒的内容">
          <el-input v-model="formLabelAlign.content" />
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button class="remind-but">提醒</el-button>
          <el-button class="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const formLabelAlign = reactive({
  name: "",
  qq: "",
  content: "",
});
</script>

<style  lang="less">
//提醒
#remind {
  display: flex;
  justify-content: center;
  width: 100%;

  .remind-box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 100px;
    padding: 30px;
    width: 50%;
    border: 2px solid rgba(84, 84, 84, 0.48);
    border-radius: 10px;

    //取消背景色、阴影    设置边框 和 圆角
    .el-input__wrapper {
      box-shadow: none !important;
      background: none !important;
      border-bottom: 3px solid rgba(84, 84, 84, 0.48);
      border-top: 1px solid rgba(84, 84, 84, 0.48);
      border-radius: 20px;
    }

    //设置 提醒按钮
    .remind-but {
      outline: none !important;
      border: none !important;
      color: #000;
    }
  }
}
</style>
