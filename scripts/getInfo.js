let mail = ['wqe'];
const isEmail = () => {
  const info = {
    problem: document.getElementById('discription').value,
    phone: document.getElementById('phone').value,
    date: document.getElementById('date').value,
  };
  //   const problem = document.getElementById('discription').value;
  //   const phone = document.getElementById('phone').value;
  //   const date = document.getElementById('date').value;

  if (info['phone'].length !== 14) {
    info['phone'] = false;
  }

  const infoArr = [info['problem'], info['phone'], info['date']];
  let message = translate('message');

  if (info['problem'] && info['phone'] && info['date']) {
    console.log('qw', totalSum());
    document.querySelector('.mes').innerHTML = ` 
    <span class="message" id="message">
        <p class ="lng-message">${translate('message')}</p>
    </span>`;

    fetch('http://localhost:5000/text-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: 'Order',
        text: `Problem:${info['problem']}, phone: ${info['phone']}, date: ${info['date']}`,
      }),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        alert(translate('message'));
        // Success
      });
  } else {
    document.querySelector('.mes').innerHTML = ` 
    <span class="message" id="message">
        <p class ="lng-problem__message">${translate('problem__message')}</p>
    </span>`;

    for (const key in info) {
      if (!info[key]) {
        document.querySelector('#message').innerHTML += `<p class="lng-${key}"> ${translate(
          key
        )}</p>
            `;
      }
    }
  }
};

$('.phone').mask('+358-0-000-000');

$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$('input[type="tel"]').click(function () {
  $(this).setCursorPosition(4); // set position number
});
