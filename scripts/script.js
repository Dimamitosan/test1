function serv(id, value, count, price) {
  this.id = id;
  this.value = value;
  this.count = count;
  this.price = price;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(window.location.hash.substring(1), 'sad');

  const menuBtns = document.querySelectorAll('.menu__btn');
  const drops = document.querySelectorAll('.dropdown');

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dropdown__btn')) { return; }
    const curServ = new serv(e.target.id, e.target.value, 0, e.target.dataset.price);

    // console.log("curServ", curServ)

    if (!localStorage[curServ.id]) {
      console.log(curServ, JSON.stringify(curServ));
      curServ.count += 1;
      localStorage[curServ.id] = JSON.stringify(curServ);
      alert(`${JSON.parse(localStorage[curServ.id]).value} added into your card`);
      console.log(JSON.parse(localStorage[curServ.id]).value);
    } else {
      alert(`${JSON.parse(localStorage[curServ.id]).value} is already in your card`);
    }
  });

  menuBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      const currentBtn = e.currentTarget;
      const drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

      menuBtns.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove('menu__btn--active');
        }
      });
      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
      currentBtn.classList.toggle('menu__btn--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      menuBtns.forEach((el) => {
        el.classList.remove('menu__btn--active');
      });
      drops.forEach((el) => {
        el.classList.remove('dropdown--active');
      });
    }
  });
});
