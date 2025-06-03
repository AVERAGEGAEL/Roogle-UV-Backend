self.Ultraviolet = {
  codec: {
    xor: {
      encode(url) {
        return btoa(url.split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ 2)).join(''));
      },
      decode(url) {
        return atob(url).split('').map(c => String.fromCharCode(c.charCodeAt(0) ^ 2)).join('');
      },
    }
  },
};

// UV Service Handler stub (needed so things don't break)
if (!self.addEventListener) self.addEventListener = () => {};
