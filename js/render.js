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

  var addWizard = function (array) {
    var limitWizards = array.length > 4 ? 4 : array.length;
    window.data.similarListElement.innerHTML = '';
    for (var i = 0; i < limitWizards; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
  };

  window.render = {
    renderSimilarWizards: function (wizards) {
      addWizard(wizards);
      window.utils.newElement(window.data.similarListElement, fragment);
      window.setupDialog.querySelector('.setup-similar').classList.remove('hidden');
    },
  };
})();

