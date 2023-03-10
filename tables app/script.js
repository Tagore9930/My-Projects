var input = document.getElementById("NumberInput");
var list = document.querySelector(".list");
var error = document.querySelector(".error");

input.onkeypress = function (event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        if (input.value / 2 === "0" && event.key === "0") { return false; }
        else { return true; }
    }
    else { return false; }
}

input.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown")
        event.preventDefault();

    if (event.key === "Enter") run();

});

input.addEventListener("keyup", function (event) {
    if (event.key === "Backspace" && input.value == "")
        list.textContent = "";

    error.innerHTML = (input.value === "") ? "* Please Enter a number" : (input.value > 100) ? "* Tables limit 1 to 100" : "";
});

function run() {
    list.textContent = "";
    if (input.value <= 100 && input.value > 0) {
        for (let i = 1; i <= 10; i++) {
            var tag = document.createElement("pre");
            tag.innerHTML = input.value + ((i < 10) ? " *  " : " * ") + i + " = " + input.value * i;
            list.appendChild(tag);
        }
    } else {
        var tag = document.createElement("h4");
        tag.innerHTML = "Tables limit 1 to 100";
        tag.style = "color: red";
        list.appendChild(tag);
    }
}