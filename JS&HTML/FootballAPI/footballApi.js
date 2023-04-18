const loadData = () =>{
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) =>{
        result.json().then((data) => {
            
            fillTable(data);
        })
    })
}

const fillTable = (data) =>{

    let html = "";

    data.forEach(element => {
        html += `<div class"table"> <p class="points">${element.teamName}  ${element.points}</p></div>`;
    });
    document.getElementById("output").innerHTML = html;

}

loadData();