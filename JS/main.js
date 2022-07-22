var popProduct = document.getElementsByClassName("pop-product");
var productId = document.getElementById("product");
var contProducts = document.getElementsByClassName("cont-products");
var copyProduct;
var exit = document.getElementById("exit");



// Pop product //
productId.addEventListener("click", () => {
    popProduct[0].classList.add("add-filter");
    console.log("se agrego el filtro");
    productId.classList.add("pop");
    copyProduct = productId.cloneNode(true);
    popProduct[0].append(copyProduct);
});

// Exit Product //
exit.addEventListener("click", () => {
    popProduct[0].classList.remove("add-filter");
    productId.classList.remove("pop");
    copyProduct.remove();
    
});



