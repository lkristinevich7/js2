/* eslint-disable no-redeclare */

// Products List
console.log('====== Products List ======')

var products = window.products

for (var i in products) {
  var product = products[i]

  var datetxt = product.dataAdded.toLocaleDateString('pl')
  var grossPrice = (product.price * (1 + product.tax / 100)).toFixed(2)

  // "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)
  var wynik = product.name + ' - ' + (product.promo ? 'PROMOCJA - ' : '') + grossPrice + ' PLN ' + '(' + datetxt + ') '

  console.log(wynik)
}

// Cart Items List
var cartItems = window.cartItems

console.log('====== SHOPPING CART ======')

/*
  Nazwa ProduktuA - 100.00 x 1 = 100.00
  Nazwa ProduktuB - 100.00 x 2 = 200.00
  ===
  Suma produktów = 300.00
*/

for (var i in cartItems) {
  var totalPrice = 0
  var item = cartItems[i]
  var product = item.product
  var grossPrice = (product.price * (1 + product.tax / 100))

  totalPrice += grossPrice * item.amount

  console.log(
    // Nazwa
    '' + product.name + ' - ' +
    // Cena x ilosc
    grossPrice.toFixed(2) + ' x ' + item.amount + ' = ' +
    // Cena
    (grossPrice * item.amount).toFixed(2)
  )
}

console.log('====================')
console.log('Suma produktów = ', totalPrice)
