const day = document.getElementById("day");
const mon = document.getElementById("mon");

var d = new Date();
var month = d.getMonth() + 1;

day.innerHTML= d.getUTCDate();

switch(month) {
    case 1:mon.innerHTML = "JAN" + d.getFullYear();
    break;

    case 2:mon.innerHTML = "FEB" + d.getFullYear();
    break;

    case 3:mon.innerHTML = "MAR" + d.getFullYear();
    break;

    case 4:mon.innerHTML = "APR" + d.getFullYear();
    break;

    case 5:mon.innerHTML = "MAY" + d.getFullYear();
    break;

    case 6:mon.innerHTML = "JUN" + d.getFullYear();
    break;

    case 7:mon.innerHTML = "JUL" + d.getFullYear();
    break;

    case 8:mon.innerHTML = "AUG" + d.getFullYear();
    break;

    case 9:mon.innerHTML = "SEP" + d.getFullYear();
    break;

    case 10:mon.innerHTML = "OCT" + d.getFullYear();
    break;

    case 11:mon.innerHTML = "NOV" + d.getFullYear();
    break;

    case 12:mon.innerHTML = "DEC" + d.getFullYear();
    break;
}