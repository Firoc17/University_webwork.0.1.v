// postcss的配置文件
let path = require("path");

module.exports = {
  plugins: [
    // 自动添加浏览器前缀
    require("autoprefixer")({
      overrideBrowserslist: ["last 100 versions"], //必须设置支持的浏览器才会自动添加添加浏览器兼容
    }),
    // 引入cssnano插件
    require("cssnano")({}),
    //
    require("postcss-sprites")({
      // 图片整合之后 的整合图往哪放
      spritePath: path.resolve(__dirname, "./dist/img"),
      groupBy: (image) => {
        // 获取图片URL最后一个斜杠之前的部分，即路径
        let path = image.url.substr(0, image.url.lastIndexOf("/"));
        // 获取路径最后一个斜杠之后的部分，即名称
        let name = path.substr(path.lastIndexOf("/") + 1);
        // 返回Promise对象来解析分组标识
        return Promise.resolve(name);
      },
    }),
  ],
};
