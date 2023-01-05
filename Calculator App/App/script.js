var input = document.getElementById("display");

input.onkeypress = function (event) {
    console.log(input.value === "+", event);
    if (event.charCode >= 45 && event.charCode <= 57 ||
        event.charCode == 42 || event.charCode == 43 || event.charCode == 37
        ) {
        if (input.value.toString(input.value.length-1) === "+" && input.value === "+") { return false; }
        else { return true; }
    }
    else { return false; }
}