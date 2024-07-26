// api : https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
let inp = document.getElementById("text");
let qrBox = document.getElementById("qrBox");
let qr = document.getElementById("qr");

function generateQR() {
    if(inp.value.length > 0) {
        qr.style.marginBottom = "20px";
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inp.value;
        // console.log(qr.src);ss
    }
}