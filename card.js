
let keys = Object.keys(localStorage)
document.querySelector('.cart').innerHTML = `<table class = 'services'> </table>`;     

for(let key of keys) {
    let row = document.createElement('tr');
    row.innerHTML = `<td colspan="2">${key} - ${localStorage[key]}</td>`
    console.log(typeof(localStorage[key])) 
    document.querySelector('.services').appendChild(row)
}