# 裁判文书识别 · 对照工作台

> **在线打开网站（图2 界面）** → **[https://hufelix765-alt.github.io/wenjianshibie/](https://hufelix765-alt.github.io/wenjianshibie/)**
>
> 说明：GitHub 仓库首页（图1）显示的是项目说明；实际应用请点上方链接访问。

识别法院判决、裁定书等法律文书，左侧结构化展示案件信息，右侧对照查看原文。

## 功能

- **双栏布局**：左识别结果 / 右原文预览
- **全文识别**：PDF 所有页面合并解析
- **OCR 扫描件**：裁判文书网扫描 PDF 自动 OCR
- **民事 / 刑事 / 行政**：自动识别案件类型
- **多格式**：PDF、Word（.docx）、图片
- **图片拼接**：多页扫描件自动竖向拼接成长图
- **证据、赔偿、律师费**：结构化展示与编辑

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)

## 部署到 GitHub Pages

### 若打开网站看到的是本文档（而不是应用界面）

请到仓库 **Settings → Pages**，将 **Source** 改为以下之一：

1. **GitHub Actions**（推荐，推送后自动部署）
2. **Deploy from a branch** → 分支 `main` → 文件夹 **`/docs`**

改完后等 1～2 分钟，再访问 [https://hufelix765-alt.github.io/wenjianshibie/](https://hufelix765-alt.github.io/wenjianshibie/)

### 推送代码

```bash
git add .
git commit -m "chore: update static site"
git push
```

本地重新生成静态站：

```bash
npm run build:pages
```

## 技术栈

- Next.js 14 + React + TypeScript + Tailwind CSS
- PDF.js、Mammoth、Tesseract.js（中文 OCR）
