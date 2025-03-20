const addToStorageCart = (id) => {
  let goods = JSON.parse(localStorage.getItem("cart"));
  if (goods === null) {
    goods = {};
  }
  if (id in goods) return;

  goods[id] = 1;
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(goods));
  window.dispatchEvent(new Event("cartChange"));
};

export default addToStorageCart;
