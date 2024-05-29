let homeSc = document.getElementById("home-Sc");
let guestGs = document.getElementById("guest-Gs");

let count = 0;

function homeBtn1() {
  count = count + 1;
  homeSc.innerText = count;
}
function homeBtn2() {
  count = count + 2;
  homeSc.innerText = count;
}
function homeBtn3() {
  count = count + 3;
  homeSc.innerText = count;
}

function guestBtn1() {
  count = count + 1;
  guestGs.innerText = count;
}

function guestBtn2() {
  count = count + 2;
  guestGs.innerText = count;
}

function guestBtn3() {
  count = count + 3;
  guestGs.innerText = count;
}

function clearHome() {
  count = count = 0;
  homeSc.innerText = count;
}

function clearGuest() {
    count = count = 0;
    guestGs.innerText = count;
}