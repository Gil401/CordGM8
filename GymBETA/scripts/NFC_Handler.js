function initNFC() {
    nfc.addNdefListener(
            function (nfcEvent) {
                var tag = nfcEvent.tag,
                    ndefMessage = tag.ndefMessage;
                // assuming the first record in the message has 
                // a payload that can be converted to a string.
                var macAddress = nfc.bytesToString(ndefMessage[0].payload).substring(3);
                if (confirm(macAddress)) {
                    //00:1b:b1:fc:d3:70
                    bluetoothSerial.connect("00:1b:b1:fc:d3:70", BTconnected, BTfailed);
                }
            },
            function () { // success callback
                console.log("Waiting for NDEF tag");
            },
            function (error) { // error callback
                console.log("Error adding NDEF listener " + JSON.stringify(error));
            }
        );
}