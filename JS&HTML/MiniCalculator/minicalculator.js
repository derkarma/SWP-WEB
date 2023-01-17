function buttonAddition(){
    console.log("clicked");
    let num1 = document.getElementById("addition1").value;
    let num2 = document.getElementById("addition2").value;

    let result = parseFloat(num1) + parseFloat(num2);
    
    console.log(num1 + " + " + num2 + " = " + result);
}

function buttonSubtraction(){
    console.log("clicked");
    let num1 = document.getElementById("subtraction1").value;
    let num2 = document.getElementById("subtraction2").value;

    let result = parseFloat(num1) - parseFloat(num2);
    
    console.log(num1 + " - " + num2 + " = " + result);
}

function buttonMultiplication(){
    console.log("clicked");
    let num1 = document.getElementById("multiplication1").value;
    let num2 = document.getElementById("multiplication2").value;

    let result = parseFloat(num1) * parseFloat(num2);
    
    console.log(num1 + " * " + num2 + " = " + result);
}

function buttonDivide(){
    console.log("clicked");
    let num1 = document.getElementById("divide1").value;
    let num2 = document.getElementById("divide2").value;

    let result = parseFloat(num1) / parseFloat(num2);
    
    console.log(num1 + " : " + num2 + " = " + result);
}

