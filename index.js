const day = document.getElementById("day");
const mon = document.getElementById("mon");

var d = new Date();
var month = d.getMonth() + 1;

day.innerHTML= d.getUTCDate();

switch(month) {
    case 1:mon.innerHTML = "JAN" + d.getFullYear();
    break;
}