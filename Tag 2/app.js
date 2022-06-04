function numberFormated(value){     
    let valueFmt = value.replaceAll('R$ ','');
    if(valueFmt.match(/\,/) != null){
        return Number(valueFmt.replaceAll('.', '').replaceAll(',','.'));
    }
    return Number(valueFmt);  
}

let new_products_list = products_list.map((elem) => {        
    return {
        id: elem.id,    
        name: elem.name,        
        item_price: numberFormated(elem.price)
    }
})
document.getElementById("valores").innerHTML = "Saída: </br>" + JSON.stringify(new_products_list, null, 2);

console.log(products_list);
console.log(new_products_list);