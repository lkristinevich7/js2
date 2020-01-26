// window
// document
//  document.body

var elem = document.body.children[0]

elem = document.getElementById('nazwaId')
elem = document.getElementsByClassName('klasa')
elem = document.querySelector('#placki .klasa elem[attrybut=wartosc]')

elem.getElementById('nazwaId')
elem.getElementsByClassName('klasa')
elem.querySelector('#placki .klasa elem[attrybut=wartosc]')

elem.textContent = 'Placki!'
// https://caniuse.com/#search=append
parent.appendChild(elem)
parent.insertBefore(elem, parent.children[0])


elem.setAttribute('title', 'Lubie placki')
// https://caniuse.com/#search=classList
elem.classList.add('active')
elem.classList.remove('active')

var div = document.createElement('div')
var p = document.createElement('p')
var a = document.createElement('a')

// Multiple dom modifications -- avoid
// max = productsList.children.length
// for(var i = 0; i < max; i++){
//     debugger
//     productsList.children[0].remove()
// }

div = document.createElement('div')
div.setAttribute('class', 'list-group-item')

p = document.createElement('p')
p.textContent = 'Placki!'

div.append(p)
elem.remove()

div.innerText = '<b>test<b>'
div.innerHTML = '<b>test<b>'
// https://caniuse.com/#search=template%20strings
div.innerHTML = `<div class="list-group-item">
    <strong class="product-name">Produkt 3</strong>
    <div class="product-price">100 zł</div>
</div>`

// productsList.innerHTML = '<div class="list-group-item">No products</div>'