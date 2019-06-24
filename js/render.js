'use strict';

// Рендер волшебников

(function () {
  var renderWizard = function (wizard) {
    var wizardElement = window.dataArray.similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var addWizard = function () {
    for (var i = 0; i < window.dataArray.CHARS.length; i++) {
      fragment.appendChild(renderWizard(window.dataArray.CHARS[i]));
    }
  };

  var newElement = function () {
    window.dataArray.similarListElement.appendChild(fragment);
  };

  window.dataArray.fillArray();
  addWizard();
  newElement();

  window.setupDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

