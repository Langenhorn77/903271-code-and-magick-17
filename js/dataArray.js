'use strict';

// Генерация массива изображений

(function () {

  window.dataArray = {
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

    FIREBALLS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848',
    ],

    similarListElement: document.querySelector('.setup-similar-list'),

    similarWizardTemplate: document.getElementById('similar-wizard-template')
      .content
      .querySelector('.setup-similar-item'),

    CHARS: [],
    fillArray: function () {
      for (var j = 0; j < WIZARD_NUMBER; j++) {
        var person = {
          name: NAMES[window.utils.getRandomIndex(NAMES.length)] + ' ' + SURNAMES[window.utils.getRandomIndex(SURNAMES.length)],
          coatColor: window.dataArray.COATS[window.utils.getRandomIndex(window.dataArray.COATS.length)],
          eyesColor: window.dataArray.EYES[window.utils.getRandomIndex(window.dataArray.EYES.length)],
        };
        window.dataArray.CHARS.push(person);
      }
    }
  };

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
})();
