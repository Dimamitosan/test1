
let keys = Object.keys(localStorage)
document.querySelector('.cart').innerHTML = `<table class = 'services'> </table>`;     

for(let key of keys) {
    let row = document.createElement('tr');
    row.innerHTML = `<td class = "${key}"> 
                                <p>${key}</p>
                                <button class = "del" id="${key}">remove</button>
                     </td>
                     `
    console.log(typeof(localStorage[key])) 
    document.querySelector('.services').appendChild(row)
}

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('del')) { return }
    let curr = e.target.id
    localStorage.removeItem(curr)
    location.reload()
});