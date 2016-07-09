(function(exports) {
function Item(item) {
  this._item = item;
  this._status = false;
};

Item.prototype.get = function() {
  return this._item;
};

Item.prototype.status = function() {
  return this._status;
};

Item.prototype.finish = function() {
  this._status = true;
};

exports.Item = Item;
})(this);
