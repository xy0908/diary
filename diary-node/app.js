// 引入 express
const express = require("express");
const app = express();
// 引入内置模块 fs读取文件
const fs = require("fs");
// node path模块
const path = require("path");
// 引入cors  配置跨越
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//引入axios
const axios = require("axios");

//启动服务器
app.listen("1000", () => {
  console.log("1000端口启动成功");
});

// 存储日记文件数据
let diaryArr = [];
//读取diary目录下文件
function readdirDiary() {
  //读取 diary目录下的文件
  fs.readdir("./diary", function (err, files) {
    //遇见错误 返回错误 不执行下一步
    if (err) {
      return console.error(err);
    }
    //读取 子目录
    files.forEach(function (file) {
      diaryArr.push({
        m: file,
        y: "",
      });
      fs.readdir(`./diary/${file}`, function (err, fileChildren) {
        diaryArr.forEach((item) => {
          if (item.m == file) {
            item.y = fileChildren;
          }
        });
        diaryArr.file = fileChildren;
      });
    });
  });
}
readdirDiary();

/**
 * 前端请求 /home 携带参数 月份 和 日
 *      返回对应的文件的内容
 * */
app.post("/home", async (req, res) => {
  let { data } = req.body;
  console.log(data);
  // 调用fs.readFile()方法读取文件
  fs.readFile(
    `./diary/${data.m}/${data.d}.md`,
    "utf8",
    function (err, dataStr) {
      console.log(dataStr, "内容");
      //将读取的内容返回给前端
      res.end(`${dataStr}`);
    }
  );
});

/**
 * 前端请求 /diary  返回diary目录下的文件名和子文件
 */
app.post("/diary", async (req, res) => {
  res.send(diaryArr);
});
