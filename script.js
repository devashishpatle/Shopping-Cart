let cart=[];
let totalAmount=0;
function addToCart(productName,productPrice){
    cart.push({name: productName, price: productPrice});
    totalAmount=totalAmount+productPrice;
    displayCart();
}
function displayCart(){
    const cartDiv= document.getElementById('cart');
    const totalDiv=document.getElementById('total');
    cartDiv.innerHTML='';
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name}-₹${item.price}</p>`;
    });
    totalDiv.innerHTML=`Total: ₹${totalAmount}`;
}