self.__uv$config = {
  prefix: '/Roogle-UV-Backend/service/',
  bare: 'https://incog.dev/bare/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/Roogle-UV-Backend/uv.handler.js',
  bundle: '/Roogle-UV-Backend/uv.bundle.js',
  config: '/Roogle-UV-Backend/uv.config.js',
  sw: '/Roogle-UV-Backend/uv.sw.js',
};
