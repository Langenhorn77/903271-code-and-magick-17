'use strict';

// Рендер волшебников

(function () {
  var renderWizard = function (wizard) {
    var wizardElement = window.data.similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var addWizard = function () {
    for (var i = 0; i < window.data.CHARS.length; i++) {
      fragment.appendChild(renderWizard(window.data.CHARS[i]));
    }
  };

  var newElement = function () {
    window.data.similarListElement.appendChild(fragment);
  };
  addWizard();
  newElement();

  window.setupDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

