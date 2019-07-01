'use strict';

// Рендер волшебников

(function () {
  var renderWizard = function (wizard) {
    var wizardElement = window.data.similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var addWizard = function (array, length) {
    for (var i = 0; i < window.data.WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(array[window.utils.getRandomIndex(length - 1)]));
    }
  };
  var successHandler = function (wizards) {
    addWizard(wizards, wizards.length);
    window.utils.newElement(window.data.similarListElement, fragment);
    window.setupDialog.querySelector('.setup-similar').classList.remove('hidden');
  };
  window.backend.load(successHandler, window.backend.errorHandler);
})();

