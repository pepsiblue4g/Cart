const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{ 
    var btnItem = event.target
    var product = btnItem.parentElement
    var productimg = product.querySelector("img").src 
    var productName = product.querySelector("h1").innerText
    var productPrice = product.querySelector("span").innerText
    // console.log(productPrice,productName,productimg)
    addcart(productPrice,productName,productimg)
}})

})
function addcart(productPrice,productName,productimg) {
    var addtr = document.createElement("tr")
    var cartItem =document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alert("This product is already in your cart")
        return
    }
}
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px" src="'+productimg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>$</sup></p></td><td><input style="width:30px;outline: none;"type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Delete</span></td> </tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    Carttotal()
    deleteCart()


}
// ................................TotalPrice...........................
function Carttotal (){
    var cartItem =document.querySelectorAll("tbody tr")
    var totalC =0
    // console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
        var inputvalue = cartItem [i].querySelector("input").value
        // console.log(inputvalue)
        var productPrice = cartItem [i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        totalA = inputvalue*productPrice
        // console.log(totalA)
        totalC = totalC + totalA
        // console.log(totalC)

    }
    var carttotalA = document.querySelector(".price-total span")
    var cartprice = document.querySelector(".cart-icon span")
    carttotalA.innerHTML = totalC
    cartprice.innerHTML = totalC
    inputchange ()
    // console.log(carttotalA)
}
// ................................Delete cart...........................
function deleteCart(){
    var cartItem =document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT [i].addEventListener("click",function(event){
           var cartdelete = event.target
           var cartIteml = cartdelete.parentElement.parentElement
           cartIteml.remove()
           Carttotal ()
        //    console.log(cartIteml)
        })
       
    }
}  
function inputchange (){
    var cartItem =document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputvalue = cartItem[i].querySelector("input")
        inputvalue.addEventListener("change",function(){
            Carttotal ()
        })
       
    }
}
const cartbtn =document.querySelector(".close-icon")
const cartshow = document.querySelector(".cart-icon")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0%"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})
        


