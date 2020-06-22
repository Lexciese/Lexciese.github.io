let txt1 = document.getElementById("txt1");touch Procfile

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt1').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


var pagiSiangMalam = new Date();
var checkH = pagiSiangMalam.getHours();
console.log(checkH)
if (checkH >= 0 && checkH <= 11) {
    document.getElementById('txt2').innerHTML = "Selamat Pagi,<br>Falah Naufal Zaki"
}else if (checkH >=12 && checkH <= 15) {
    document.getElementById('txt2').innerHTML = "Selamat Siang,<br>Falah Naufal Zaki"
}else if (checkH >=16 && checkH <= 18) {
    document.getElementById('txt2').innerHTML = "Selamat Sore,<br>Falah Naufal Zaki"
}else {
    document.getElementById('txt2').innerHTML = "Selamat Malam,<br>Falah Naufal Zaki"
}


var input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn").click();
    }
  });






