self.__uv$config = {
  prefix: '/service/',
  bare: 'https://ultra-gael.uraverageopdoge.workers.dev/service/',
  encodeUrl: (input) => self.__uv$config.prefix + self.__uv$config.codec.encode(input),
  codec: {
    xorKey: 0x55,
    encode: function (str) {
      const arr = [];
      for (let i = 0; i < str.length; i++) {
        arr.push((str.charCodeAt(i) ^ this.xorKey).toString(16).padStart(2, '0'));
      }
      return arr.join('');
    },
    decode: function (str) {
      let result = '';
      for (let i = 0; i < str.length; i += 2) {
        const hex = str.slice(i, i + 2);
        const charCode = parseInt(hex, 16) ^ this.xorKey;
        result += String.fromCharCode(charCode);
      }
      return result;
    }
  }
};
