
var products = [
  {
    name: 'Książka CSS',
    price: 65.99,
    tax: 23,
    promo: false,
    dataAdded: new Date(2020, 1, 15)
  }, {
    name: 'Książka JavaScript',
    price: 97.99,
    tax: 23,
    promo: true,
    dataAdded: new Date(2020, 1, 20)
  }, {
    name: 'Książka HTML',
    price: 65.99,
    tax: 23,
    promo: false,
    dataAdded: new Date(2020, 1, 15)
  }, {
    name: 'Książka React',
    price: 97.99,
    tax: 23,
    promo: true,
    dataAdded: new Date(2020, 1, 20)
  }
]

var i = 0
var max = products.length

while (true) {

  if (i >= max) {
    break
  }
  var product = products[i]
  i++
  if (!product.promo) {
    continue
  }
  var datetxt = product.dataAdded.toLocaleDateString('pl')
  var grossPrice = (product.price * (1 + product.tax / 100)).toFixed(2)

  // "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)
  var wynik = product.name + ' - ' + (product.promo ? 'PROMOCJA - ' : '') + grossPrice + ' PLN ' + '(' + datetxt + ') '

  console.log(wynik)

 
}
