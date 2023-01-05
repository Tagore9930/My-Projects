var input = document.getElementById("NumberInput");
var list = document.querySelector(".list");
var error = document.querySelector(".error");

input.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight")
        event.preventDefault();

    if (event.key === "Enter")
        run();

    if (event.key === "Backspace") {
        event.preventDefault();
        input.value = input.value.toString().slice(0, -1);
    }

    if (event.keyCode == 69) 
        event.preventDefault();

    if (event.keyCode >= 48 && event.keyCode <= 57) {
        event.preventDefault();
        if (event.keyCode === 48 && input.value === "0");
        else input.value += String(event.key);
    }
});

input.addEventListener("keyup", function (event) {
    if (event.key === "Backspace" && input.value == "")
        list.textContent = "";
    error.innerHTML = (input.value === "") ? "* Please Enter a number" : (input.value > 100) ? "* Tables limit 1 to 100" : "";
});

// Disable Android keyboard buttons.
input.addEventListener('textInput', function (event) {
    if (event.data === "-" || event.data === ".") {
        event.preventDefault();
    }
});

function run() {
    list.textContent = "";
    if (input.value <= 100 && input.value > 0) {
        for (let i = 1; i <= 10; i++) {
            var tag = document.createElement("pre");
            tag.innerHTML = input.value * 1 + ((i < 10) ? " *  " : " * ") + i + " = " + input.value * i;
            list.appendChild(tag);
        }
    } else {
        var tag = document.createElement("h4");
        tag.innerHTML = "Tables limit 1 to 100";
        tag.style = "color: red";
        list.appendChild(tag);
    }
}