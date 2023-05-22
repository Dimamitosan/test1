const keys = Object.keys(localStorage);

const generateCart = () => {
  document.querySelector('#services').innerHTML = '';
  for (const key of keys) {
    if (key !== 'lang') {
      const item = JSON.parse(localStorage[key]);
      const row = document.createElement('tr');
      row.innerHTML = `<td class = "${key}" id="${key}__td"> 
                            <p class = "element " >${item.value}</p>
                            <div class = "counter ">
                              
                                <button class = "minus" value = "${key}" id="">-</button>
                                    <p class = "count" >${item.count}</p>
                                <button class = "plus" value = "${key}" id="">+</button>
                                </div> 
                                    <p class = "price" id="${key}">${item.count * item.price}€</p>
                           
                        </td>
                        `;
      document.querySelector('#services').appendChild(row);
    }
  }
};

const totalSum = () => {
  const keys = Object.keys(localStorage);
  const count = (acc, service) => {
    if (service !== 'lang') {
      let serv = JSON.parse(localStorage[service]);
      let totalPerServ = serv.count * Number(serv.price);
      acc = acc + totalPerServ;
    }
    return acc;
  };
  return keys.reduce(count, 0);
};
document.querySelector('#total-price').innerHTML = `${totalSum().toFixed(2)} €`;
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('minus')) {
    return;
  }
  const curr = e.target.value;
  const item = JSON.parse(localStorage[curr]);
  item.count -= 1;
  localStorage[curr] = JSON.stringify(item);

  if (item.count === 0) {
    localStorage.removeItem(curr);
    document.querySelector('#total-price').innerHTML = `${totalSum().toFixed(2)} €`;
    document.getElementById(e.target.value + '__td').remove();
  }
  e.target.closest('.counter').querySelector('.count').innerHTML = item.count;
  document.getElementById(e.target.value).innerHTML = item.count * item.price + '€';
  document.querySelector('#total-price').innerHTML = `${totalSum().toFixed(2)} €`;
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('plus')) {
    return;
  }
  const current = e.target.value;

  const iteme = JSON.parse(localStorage[current]);
  iteme.count += 1;
  localStorage[current] = JSON.stringify(iteme);
  e.target.closest('.counter').querySelector('.count').innerHTML = iteme.count;
  document.getElementById(e.target.value).innerHTML = iteme.count * iteme.price + '€';
  document.querySelector('#total-price').innerHTML = `${totalSum().toFixed(2)} €`;
});
