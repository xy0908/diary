<template>
  <!--  -->
  <div class="remind">
    <!-- 头部组件 -->
    <HeaderChoiceMonth />
  </div>
</template>

<script setup>
//组件
import HeaderChoiceMonth from "../components/HeaderChoiceMonth.vue";

// vue

// const aaa = () => {
//   console.log("前端请求后端获取对应的日记内容");
//   axios
//       .post("http://localhost:1000/home", {
//         data: {
//           m: 10,
//           d: 19,
//         },
//       })
//       .then((res) => {
//         console.log(res, "res");
//         // valueHtml.value = res.data
//       });
// };

// const bbb = () => {
//   console.log("前端请求后端获取对应的日记");
//   axios
//       .post("http://localhost:1000/diary")
//       .then((res) => {
//         console.log(res, "res");
//       });
// };
</script>

<style scoped></style>
