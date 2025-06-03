self.__uv$config = {
  prefix: '/service/',
  bare: 'https://ultra-gael.uraverageopdoge.workers.dev/',
  encodeUrl: (input) => __uv$config.prefix + Ultraviolet.codec.xor.encode(input),
  codec: Ultraviolet.codec.xor
};
