//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert: 
//X X X X 
//O O O O 
//X X X X 
//O O O O 

for (let i=0; i<4; i++){
    let row = "";

    for (let h=0;h<4; h++){
        if(i%2 != 0){
            row += "O"
        }
        else{
            row += "X"
        }
    }
    console.log(row);
}



//Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

let sum = 0;
for (let i=0; i<=100; i+=2){
    sum += i;
}
console.log("jojo " +  sum)
