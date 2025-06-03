// uv.bundle.js
(async () => {
  const config = self.__uv$config;
  const searchParams = new URLSearchParams(window.location.search);
  const encodedUrl = searchParams.get('url');

  if (!encodedUrl) {
    document.body.innerHTML = '<h2>Error: No URL provided.</h2>';
    return;
  }

  const decodedUrl = config.decodeUrl(encodedUrl);
  const iframe = document.createElement('iframe');

  iframe.src = config.prefix + encodedUrl;
  iframe.style = 'width:100%; height:100vh; border:none;';
  document.body.style.margin = '0';
  document.body.appendChild(iframe);
})();
