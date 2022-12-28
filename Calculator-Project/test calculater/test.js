let userValue = 0;
let userValue2 = 0;

function n1To9(data) {
  userValue = document.getElementById("input1").value;
  if (data != 0) {
    userValue = document.getElementById("input1").value = userValue + data;
    userValue2 = document.getElementById("input2").value = "=" + userValue;
    document.getElementById("input1").style.caretColor = "black";
  } else if (userValue != 0) userValue = document.getElementById("input1").value = userValue + data;
}




function changeStyle() {
  var element = document.getElementById("div3");
  element.style.display = "block";
  var element = document.getElementById("div1");
  element.style.position = "relative";
  element.style.top = 0;
}
function changeStyle2() {
  var element = document.getElementById("div3");
  element.style.display = "none";
  var element = document.getElementById("div1");
  element.style.position = "relative";
  element.style.top = 70;
}

function enter() {
  var element = document.getElementById("input1");
  element.style.fontSize = 40;
  element.style.color = "gray";
  var element2 = document.getElementById("input2");
  element2.style.fontSize = 60;
  element2.style.color = "black";
}