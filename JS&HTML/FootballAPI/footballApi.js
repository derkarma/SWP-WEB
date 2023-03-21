const loadData = ()=>{
    fetch("https://api.opnligadb.de/getbltable/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
        })
    })
}