var expect = require('chai').expect;
var Task = require('../lib/models/item.js').Item;

describe('Task', function() {
  var item;

  beforeEach(function() {
    item = new Item('phone grandma');
  });

  it('should store a item when constructed', function() {
    expect(item.get()).to.equal('phone grandma');
  });

  it('should return a boolean', function() {
    expect(item.status()).to.be.a('boolean');
  });

  it('should be able to mark complete', function() {
    item.finish();
    expect(item.status()).to.equal(true);
  });

});
