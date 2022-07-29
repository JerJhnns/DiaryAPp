// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    window.location.href = "https://localhost:44366/Topics/Details/" + inputVal;
   
}


function osuma() {

     return alert("Klikkaa linkistä ja tee rikosilmoitus jos tuntuu siltä että pitää valittaa")
   
    
}
function kalletar() {
    let text = '<form asp-action="Delete";> </form >';
    document.getElementById("kokoko") = text;
}
function ShowMessage() {
    
}





var poisto = document.getElementById("delete");
poisto.addEventListener('submit', (event) => {
    event.preventDefault();
    var choice = confirm("Delete");
    if (choice) {
        poisto.submit();
    }
});


function muutos(object) {
    object.style.background = 'hwb(60 30% 40% / .5)';
}
function paluumuutos(object){
    object.style.background = 'black';
}