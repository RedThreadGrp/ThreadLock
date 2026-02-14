#!/usr/bin/env node
/**
 * Demo script to show how the verification system works
 * This creates a mock HTTP server and tests the verification script
 */

import http from 'http';
import { spawn } from 'child_process';

const PORT = 3333;

// Create a simple mock server
const server = http.createServer((req, res) => {
  console.log(`Mock server received: ${req.method} ${req.url}`);
  
  // Simulate different responses
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body>Home Page</body></html>');
  } else if (req.url === '/redirect-test') {
    res.writeHead(301, { 'Location': '/new-location' });
    res.end();
  } else if (req.url === '/new-location') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body>Redirected Page</body></html>');
  } else if (req.url.startsWith('/resources/')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body>Resource Page: ${req.url}</body></html>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`\n🎭 Mock server running on http://localhost:${PORT}\n`);
  
  // Give server time to start
  setTimeout(() => {
    console.log('Running verification against mock server...\n');
    
    // Run the verification script against mock server
    const verify = spawn('node', [
      'scripts/verify-routes-http.mjs',
      `--base-url=http://localhost:${PORT}`
    ], {
      cwd: process.cwd(),
      stdio: 'inherit'
    });
    
    verify.on('close', (code) => {
      console.log(`\n\nVerification process exited with code ${code}\n`);
      server.close();
      process.exit(code);
    });
  }, 1000);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down mock server...');
  server.close();
  process.exit(0);
});
