"use strict"

// var input = document.getElementsByClassName("input")
var fname = document.getElementById("fname")
var surname = document.getElementById("surname")
var age = document.getElementById("age")
var add = document.getElementById("add")
// var table = document.getElementById("table")
var removeFirst = document.getElementById("removeFirst")
var removeLast = document.getElementById("removeLast")

add.addEventListener("click", function(){

    if(fname.value == "" || surname.value == "" || age.value == ""){
        alert("Užpildykite visus laukus")
    }
    else if (isNaN(age.value) || age.value < 1) {
        alert("Amžiaus lauke nurodykite teigiamą skaičių");
    }
    else {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerText = fname.value;
        cell2.innerText = surname.value;
        cell3.innerText = age.value;
        fname.value = ""
        surname.value = ""
        age.value = ""
    } 
    })

removeFirst.addEventListener("click", function(){
    var row = table.deleteRow(1);
})

removeLast.addEventListener("click", function(){
    var row = table.deleteRow(-1);
})