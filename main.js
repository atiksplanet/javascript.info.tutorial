function webappLoaded() {
    print("webappLoaded called");
}

function print(msg) {
    document.getElementById("myConsole").innerText += "\n" + msg;
}

function logToConsole() {
    print("Log msg to console");
}
