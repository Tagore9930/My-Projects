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

function NumberKeyAction2(userData) {
  switch (userData) {
    case "0":
      n1To9(userData);
      break;
    case "00":
      n1To9(userData);
      break;
    case "1":
      n1To9(userData);
      break;
    case "2":
      n1To9(userData);
      break;
    case "3":
      n1To9(userData);
      break;
    case "4":
      n1To9(userData);
      break;
    case "5":
      n1To9(userData);
      break;
    case "6":
      n1To9(userData);
      break;
    case "7":
      n1To9(userData);
      break;
    case "8":
      n1To9(userData);
      break;
    case "9":
      n1To9(userData);
      break;
    case "clr":
      userValue = parseInt(Number(userValue) / 10);
      if (userValue == 0) {
        userValue = document.getElementById("input1").value = "";
        changeStyle2();
      }
      else
        userValue = document.getElementById("input1").value = userValue;
        userValue2 = document.getElementById("input2").value = "=" + userValue;
      if (userValue == "") document.getElementById("input1").style.caretColor = "transparent";
      break;
    case "allClear":
      document.getElementById("input1").value = userValue = "";
      document.getElementById("input1").style.caretColor = "transparent";
  }
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