'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

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

var COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var FIREBALLS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];


var DIALOG_DEFAULT_POSITION = {
  top: '80px',
  left: '50%'
};

// Сброс стилей дилогового окна

var defaultStyle = function () {
  setup.style.top = DIALOG_DEFAULT_POSITION.top;
  setup.style.left = DIALOG_DEFAULT_POSITION.left;
};

// Функия случайного значения

var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};


// Изменения цветов по клику
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector(' .setup-fireball-wrap');

var changeCoatColor = function () {
  wizardCoat.style.fill = COATS[getRandomIndex(COATS.length)];
};

var changeEyesColor = function () {
  wizardEyes.style.fill = EYES[getRandomIndex(EYES.length)];
};

var changeFireballColor = function () {
  wizardFireball.style.background = FIREBALLS[getRandomIndex(FIREBALLS.length)];
};

wizardCoat.addEventListener('click', changeCoatColor);
wizardEyes.addEventListener('click', changeEyesColor);
wizardFireball.addEventListener('click', changeFireballColor);

// Рендер волшебников

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
      name: NAMES[getRandomIndex(NAMES.length)] + ' ' + SURNAMES[getRandomIndex(SURNAMES.length)],
      coatColor: COATS[getRandomIndex(COATS.length)],
      eyesColor: EYES[getRandomIndex(EYES.length)],
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

setup.querySelector('.setup-similar').classList.remove('hidden');

