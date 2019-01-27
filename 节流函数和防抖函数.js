//节流函数：一段时间内执行一次
//窗口调整（resize）、页面滚动（scroll）、抢购疯狂点击（mousedown）
const throttle = (fn, cycle) => {
  let start = Date.now();
  let now;
  let timer;
  return function() {
    now = Date.now();
    clearTimeout(timer);
    if (now - start >= cycle * 1000) {
      fn.apply(this, arguments);
      start = now;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, cycle * 1000);
    }
  };
};

//防抖函数：间隔一段时间调用一次
//犹如公交车，经典场景实时搜索（keyup）拖拽（mousemove）
const debounce = (fn, delay) => {
  let timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};
