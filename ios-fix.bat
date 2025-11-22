@echo off
echo 🌐 启动iOS兼容服务器...
echo.

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 使用Python启动服务器...
    python ios-server.py
    goto :end
)

REM 检查Node.js是否安装
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 使用Node.js启动服务器...
    node server.js
    goto :end
)

echo ❌ 未找到Python或Node.js
echo.
echo 请安装其中一个后重试:
echo 1. Python: https://www.python.org/downloads/
echo 2. Node.js: https://nodejs.org/
echo.
echo 或者直接使用任何本地服务器工具
echo.
pause

:end
echo.
echo 📱 苹果手机访问步骤:
echo 1. 确保手机和电脑在同一WiFi网络
echo 2. 在电脑上运行此脚本
echo 3. 在手机浏览器中访问显示的地址
echo.