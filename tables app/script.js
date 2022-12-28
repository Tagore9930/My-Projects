var input = document.getElementById("NumberInput");
var list = document.querySelector(".list");
var error = document.querySelector(".error");

input.onkeypress = function (event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        if (input.value / 2 == "0" && event.key == "0") { return false; }
        else { return true; }
    }
    else { return false; }
}

input.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown")
        event.preventDefault();

    input.addEventListener("keyup", function (event) {
        if (event.key == "Backspace" && input.value == "")
            list.textContent = "";

        if (input.value > 100) {
            error.innerHTML = "* Please enter a number";
            list.textContent = "";
        } else
            error.innerHTML = "";

        if (event.key == "Enter" && error.innerHTML == "") {
            if (input.value == "")
                error.innerHTML = "* Please enter a number";
            else
                run();
        }
    })
});

function run() {
    list.textContent = "";
    if (input.value == "" || input.value > 100) {
        error.innerHTML = "* Please enter a number";
    } else {
        for (let i = 1; i <= 10; i++) {
            var tag = document.createElement("pre");
            tag.innerHTML = input.value + ((i < 10) ? " *  " : " * ") + i + " = " + input.value * i;
            list.appendChild(tag);
        }
    }
}