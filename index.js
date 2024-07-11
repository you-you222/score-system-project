let firstTeam = "Parcelona",
    secondTeam = "Real Madrid";

document.getElementsByClassName('team-name')[0].innerHTML = firstTeam;
document.getElementsByClassName('team-name')[1].innerHTML = secondTeam;

let counter = 0;
let screen = document.getElementsByClassName('screen')[0];
function add1() {
    counter +=1;
    screen.textContent = counter;
    console.log(counter)
}
function add2() {
    counter +=2;
    screen.textContent = counter;
    console.log(counter)
}
function add3() {
    counter +=3;
    screen.textContent = counter;
    console.log(counter)
}
let counter2 = 0;
let screen2 = document.getElementsByClassName('screen')[1];
function add12() {
    counter2 +=1;
    screen2.textContent = counter2;
    console.log(counter2)
}
function add22() {
    counter2 +=2;
    screen2.textContent = counter2;
    console.log(counter2)
}
function add32() {
    counter2 +=3;
    screen2.textContent = counter2;
    console.log(counter2)
}