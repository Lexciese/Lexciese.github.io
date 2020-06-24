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
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function txtColorToBlack() {
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    txt1.style.color = "black";
    txt2.style.color = "black";
}



var pagiSiangMalam = new Date();
var checkH = pagiSiangMalam.getHours();
console.log(checkH)
if (checkH >= 0 && checkH <= 11) {
    document.getElementById('txt2').innerHTML = "Selamat Pagi,<br>";
    document.body.style.backgroundImage = "url('/static/assets/images/sunrise.jpg')"

} else if (checkH >= 12 && checkH <= 15) {
    document.getElementById('txt2').innerHTML = "Selamat Siang,<br>";
    document.body.style.backgroundImage = "url(https://lh6.googleusercontent.com/proxy/g3MNRR4S0VBk1KWmTem8W_eoNZkjk4v5AKsQ4tUYpp4_ISwDFXdLwYQVPklvs0FjC6gGCbi1TqTgB3YNS6qSV80X3LozHJYmmHImtTqinxPl=w3840-h2160-p-k-no-nd-mv)";
    txtColorToBlack();

} else if (checkH >= 16 && checkH <= 17) {
    document.getElementById('txt2').innerHTML = "Selamat Sore,<br>";
    document.body.style.backgroundImage = "url('/static/assets/images/sunset.jpg')"

} else {
    document.getElementById('txt2').innerHTML = "Selamat Malam,<br>";
    document.body.style.backgroundImage = "url('/static/assets/images/night.jpg')"


}


var input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn").click();
    }
});



// function showCuaca() {
//     var icon = document.getElementById("icon");
//     icon.addEventListener("click", function() {

//     })
// }







