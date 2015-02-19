function checkBluetoothStatus() {
    var btstatus = document.getElementById('status');
    btstatus.innerHTML = "Checking bluetooth information";
    if (isBTEnabled) {
        btstatus.innerHTML = "Bluetooth is enabled";
    } else {
        btstatus.innerHTML = "Bluetooth is disabled";
    }
    //window.bluetooth.isEnabled(isEnabledSuccess, isEnabledError);
}

function isEnabledSuccess(isEnabled) {
    var btstatus = document.getElementById('status');
    if (isEnabled) {
        btstatus.innerHTML = "Enabled";
    } else {
        btstatus.innerHTML = "Disabled";
    }
}

function isEnabledError(error) {
    var btstatus = document.getElementById('status');
    btstatus.innerHTML = "Cannot determine Bluetooth status: " + error.message;
}

function enableBluetooth() {
    var btstatus = document.getElementById('status');
    btstatus.innerHTML = "Attempting to turn bluetooth on";
    //window.bluetooth.enable(function () { alert("good") }, function () { alert("bad") });
}

function isBTEnabled() {
    bluetoothSerial.
    bluetoothSerial.isEnabled(
        function() {
            alert("Bluetooth is enabled");
            return true;
        },
        function() {
            alert("Bluetooth is *not* enabled");
            return false;
        }
)}

function BTconnected() {
    alert("good");
}

function BTfailed() {
    alert("bad");
}