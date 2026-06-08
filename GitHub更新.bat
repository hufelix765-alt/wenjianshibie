@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo  裁判文书识别 · 更新 GitHub 在线版
echo  （单文件 index.html，CSS/JS 已内联）
echo ========================================
echo.

echo [1/3] 生成美化版静态网页（约 1.5MB）...
call npm run build:pages
if errorlevel 1 (
  echo 构建失败，请先执行 npm install
  pause
  exit /b 1
)

echo.
echo [2/3] 提交...
git add index.html 404.html assets .nojekyll _config.yml .github components scripts next.config.js
git commit -m "update: GitHub Pages styled bundle" 2>nul

echo.
echo [3/3] 推送到 GitHub...
git push origin main
if errorlevel 1 (
  echo.
  echo 推送失败时，请手动上传 index.html 到 GitHub 仓库根目录
  echo （只需这一个文件，样式和脚本都已内嵌）
  pause
  exit /b 1
)

echo.
echo 完成！等 1～2 分钟后打开并 Ctrl+F5 刷新：
echo https://hufelix765-alt.github.io/wenjianshibie/
pause
