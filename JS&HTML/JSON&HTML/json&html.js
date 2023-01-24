
let data = [
    {firstName:"Hans", lastName:"Huber", points:30},
    {firstName:"Felix", lastName:"Kreuch", points:23},
    {firstName:"Johanna", lastName:"Breit", points:29}
];

/*
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element.firstName);
    
}

data.forEach(element => {
    console.log();
});

let person = {firstName:"Hans", lastName:"Huber", points:30}
console.log(person.firstName);
*/

function loadPeople(){
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstName + " " + element.lastName + "</div>"
    });

    document.getElementById("content").innerHTML = html;

}

loadPeople();