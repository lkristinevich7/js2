/* eslint-disable no-redeclare */

var productsData = window.products

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

cartItemsListDiv.innerHTML = ''
var totalPrice = 0

for (var i in cartItems) {

  var item = cartItems[i]
  var product = item.product
  var grossPrice = (product.price * (1 + product.tax / 100))

  totalPrice += grossPrice * item.amount

  var wrapperDiv = document.createElement('div')

  wrapperDiv.innerHTML = '<div class="list-group-item">' +
    '<strong class="product-name"> </strong>' +
    '<div class="product-price float-right"> </div>' +
    '</div>'
  var itemDiv = wrapperDiv.firstChild

  itemDiv.querySelector('.product-name').innerText = product.name
  itemDiv.querySelector('.product-price').innerText =
    // Cena x ilosc
    grossPrice.toFixed(2) + ' x ' + item.amount + ' = ' +
    // Cena
    (grossPrice * item.amount).toFixed(2) + ' zł'

  cartItemsListDiv.append(itemDiv)
}

document.querySelector('.cart-total .cart-total-amount').innerText = totalPrice.toFixed(2)
