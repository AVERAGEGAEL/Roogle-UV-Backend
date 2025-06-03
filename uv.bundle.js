// uv.bundle.js
// Proxy to CDN-hosted UV core

// This file just loads UV core from CDN dynamically
const script = document.createElement('script');
script.src = 'https://unpkg.com/ultraviolet@latest/dist/uv.bundle.js';
document.head.appendChild(script);
