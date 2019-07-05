'use strict';
(function () {
  var persons = [];

  window.update = {
    lastTimeout: '',
    DEBOUNCE_INTERVAL: 500,
    coatColor: '',
    eyesColor: '',
    updateWizards: function () {
      var sameCoatAndEyesWizards = persons.filter(function (it) {
        return it.colorCoat === window.update.coatColor &&
          it.colorEyes === window.update.eyesColor;
      });
      var sameCoatWizards = persons.filter(function (it) {
        return it.colorCoat === window.update.coatColor;
      });
      var sameEyesWizards = persons.filter(function (it) {
        return it.colorEyes === window.update.eyesColor;
      });
      var filteredWizards = sameCoatAndEyesWizards;
      filteredWizards = filteredWizards.concat(sameCoatWizards);
      filteredWizards = filteredWizards.concat(sameEyesWizards);
      filteredWizards = filteredWizards.concat(persons);

      var uniqueWizards =
        filteredWizards.filter(function (it, i) {
          return filteredWizards.indexOf(it) === i;
        });
      sortWizards(uniqueWizards);
      window.render.renderSimilarWizards(uniqueWizards);
    },
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.update.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.update.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var sortWizards = function (array) {
    array.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = array.indexOf(left) - array.indexOf(right);
      }
      return rankDiff;
    });
  };

  var successHandler = function (wizards) {
    persons = wizards;
    window.update.updateWizards();
  };

  window.backend.load(successHandler, window.backend.errorHandler);
})();
