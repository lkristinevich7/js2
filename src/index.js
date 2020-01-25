
var product = 'Książka JavaScript'
var price = 97.99
var tax = 23
var promo = true
var dateAdded = new Date(2020, 1, 20)

// "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)

// datetxt = dateAdded.getDate() + '.' + (dateAdded.getMonth() + 1) + '.' + dateAdded.getFullYear()
var datetxt = dateAdded.toLocaleDateString('pl')

var grossPrice = (price * (1 + tax / 100)).toFixed(2)

var wynik = product + ' - ' + (promo ? 'PROMOCJA - ' : '') + grossPrice + ' PLN ' + '(' + datetxt + ') '

console.log(wynik)
