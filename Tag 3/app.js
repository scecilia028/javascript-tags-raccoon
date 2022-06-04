function returnCartPricesInfo() { 
    let totalPriceCart = cart_products.reduce(
        (valueMount, elem) => { return valueMount += (elem.product_price * elem.product_quantity) }, 0)
    
    return cartPricesInfo = {
            totalPrice : totalPriceCart, 
            freeShipping : totalPriceCart > 300 ? true : false
        };
}        

let totalPrice = returnCartPricesInfo().totalPrice;
let freeShipping = returnCartPricesInfo().freeShipping;
                            
document.getElementById("valores").innerHTML = "Saída: </br>" + JSON.stringify(cartPricesInfo, null, 2);

console.log(cart_products);
console.log(cartPricesInfo);
console.log("totalPrice = " + totalPrice + "\n" + "freeShipping = " + freeShipping);