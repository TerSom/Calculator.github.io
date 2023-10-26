let operator = prompt("Masukan operator (+,-,*,/,**,%,^)");
let Number1 = parseInt(prompt("masukan angka yang pertama"));
let Number2 = parseInt(prompt("masukan masukan angka yang dua"));

let hasil
if (operator == "+") {
    hasil = Number1 + Number2;
} else if (operator == "-") {
    hasil = Number1 - Number2;
} else if (operator == "*") {
    hasil = Number1 * Number2;
} else if (operator == "/") {
    hasil = Number1 / Number2;
} else if (operator == "**") {
    hasil = Number1 ** Number2;
} else if (operator == "%") {
    hasil = Number1 % Number2;
} else if (operator == "^") {
    hasil = Number1 ^ Number2;
}
document.write(hasil);