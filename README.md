# 裁判文书识别 · 对照工作台

识别法院判决、裁定书等法律文书，左侧结构化展示案件信息，右侧对照查看原文。

在线访问（GitHub Pages）：https://hufelix765-alt.github.io/wenjianshibie/

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

## 部署到 GitHub（与发文张相同方式）

### 1. 创建仓库并推送

```bash
git init
git add .
git commit -m "feat: 裁判文书识别工作台"
git branch -M main
git remote add origin https://github.com/你的用户名/wenjianshibie.git
git push -u origin main
```

### 2. 开启 GitHub Pages

1. 打开 GitHub 仓库 → **Settings** → **Pages**
2. **Source** 选 **GitHub Actions**
3. 推送代码后，Actions 会自动构建部署
4. 访问：`https://你的用户名.github.io/wenjianshibie/`

### 3. Vercel 部署（可选，访问更快）

1. 登录 [vercel.com](https://vercel.com)，Import 该 GitHub 仓库
2. 框架选 Next.js，直接 Deploy
3. 获得独立域名，无需 `/wenjianshibie` 路径前缀

## 技术栈

- Next.js 14 + React + TypeScript + Tailwind CSS
- PDF.js、Mammoth、Tesseract.js（中文 OCR）
