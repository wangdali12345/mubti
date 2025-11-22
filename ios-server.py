#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
iOS兼容性本地服务器
解决苹果手机无法访问本地文件的问题
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# 设置端口
PORT = 8080

# 获取当前目录
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加CORS头部和iOS兼容性头部
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        
        # iOS特定头部
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        
        super().end_headers()
    
    def guess_type(self, path):
        """确保正确的MIME类型"""
        mimetype, encoding = super().guess_type(path)
        if path.endswith('.js'):
            return 'application/javascript', encoding
        elif path.endswith('.css'):
            return 'text/css', encoding
        return mimetype, encoding

def main():
    try:
        # 切换到项目目录
        os.chdir(DIRECTORY)
        
        # 创建服务器
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"🌐 iOS兼容服务器已启动")
            print(f"📍 本地地址: http://localhost:{PORT}")
            print(f"📱 苹果手机访问: http://[你的IP地址]:{PORT}")
            print(f"🔧 在同一WiFi网络下，手机和电脑需连接同一网络")
            print(f"⏹️  按 Ctrl+C 停止服务器")
            print("-" * 50)
            
            # 尝试自动打开浏览器
            try:
                webbrowser.open(f'http://localhost:{PORT}')
                print(f"✅ 已自动在电脑浏览器中打开")
            except:
                print("⚠️  无法自动打开浏览器，请手动访问上述地址")
            
            # 启动服务器
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 服务器已停止")
        sys.exit(0)
    except Exception as e:
        print(f"❌ 启动失败: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()