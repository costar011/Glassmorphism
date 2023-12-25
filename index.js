const day = document.getElementById("day");
const mon = document.getElementById("mon");

var d = new Date();
var month = d.getMonth()+1;

day.innerHTML = d.getUTCDay();

switch(month) {
    case 1:mon.innerHTML = "JAN" + d.getFullYear();
    break;

    case 2:mon.innerHTML = "FEB" + d.getFullYear();
    break;

    case 3:mon.innerHTML = "" + d.getFullYear();
    break;

    case 4:mon.innerHTML = "" + d.getFullYear();
    break;

    case 5:mon.innerHTML = "" + d.getFullYear();
    break;

    case 6:mon.innerHTML = "" + d.getFullYear();
    break;

    case 7:mon.innerHTML = "" + d.getFullYear();
    break;

    case 8:mon.innerHTML = "" + d.getFullYear();
    break;

    case 9:mon.innerHTML = "" + d.getFullYear();
    break;

    case 10:mon.innerHTML = "" + d.getFullYear();
    break;

    case 11:mon.innerHTML = "" + d.getFullYear();
    break;

    case 12:mon.innerHTML = "" + d.getFullYear();
    break;
}