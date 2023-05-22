function serv(id, value, count, price) {
  this.id = id;
  this.value = value;
  this.count = count;
  this.price = price;
}

document.addEventListener('DOMContentLoaded', () => {
  const counter = () => {
    const keys = Object.keys(localStorage);
    let sum = 0;
    for (const key of keys) {
      if (key !== 'lang') {
        const item = JSON.parse(localStorage[key]);
        sum += item.count;
      }
    }

    document.getElementById('counter').innerHTML = sum;
  };
  counter();
  const menuBtns = document.querySelectorAll('.menu__btn');
  const drops = document.querySelectorAll('.dropdown');

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dropdown__btn')) {
      return;
    }
    const curServ = new serv(e.target.id, e.target.value, 0, e.target.dataset.price);
    if (!localStorage[curServ.id]) {
      curServ.count += 1;

      localStorage[curServ.id] = JSON.stringify(curServ);

      alert(
        `${JSON.parse(localStorage[curServ.id]).value} ${
          langArr['alert_added'][localStorage['lang']]
        }`
      );
      counter();
    } else {
      alert(
        `${JSON.parse(localStorage[curServ.id]).value} ${
          langArr['alert_already'][localStorage['lang']]
        }`
      );
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
          el.closest('.menu')
            .querySelector('.menu__btn')
            .querySelector('.arrow')
            .classList.remove('arrow--active');

          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
      currentBtn.classList.toggle('menu__btn--active');
      currentBtn.querySelector('.arrow').classList.toggle('arrow--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      menuBtns.forEach((el) => {
        el.classList.remove('menu__btn--active');
      });
      drops.forEach((el) => {
        el.classList.remove('dropdown--active');
        el.closest('.menu')
          .querySelector('.menu__btn')
          .querySelector('.arrow')
          .classList.remove('arrow--active');
      });
    }
  });
});
