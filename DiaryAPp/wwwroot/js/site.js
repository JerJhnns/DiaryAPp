﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    window.location.href = "https://localhost:44366/Topics/Details/" + inputVal;
   
}

document.getElementById("form-control").mouseOver = function () { mouseOver() };
function mouseOver() {
    document.getElementById("form-control").style.background = "red";
    
}

function osama() {

     return alert("Klikkaa linkistä ja tee rikosilmoitus jos tuntuu siltä että pitää valittaa")
   
    
}
function kalletar() {
    let text = '<form asp-action="Delete";> </form >';
    document.getElementById("kokoko") = text;
}
