
window.addEventListener("load", function() {
  new_list = new List(item);
  xhttp();
});

function addTask(){
  var newItem = document.getElementById("task_input").value
  new_list.addItem(newItem);
  renderAndReset();
}

function renderAndReset() {
  document.getElementById('list').innerHTML = new_list.toHtml();
  resetContent();
}

function addApiTask(item, objectStatus){
  new_list.addItem(item, objectStatus);
  renderAndReset();
}

function complete(i){
  new_list._list[i].finish();
  document.getElementById('list').innerHTML = new_list.toHtml();
}

function resetContent(){
  var inputBox = document.getElementById("task_input");
  inputBox.value='';
}

function xhttp(){
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
      } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var myJson = JSON.parse(xhttp.responseText)
      console.log(myJson)
      var listItems = myJson.map(function(object){
        var item = object.text;
        var objectStatus = object.completed;
        addApiTask(item, objectStatus)
      }
    )}
  }
 xhttp.open("GET", "http://quiet-beach-24792.herokuapp.com/todos.json", true);
 xhttp.send();
}
