// iOS兼容性Node.js服务器
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8080;
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // 默认文件
    if (pathname === '/') {
        pathname = '/index.html';
    }
    
    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath).toLowerCase();
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // 检查文件是否存在
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        
        // 读取文件
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
                return;
            }
            
            // 设置响应头
            res.writeHead(200, {
                'Content-Type': mimeType,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': '*',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'SAMEORIGIN',
                'X-XSS-Protection': '1; mode=block'
            });
            
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log('🌐 iOS兼容服务器已启动');
    console.log(`📍 本地地址: http://localhost:${PORT}`);
    console.log(`📱 苹果手机访问: http://[你的IP地址]:${PORT}`);
    console.log(`🔧 在同一WiFi网络下，手机和电脑需连接同一网络`);
    console.log(`⏹️  按 Ctrl+C 停止服务器`);
    console.log('-'.repeat(50));
});

// 优雅关闭
process.on('SIGINT', () => {
    console.log('\n🛑 服务器已停止');
    process.exit(0);
});