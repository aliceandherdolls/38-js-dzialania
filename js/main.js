let num1 = 2;
let num2 = 3;

function actions(par1, par2) {
    let multiply = par1 * par2;
    let sum = par1 + par2;
    let subtraction = par1 - par2;


    if (multiply >= 0) {
        console.log(`Wynik mnożenia wynosi: ${multiply}`);

    } else {
        console.log('Wynik jest nieprawidłowy');

    }

    if (sum >= 0) {
        console.log(`Wynik dodawania wynosi: ${sum}`)
    } else {
        console.log('Wynik jest nieprawidłowy');

    }
    if (subtraction >= 0) {
        console.log(`Wynik odejmowania wynosi: ${subtraction}`)

    } else {
        console.log('Wynik jest nieprawidłowy');

    }
 
}
actions(2, 3)


