function rewriteHTML(html, baseUrl) {
  const proxyPrefix = 'https://averagegael.github.io/Roogle-UV-Backend/proxy.html?url=';
  const base = new URL(baseUrl).origin;

  return html
    // Rewrite href/src to go through proxy
    .replace(/(href|src)=["'](?!https?:\/\/|\/\/)([^"']+)["']/gi, (match, attr, path) => {
      try {
        const abs = new URL(path, base).href;
        return `${attr}="${proxyPrefix + encodeURIComponent(abs)}"`;
      } catch {
        return match;
      }
    })
    // Inject <base> to fix relative paths
    .replace(/<head>/i, `<head><base href="${base}/">`);
}
