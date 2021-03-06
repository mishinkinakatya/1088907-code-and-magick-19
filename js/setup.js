'use strict';
(function () {
  var ESC_KEY = 'Escape';

  var form = window.util.setupWindow.setup.querySelector('.setup-wizard-form');
  var submitButton = form.querySelector('.setup-submit');

  // функция открытия окна настроек
  var openPopup = function () {
    window.util.setupWindow.setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  // функция закрытия окна настроек
  var closePopup = function () {
    window.util.setupWindow.setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  // обработчик события - нажатие на Esc
  var popupEscPressHandler = function (evt) {
    if ((evt.key === ESC_KEY) && (document.activeElement !== window.util.setupWindow.userName)) {
      closePopup();
    }
  };

  // обработчик на клике по аватарке
  window.util.setupWindow.setupOpen.addEventListener('click', function () {
    openPopup();
  }
  );

  // обработчик закрытия окна по кнопке Esc
  document.addEventListener('keydown', function () {
    popupEscPressHandler();
  });

  // обработчик по нажатию по аватарке клавишей Enter
  window.util.setupWindow.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  // обработчик закрытия окна при клике на крестик
  window.util.setupWindow.setupClose.addEventListener('click', function () {
    closePopup();
  });

  // обработчик при нажатии Enter на крестик
  window.util.setupWindow.setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  // функция, которая срабатывает при успешной отправке формы
  var sendHandler = function () {
    closePopup();
    submitButton.textContent = 'Сохранить';
  };

  // обработчик событий на кнопку Отправить
  form.addEventListener('submit', function (evt) {
    submitButton.textContent = 'Данные отправляются...';
    window.backend.save(new FormData(form), sendHandler, window.util.errorHandler);
    evt.preventDefault();
  });

})();
