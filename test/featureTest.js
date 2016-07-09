var app = require("http-server").createServer();
var assert = require('assert').assert;
var Browser = require('zombie');
var List = require('../lib/models/list.js').List;
var Task = require('../lib/models/item.js').Item;

describe('title page', function() {
  before(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('is findable', function() {
    browser.assert.status(200);
  });

  it('displays a title', function() {
    browser.assert.text('h1', 'To Do List');
  });

  it('adds some todos', function() {
    browser.assert.status(200);
    browser.fill('new_task', 'call grandma');
    browser.pressButton('submit');
    browser.assert.text('#list_16', 'call grandma');
  });

  it('should mark tasks as complete', function() {
    browser.fill('new_task', 'call grandma');
    browser.pressButton('submit');
    browser.pressButton('completed');
    browser.assert.element('#list_0');
  });

});
