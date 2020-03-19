'use strict';

(function () {
  window.util = {
    setupWindow: {
      setup: document.querySelector('.setup'),
      setupOpen: document.querySelector('.setup-open'),
      setupClose: document.querySelector('.setup-close'),
      setupSubmit: document.querySelector('.setup-submit'),
      userName: document.querySelector('.setup-user-name'),
      dialog: document.querySelector('.upload'),
    },
    // функция, которая срабатывает при возникновении ошибок
    errorHandler: function (message) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.textContent = message;
      document.body.insertAdjacentElement('afterbegin', node);
    },
  };

})();
