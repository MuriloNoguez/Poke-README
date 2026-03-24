const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

// Import the serverless function handler
const apiHandler = require('./api/index');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Simulate Vercel /api environment
    if (pathname === '/api') {
        process.stdout.write(`[API] ${req.url}\n`);
        
        // 1. Mock req.query
        req.query = parsedUrl.query;

        // 2. Mock res methods (status, json, send)
        res.status = (code) => {
            res.statusCode = code;
            return res;
        };
        res.json = (data) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            return res;
        };
        res.send = (data) => {
            res.end(data);
            return res;
        };

        // 3. Call the actual handler
        return apiHandler(req, res);
    }

    // Serve Static Files
    let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
    
    // Safety check for extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Servidor de desenvolvimento iniciado: http://localhost:${PORT}`);
    console.log(`Pressione Ctrl+C para parar.\n`);
});
