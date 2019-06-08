'use strict';
var GAP = 20;
var TEXT_HEIGHT = 30;
var GIST_HEIGHT = 150;

var Cloud = {
  width: 420,
  height: 270,
  x: 100,
  y: 10,
};

var Bar = {
  width: 40,
  height: GIST_HEIGHT - GAP,
  gap: 50,
};


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Cloud.width, Cloud.height);
};

var renderText = function (ctx, x, y, font, size, text, base, style) {
  ctx.font = size + 'px ' + font || '16px PT Mono';
  ctx.textBaseline = base;
  ctx.fillStyle = style;
  ctx.fillText(text, x, y);
};

var renderRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, NAMES, TIMES) {
  renderCloud(ctx, Cloud.x + GAP / 2, Cloud.y + GAP / 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, Cloud.x, Cloud.y, '#fff');

  renderText(ctx, Cloud.x + GAP, Cloud.y + GAP, ' PT Mono', 16, 'Ура вы победили!', 'hanging', '#000');
  renderText(ctx, Cloud.x + GAP, Cloud.y + GAP + 16, ' PT Mono', 16, 'Список результатов:', 'hanging', '#000');

  var maxTime = getMaxElement(TIMES);

  for (var i = 0; i < NAMES.length; i++) {
    renderText(ctx, Cloud.x + GAP * 2 + (Bar.gap + Bar.width) * i, Cloud.y + Cloud.height - TEXT_HEIGHT, ' PT Mono', 16, NAMES[i], 'hanging', '#000');
    renderText(ctx, Cloud.x + GAP * 2 + (Bar.gap + Bar.width) * i, Cloud.y + Cloud.height - GAP * 2 - TEXT_HEIGHT - ((Bar.height * TIMES[i]) / maxTime), ' PT Mono', 16, Math.round(TIMES[i]), 'hanging', '#000');

    if (NAMES[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2).toString() + ')';
    }
    renderRect(ctx, Cloud.x + GAP * 2 + (Bar.gap + Bar.width) * i, Cloud.y + Cloud.height - GAP - TEXT_HEIGHT, Bar.width, -((Bar.height * TIMES[i]) / maxTime));
  }
};


