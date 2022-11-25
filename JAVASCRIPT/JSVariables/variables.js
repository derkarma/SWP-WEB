// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";

// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleAverageWeight = 0.34;

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaAverageWeight = 0.22;
0
// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
// Preis von 8 Äpfeln
console.log("8 Äpfel kosten " + (appleAverageWeight*applePricePerKilo*8) + "€");

// Preis von 17 Bananen
console.log("Der Preis von 17 Bananen beträgt " + (bananaAverageWeight*bananaPricePerKilo*17) + "€");

// Preis von 1 Tonne Äpfel
console.log("Der Preis von 1 Tonne Äpfel beträgt " + ((appleAverageWeight*1000)*applePricePerKilo) + "€");

// Preis von 1 Tonne Bananen
console.log("Der Preis von 1 Tonne Bananen beträgt " + ((bananaAverageWeight*1000)*bananaPricePerKilo) + "€");
