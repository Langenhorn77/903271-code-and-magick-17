'use strict';

(function () {
  var FIREBALLS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  // Изменения цветов по клику

  var wizardCoat = window.setupDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = window.setupDialog.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = window.setupDialog.querySelector(' .setup-fireball-wrap');

  var changeCoatColor = function () {
    wizardCoat.style.fill = window.render.COATS[window.utils.getRandomIndex(window.render.COATS.length)];
  };

  var changeEyesColor = function () {
    wizardEyes.style.fill = window.render.EYES[window.utils.getRandomIndex(window.render.EYES.length)];
  };

  var changeFireballColor = function () {
    wizardFireball.style.background = FIREBALLS[window.utils.getRandomIndex(FIREBALLS.length)];
  };

  wizardCoat.addEventListener('click', changeCoatColor);
  wizardEyes.addEventListener('click', changeEyesColor);
  wizardFireball.addEventListener('click', changeFireballColor);
})();
