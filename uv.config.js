self.__uv$config = {
  prefix: '/service/',
  bare: 'https://averagegael.github.io/Roogle-UV-Backend/',  // <-- Changed from Worker to GitHub Pages
  encodeUrl: (input) => __uv$config.prefix + __uv$config.codec.encode(input),
  codec: Ultraviolet.codec.xor
};
