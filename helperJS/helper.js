
function logToConsoleByHelper() {
    printHelper("Log msg to console by helper");
    alert('logToConsoleByHelper called');
}

function printHelper(msg) {
    document.getElementById("myConsole").innerText += "\n" + msg;
}