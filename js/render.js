'use strict';

// Рендер волшебников

(function () {

  var WIZARD_NUMBER = 4;
  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг',
  ];
  window.render = {
    COATS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)',
    ],

    EYES: [
      'black',
      'red',
      'blue',
      'yellow',
      'green',
    ],
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarWizardTemplate = document.getElementById('similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  var fragment = document.createDocumentFragment();

  var CHARS = [];
  var fillArray = function () {
    for (var j = 0; j < WIZARD_NUMBER; j++) {
      var person = {
        name: NAMES[window.utils.getRandomIndex(NAMES.length)] + ' ' + SURNAMES[window.utils.getRandomIndex(SURNAMES.length)],
        coatColor: window.render.COATS[window.utils.getRandomIndex(window.render.COATS.length)],
        eyesColor: window.render.EYES[window.utils.getRandomIndex(window.render.EYES.length)],
      };
      CHARS.push(person);
    }
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var addWizard = function () {
    for (var i = 0; i < CHARS.length; i++) {
      fragment.appendChild(renderWizard(CHARS[i]));
    }
  };

  var newElement = function () {
    similarListElement.appendChild(fragment);
  };

  fillArray();
  addWizard();
  newElement();

  window.setupDialog.querySelector('.setup-similar').classList.remove('hidden');
})();

