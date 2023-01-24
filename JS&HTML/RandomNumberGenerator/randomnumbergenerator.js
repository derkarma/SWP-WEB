function generate(){
let number1 = parseInt(document.getElementById("field1").value);
let number2 = parseInt(document.getElementById("field2").value);

let amountOfRandomNumbers = parseInt(number2) - parseInt(number1) + 1;
console.log(number1 + " : " + number2);

    let randomNumber = Math.floor(Math.random() * amountOfRandomNumbers) + parseInt(number1);
    document.getElementById("randomNumber").innerHTML = randomNumber;
}