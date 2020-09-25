
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "cerrar";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("cerrar");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("cosa").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("No hay nada para agregar");
  } else {
    document.getElementById("listado").appendChild(li);
  }
  document.getElementById("cosa").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "cerrar";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}