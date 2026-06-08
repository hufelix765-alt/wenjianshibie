# 裁判文书识别 · 对照工作台

**在线打开应用（图2）** → **[https://hufelix765-alt.github.io/wenjianshibie/](https://hufelix765-alt.github.io/wenjianshibie/)**

> 本页是项目说明。GitHub 仓库首页显示 README 是正常的；实际应用请点上方链接。

识别法院判决、裁定书等法律文书，左侧结构化展示案件信息，右侧对照查看原文。

## 功能

- 双栏布局：左识别结果 / 右原文预览
- 全文识别 + OCR 扫描件
- 民事 / 刑事 / 行政
- PDF、Word、图片（多图拼接）

## 本地运行

```bash
npm install
npm run dev
```

## 更新 GitHub 在线版（与发文张相同）

```bash
npm run build:pages
git add index.html _next .nojekyll
git commit -m "update: GitHub Pages"
git push
```

详见 `GitHub一键更新.txt`
