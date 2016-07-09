(function(exports) {
  function List(Item) {
    this.item = Item;
    this._list = [];
  }

  List.prototype = {
    addItem : function(item, objectStatus=false) {
      task = new this.item(item);
      if(objectStatus == true) {
         item.finish();
      }
      this._list.push(item);
    },
    items : function() {
      return this._list;
    },
    toHtml : function() {
      var formattedList = [];
      for(i=0; i < this._list.length; i++) {
        var completeClass = ''
        if (this._list[i]._status == true) {
          completeClass = "class='completed'"
        }
        var button = '<input id="submit" type="submit" onclick="complete('+i+')" value="&#9989" name="completed">'
        formattedList.push("<li id='list_"+i+"'"+completeClass+">" + this._list[i]._item + button +"</li>");
      }
      return ("<ul>" + formattedList.join('') + "</ul>")
    }
  }
  exports.List = List;
})(this);
