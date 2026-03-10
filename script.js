let cart = JSON.parse(localStorage.getItem("cart")) || []

function addCart(nome,preco){
cart.push({nome,preco})
localStorage.setItem("cart",JSON.stringify(cart))
alert("Produto adicionado ao carrinho")
}

function mostrarCarrinho(){
let lista = document.getElementById("lista")
cart.forEach(p=>{
lista.innerHTML += `<p>${p.nome} - R$${p.preco}</p>`
})
}