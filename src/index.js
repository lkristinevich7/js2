/* eslint-disable no-redeclare */

var productsData = window.productsData

var productsListDiv = document.getElementById('productsList')

// Clear Products List
productsListDiv.innerText = ''

// Build Products List
for (var i in productsData) {
  var product = productsData[i]

  var datetxt = product.dataAdded.toLocaleDateString('pl')
  var grossPrice = (product.price * (1 + product.tax / 100)).toFixed(2)

  // "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)
  var text = product.name + ' - ' + (product.promo ? 'PROMOCJA - ' : '') + grossPrice + ' PLN ' + '(' + datetxt + ') '

  // Stwórz element div
  var listItemDiv = document.createElement('div')

  // Ustaw klase css 'list-group-item'
  // listItemDiv.setAttribute('class', 'list-group-item')
  listItemDiv.classList.add('list-group-item')

  // Ustaw innerText = text
  listItemDiv.innerText = text

  // Dodaj element do listy
  productsListDiv.appendChild(listItemDiv)

  // console.log(wynik)
}

// Cart Items Data
var cartItems = window.cartItems
// Cart Items List
var cartItemsListDiv = document.getElementById('cartItemsList')

console.log('====== SHOPPING CART ======')

/*
  Nazwa ProduktuA - 100.00 x 1 = 100.00
  Nazwa ProduktuB - 100.00 x 2 = 200.00
  ===
  Suma produktów = 300.00
*/

var totalPrice = 0

for (var i in cartItems) {
  var item = cartItems[i]
  var product = item.product
  var grossPrice = (product.price * (1 + product.tax / 100))

  totalPrice += grossPrice * item.amount

  // <div class="list-group-item">
  //   <strong class="product-name">Produkt 1</strong>
  //   <div class="product-price">100 zł</div>
  // </div>

  // console.log(
  //   // Nazwa
  //   '' + product.name + ' - ' +
  //   // Cena x ilosc
  //   grossPrice.toFixed(2) + ' x ' + item.amount + ' = ' +
  //   // Cena
  //   (grossPrice * item.amount).toFixed(2)
  // )
}

console.log('====================')
console.log('Suma produktów = ', totalPrice)
