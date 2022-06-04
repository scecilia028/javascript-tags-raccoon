let cart_products_sanitized = cart_products.filter((elem, index, array) => index === array.findIndex(
                                             (elemArray) => elemArray.product_id === elem.product_id))
                                            .filter((elem) => elem.product_stock_quantity > 0);

document.getElementById("valores").innerHTML = "Saída: </br>" + JSON.stringify(cart_products_sanitized, null, 2);

console.log(cart_products);
console.log(cart_products_sanitized);