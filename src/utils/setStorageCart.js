const setStorageCart = (cart) => {
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new Event("cartChange"));
};

export default setStorageCart;
