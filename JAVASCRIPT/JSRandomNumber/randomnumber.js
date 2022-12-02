
let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

//wenn größer als 800
//wenn zw. 500 und 800
//wenn zw. 200 und 500
//wenn zw. 0 und 200

if(randomAsInteger>800){
    console.log("bigger then 800");
}
else if(randomAsInteger>500 && randomAsInteger<800){
    console.log("between 500 and 800");
}
else if(randomAsInteger>200 && randomAsInteger<500){
    console.log("between 200 and 500");
}
else if(randomAsInteger>0 && randomAsInteger<200){
    console.log("between 0 and 200");
}