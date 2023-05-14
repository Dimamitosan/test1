const keys = Object.keys(localStorage);

const generateCart = () => {
  document.querySelector('#total-price').innerHTML = `${totalSum().toFixed(2)} €`;
  document.querySelector('#services').innerHTML = '';
  for (const key of keys) {
    if (key !== 'lang') {
      const item = JSON.parse(localStorage[key]);
      const row = document.createElement('tr');
      row.innerHTML = `<td class = "${key}"> 
                            <p>${item.value}</p>
                            <div class = "counter">
                                <button class = "minus" id="${key}">-</button>
                                    <p>${item.count}</p>
                                <button class = "plus" id="${key}">+</button>
                                    <p>${(item.count * item.price).toFixed(2)}€</p>
                            </div> 
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
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('minus')) {
    return;
  }
  const curr = e.target.id;
  const item = JSON.parse(localStorage[curr]);
  item.count -= 1;
  localStorage[curr] = JSON.stringify(item);
  if (item.count === 0) {
    localStorage.removeItem(curr);
  }
  location.reload();
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('plus')) {
    return;
  }
  const current = e.target.id;
  const iteme = JSON.parse(localStorage[current]);
  iteme.count += 1;
  localStorage[current] = JSON.stringify(iteme);

  location.reload();
});
