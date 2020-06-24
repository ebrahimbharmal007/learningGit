var dups = []; //Track of numbers which have already been used
var housie = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
//Generate random number WITHOUT DUPLICATES
function randomNumber(min, max, duplicatesArray) {
    var already_used = 0;
    var number_gen = 0;
    do {
        number_gen = Math.floor(Math.random() * (max - min) + min);
        already_used = duplicatesArray.includes(number_gen);
    }
    while (already_used);
    duplicatesArray.push(number_gen);
    return number_gen;
}
function generate_ticket() {
    var row;
    var column;
    var j;

    for (column = 0; column < 9; column++) {
        for (row = 0; row < 3; row++) {
            if (column == 0) {
                housie[row][column] = randomNumber(1, 9, dups);
            }
            else if (column == 1) {
                housie[row][column] = randomNumber(10, 19, dups);
            }
            else if (column == 2) {
                housie[row][column] = randomNumber(20, 29, dups);
            }
            else if (column == 3) {
                housie[row][column] = randomNumber(30, 39, dups);
            }
            else if (column == 4) {
                housie[row][column] = randomNumber(40, 49, dups);
            }
            else if (column == 5) {
                housie[row][column] = randomNumber(50, 59, dups);
            }
            else if (column == 6) {
                housie[row][column] = randomNumber(60, 69, dups);
            }
            else if (column == 7) {
                housie[row][column] = randomNumber(70, 79, dups);
            }
            else if (column == 8) {
                housie[row][column] = randomNumber(80, 90, dups);
            }
        }
    }

    for (row = 0; row < 3; row++) {
        var dupsZero = [];
        for (j = 0; j < 4; j++) {
            column = randomNumber(0, 8, dupsZero);
            housie[row][column] = 0;
        }
    }
    console.table(housie);
    document.write(housie);

}
generate_ticket();
