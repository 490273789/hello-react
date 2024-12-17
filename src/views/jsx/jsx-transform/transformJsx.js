import { readFile, writeFile } from "fs";
import { transformSync } from "@babel/core";

readFile("./element.jsx", (e, data) => {
  const code = data.toString("utf-8");
  // 转换jsx文件
  const result = transformSync(code, {
    plugins: ["@babel/plugin-transform-react-jsx"],
  });
  writeFile("./element-transform.js", result.code, () => {
    console.log("写入成功！");
  });
});
