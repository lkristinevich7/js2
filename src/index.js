
var product = "Książka JavaScript"
var price = 97.99
var tax = 23.00
var promo = true
var dateAdded = new Date(2020, 1, 20)

// "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)

console.log(dateAdded)

// datetxt = dateAdded.getDate() + '.' + (dateAdded.getMonth() + 1) + '.' + dateAdded.getFullYear()
datetxt = dateAdded.toLocaleDateString('pl')

wynik = product + ' - ' + 'PROMOCJA - ' + price + 'PLN ' + '(' + datetxt + ') '

console.log(wynik)
