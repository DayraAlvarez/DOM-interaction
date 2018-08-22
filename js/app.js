var access = document.getElementsByClassName("countryButton");
console.log(access);

var countries = ["Brasil","Chile", "México", "Peru"];
var showCountry = function (event) {
    //Reconocer que boton clickee
    var btn = event.target
    console.log(btn.dataset);
    alert(btn.dataset.country);
    //Recuperar data-country
    //Mostrar el data-country

}
for (var i = 0; i < access.length; i++){
    console.log(countries);
    access[i].addEventListener("click", showCountry);
    access[i].setAttribute("data-country", countries[i]);
    console.log(access[i]);
    
}
   
    




