'use strict';

(function () {

  // Изменения цветов по клику

  var wizardCoat = window.setupDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = window.setupDialog.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = window.setupDialog.querySelector(' .setup-fireball-wrap');

  var changeCoatColor = function () {
    wizardCoat.style.fill = window.dataArray.COATS[window.utils.getRandomIndex(window.dataArray.COATS.length)];
  };

  var changeEyesColor = function () {
    wizardEyes.style.fill = window.dataArray.EYES[window.utils.getRandomIndex(window.dataArray.EYES.length)];
  };

  var changeFireballColor = function () {
    wizardFireball.style.background = window.dataArray.FIREBALLS[window.utils.getRandomIndex(window.dataArray.FIREBALLS.length)];
  };

  wizardCoat.addEventListener('click', changeCoatColor);
  wizardEyes.addEventListener('click', changeEyesColor);
  wizardFireball.addEventListener('click', changeFireballColor);
})();
