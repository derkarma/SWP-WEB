function buttonDollar(){
    console.log("clicked")
    let num1 = document.getElementById("input").value; 

    let euroToDollar = num1 * 1.06;
    
    document.getElementById("output").innerHTML = euroToDollar.toFixed(2) + "$";
}

function buttonPound(){
    let num1 = document.getElementById("input").value;

    let euroToPound = num1 * 0.89;
    document.getElementById("output").innerHTML = euroToPound.toFixed(2) + " £";
}

function buttonSchilling(){
    let num1 = document.getElementById("input").value;

    let euroToSchilling = num1 * 13.76;


    document.getElementById("output").innerHTML = euroToSchilling.toFixed(2) + " Schilling";
}





    


