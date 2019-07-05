'use strict';

(function () {

  // Изменения цветов по клику

  var wizardCoat = window.setupDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = window.setupDialog.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = window.setupDialog.querySelector(' .setup-fireball-wrap');
  var changeCoatColor = function () {
    var newColor = window.data.COATS[window.utils.getRandomIndex(window.data.COATS.length)];
    wizardCoat.style.fill = newColor;
    window.update.coatColor = newColor;
    window.utils.debounce(window.update.updateWizards, window.update.lastTimeout, window.update.DEBOUNCE_INTERVAL);
  };

  var changeEyesColor = function () {
    var newColor = window.data.EYES[window.utils.getRandomIndex(window.data.EYES.length)];
    wizardEyes.style.fill = newColor;
    window.update.eyesColor = newColor;
    window.utils.debounce(window.update.updateWizards, window.update.lastTimeout, window.update.DEBOUNCE_INTERVAL);
  };

  var changeFireballColor = function () {
    wizardFireball.style.background = window.data.FIREBALLS[window.utils.getRandomIndex(window.data.FIREBALLS.length)];
  };

  wizardCoat.addEventListener('click', changeCoatColor);
  wizardEyes.addEventListener('click', changeEyesColor);
  wizardFireball.addEventListener('click', changeFireballColor);
})();
