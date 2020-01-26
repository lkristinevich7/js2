var products = window.products

for (var i in products) {
  var product = products[i]

  var datetxt = product.dataAdded.toLocaleDateString('pl')
  var grossPrice = (product.price * (1 + product.tax / 100)).toFixed(2)

  // "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)
  var wynik = product.name + ' - ' + (product.promo ? 'PROMOCJA - ' : '') + grossPrice + ' PLN ' + '(' + datetxt + ') '

  console.log(wynik)
}