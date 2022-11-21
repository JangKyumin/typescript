let Dom: {
  version: string;
  el: () => void;
  css: () => void;
  [propName: string]: any;
};

Dom = {
  version: "0.0.1",
  el() {},
  css() {},
};

Dom.each = function () {};
Dom.map = function () {};
Dom.filter = function () {};
Dom.add = function () {};
