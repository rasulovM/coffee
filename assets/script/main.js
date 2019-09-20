$(window).on('load', function() {
  $('#tabs').on('click', 'a:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.middle__tabs').find('div.middle__content').removeClass('middle__content-active').eq($(this).index()).addClass('middle__content-active');
  });
  

  });

let user = document.querySelector('.user-input')
let pas = document.querySelector('.password-input')
let btnLogin = document.querySelector('.btn-login')
let subscribe = document.querySelector('.inputs__field--subscribe')
let btnSubscribe = document.querySelector('.inputs__btn--subscribe')


const login = () => {
  if((user.value === '' || user.value === null) || (pas.value === '' || pas.value === null)) {
    alert('Введите данные для входа!!!') 
  }
  else { 
    alert('Успешно') 
  }
}

btnLogin.addEventListener('click', login)

function validate(form_id,email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})/;
  var address = document.forms[form_id].elements[email].value;
  if(reg.test(address) == false) {
     alert('Введите корректный e-mail');
      return false
  } else {
    alert('Вы успешно подписались')
      return false
  }
}
