const deleteFromStorageCart = (id) => {
  let goods = JSON.parse(localStorage.getItem("cart"));
  localStorage.removeItem("cart");
  if (goods === null) {
    goods = {};
  }
  delete goods[id];
  localStorage.setItem("cart", JSON.stringify(goods));

  window.dispatchEvent(new Event("cartChange"));
};

export default deleteFromStorageCart;
