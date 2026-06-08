@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo  裁判文书识别 · 更新 GitHub 在线版
echo  （与发文张相同：index.html + assets）
echo ========================================
echo.

echo [1/3] 生成静态网页...
call npm run build:pages
if errorlevel 1 (
  echo 构建失败，请先在本目录执行 npm install
  pause
  exit /b 1
)

echo.
echo [2/3] 提交到 Git...
git add index.html 404.html assets .nojekyll _config.yml .github README.md "GitHub一键更新.txt"
git commit -m "update: GitHub Pages static site" 2>nul
if errorlevel 1 echo （无新改动或已提交过）

echo.
echo [3/3] 推送到 GitHub...
git push origin main
if errorlevel 1 (
  echo.
  echo 推送失败。请手动在 GitHub 网页上传以下文件：
  echo   - index.html
  echo   - assets 文件夹（整个文件夹，不是 _next）
  echo   - .nojekyll
  echo.
  echo 上传后：仓库 Settings - Pages - 重新点 Save 触发更新
  pause
  exit /b 1
)

echo.
echo 完成！等 1～3 分钟后打开：
echo https://hufelix765-alt.github.io/wenjianshibie/
echo （请 Ctrl+F5 强制刷新）
pause
