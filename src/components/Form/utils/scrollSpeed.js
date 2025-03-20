export default (function () {
  //Function that checks the speed of scrolling
  let last_position,
    new_position,
    timer,
    delta,
    delay = 50;
  function clear() {
    last_position = null;
    delta = 0;
  }

  clear();
  return function () {
    new_position = window.scrollY;
    if (last_position != null) {
      delta = new_position - last_position;
    }
    last_position = new_position;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
})();
