'use strict';

(function () {
  var TIMEOUT = 10000;
  var STATUS_CODE = 200;
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';

  window.backend = {
    useServer: function (onLoad, onError, use, data) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === STATUS_CODE) {
          onLoad(xhr.response);
        } else {
          onError('Произошла ошибка. Код: ' + xhr.status);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс');
      });

      xhr.timeout = TIMEOUT;

      switch (use) {
        case 'save':
          xhr.open('POST', URL_SAVE);
          xhr.send(data);
          break;
        case 'load':
          xhr.open('GET', URL_LOAD);
          xhr.send();
          break;
        default:
          onError('Ошибка обращения к серверу.');
      }
    },

    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: orange;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '25px';
      node.style.color = 'black';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },
  };
})();

