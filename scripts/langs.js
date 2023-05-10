const select = document.querySelector('select');
console.log(select);
const allLang = ['fi', 'en'];

const currentLanguage = localStorage.lang;
console.log(currentLanguage, 'scurrentLanguage');
if (currentLanguage) {
  select.value = currentLanguage;
} else {
  localStorage.setItem('lang', select.value);
}
console.log(select.value, 'select value');

if (select) {
  select.addEventListener('change', changeLanguage);
}

function changeLanguage() {
  const hash = select.value;
  localStorage.setItem('lang', select.value);

  for (const key in langArr) {
    const elem = document.querySelector(`.lng-${key}`);
    if (elem) {
      elem.innerHTML = langArr[key][hash];

      elem.value = langArr[key][hash];
    }
    if (localStorage[key]) {
      const translate = JSON.parse(localStorage[key]);
      translate.value = langArr[key][hash];
      localStorage[key] = JSON.stringify(translate);
    }
  }

  if (typeof generateCart !== 'undefined') {
    generateCart();
  }
}

changeLanguage();
