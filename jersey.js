let currentProduct = ""
let selectedSize = ""
let quantity = 1
let hasError = false

function showProduct(name,price,img,productId){
      document.getElementById("sidebarImg").src=img
      document.getElementById("sidebarName").textContent=name
      document.getElementById("sidebarPrice").textContent=price
      document.getElementById("sidebar").classList.add("open")
      currentProduct = productId
}



function increaseQty() {
    quantity++
    document.getElementById("quantity").textContent = quantity
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--
        document.getElementById("quantity").textContent = quantity
    }
}

function hideSidebar(){
    document.getElementById("sidebar").classList.remove("open")
}

function selectSize(btn){
    document.querySelectorAll(".size-btn, .size-btn-big-size").forEach(b => b.classList.remove("selected"))
    btn.classList.add("selected")
    document.getElementById("selectedSize").textContent = "Size: " + btn.textContent
    selectedSize = btn.textContent  
    document.getElementById("sizeError").textContent = "" 
}

function orderNow() {
if (selectedSize === ""){
    document.getElementById("sizeError").textContent= "Please enter youre size"
    hasError =true
} else {
    window.location.href = "order.html?product_id=" + currentProduct + "&size=" + selectedSize + "&quantity=" + quantity
}

}
