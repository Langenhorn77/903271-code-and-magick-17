'use strict';

(function () {

  // Изменения цветов по клику

  var wizardCoat = window.setupDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = window.setupDialog.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = window.setupDialog.querySelector(' .setup-fireball-wrap');

  var changeCoatColor = function () {
    wizardCoat.style.fill = window.data.COATS[window.utils.getRandomIndex(window.data.COATS.length)];
  };

  var changeEyesColor = function () {
    wizardEyes.style.fill = window.data.EYES[window.utils.getRandomIndex(window.data.EYES.length)];
  };

  var changeFireballColor = function () {
    wizardFireball.style.background = window.data.FIREBALLS[window.utils.getRandomIndex(window.data.FIREBALLS.length)];
  };

  wizardCoat.addEventListener('click', changeCoatColor);
  wizardEyes.addEventListener('click', changeEyesColor);
  wizardFireball.addEventListener('click', changeFireballColor);
})();
