'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var DIALOG_DEFAULT_POSITION = {
    top: '80px',
    left: '50%'
  };

  window.setupDialog = document.querySelector('.setup');
  var userForm = window.setupDialog.querySelector('.setup-wizard-form');
  var buttonForm = window.setupDialog.querySelector('.setup-submit');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setupDialog.querySelector('.setup-close');

  // Сброс стилей дилогового окна

  var defaultStyle = function () {
    window.setupDialog.style.top = DIALOG_DEFAULT_POSITION.top;
    window.setupDialog.style.left = DIALOG_DEFAULT_POSITION.left;
  };

  // Открытие и закрытие окна setup
  var onPopupEscPress = function (evt) {
    if ((evt.keyCode === ESC_KEYCODE) && !evt.target.classList.contains('setup-user-name')) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.setupDialog.classList.remove('hidden');
    buttonForm.disabled = false;
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setupDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    defaultStyle();
  };


  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  // Отправка формы на сервер
  userForm.addEventListener('submit', function (evt) {
    buttonForm.disabled = true;
    window.backend.save(new FormData(userForm), function () {
      window.setupDialog.classList.add('hidden');
    }, window.backend.errorHandler);
    evt.preventDefault();
  });
})();
