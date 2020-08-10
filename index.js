// Write your code here!
document.body.removeChild(document.querySelector('main#main'))
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.innerHTML = "Someone'name is the champion"
