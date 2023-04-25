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
        html += `<div class"table"> <p class="points"> 
                    <table border="2">
                        <tr>
                            <td> ${element.teamName}</td>
                            <td> ${element.points}</td>
                        </tr>
                    </table>
             </p></div>`;
    });
    document.getElementById("output").innerHTML = html;

}

loadData();

