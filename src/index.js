var product = {
  name: 'Książka JavaScript',
  price: 97.99,
  tax: 23,
  promo: true,
  'data-added': new Date(2020, 1, 20)
}

// "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)

var datetxt = product['data-added'].toLocaleDateString('pl')

var grossPrice = (product.price * (1 + product.tax / 100)).toFixed(2)

var wynik = name + ' - ' + (product.promo ? 'PROMOCJA - ' : '') + grossPrice + ' PLN ' + '(' + datetxt + ') '

console.log(wynik)
