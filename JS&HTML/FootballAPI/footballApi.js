console.log("in");
const loadData = ()=>{
    fetch("https://www.openligadb.de/api/getbltable/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data)
        })
    })
}

const fillTable = (data)=>{
    let output = [];
    data.forEach(element => {
        output.push("<div>" + element.TeamName + "</div>")
    });
    document.getElementById("output").innerHTML = output;
}

loadData();