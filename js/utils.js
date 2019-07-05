'use strict';

window.utils = {

  // Функия случайного значения
  getRandomIndex: function (max) {
    return Math.floor(Math.random() * max);
  },

  // Функия создания нового элемента
  newElement: function (el, arg) {
    el.appendChild(arg);
  },

  debounce: function (cb, timeout, interval) {
    if (timeout) {
      window.clearTimeout(timeout);
    }
    timeout = window.setTimeout(cb, interval);
  }
};
