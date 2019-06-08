'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var x;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, x, y, font, size, text, base, style) {
  ctx.font = size + 'px ' + font || '16px PT Mono';
  ctx.textBaseline = base;
  ctx.fillStyle = style;
  ctx.fillText(text, x, y);
};

var renderRect = function(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

window.renderStatistics = function(ctx, NAMES, TIMES) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2, ' PT Mono', 16, 'Ура вы победили!', 'hanging', '#000',);
  renderText(ctx, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + 16,' PT Mono', 16, 'Список результатов:', 'hanging', '#000');

  for (var i = 0; i < NAMES.length; i++) {
    renderText(ctx, CLOUD_X + GAP * 4 + (BAR_GAP + BAR_WIDTH)*i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT,' PT Mono', 16, NAMES[i], 'hanging', '#000');
    renderRect(ctx, CLOUD_X + GAP * 4 + (BAR_GAP + BAR_WIDTH)*i, CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT, BAR_WIDTH, -BAR_HEIGHT, ' rgba(255, 0, 0, 1)');
  }
};

/*x = (BAR_HEIGHT * TIME[i])/MAX_TIME*/
