# visa-passport-hub

一个静态的全球通行资料网站，用于展示国家/地区的移民路径、签证要求和护照出行能力。

## 内容

- 首页：Folium 世界地图、目的地搜索和网站介绍
- 移民页：按国家/地区展示移民类型、官方来源和规则卡片
- 签证页：按护照国家/地区查看目的地签证分类
- 护照页：展示 Henley 2026 护照排名、通行分数和免签/电子授权/落地签/电子签/需签证分类

## 文件

- `index.html` 页面结构
- `styles.css` 页面样式
- `script.js` 页面交互和渲染逻辑
- `passport-official-data.js` 护照数据
- `visa-sherpa-data.js` 签证数据
- `assets/` 图片与 Folium 地图文件
- `scripts/` 数据与地图生成脚本

## 预览

直接用浏览器打开 `index.html` 即可预览。发布到 GitHub Pages 时，把仓库 Pages 来源设置为 `main` 分支根目录。
