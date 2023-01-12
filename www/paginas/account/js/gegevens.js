// *NOTE: hint om te gebruiken
// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value); 

var d = document;
$(document).ready(function(){


    var gegevensSubmit = d.getElementById("gegevensSubmit")
    var inputNaam= d.getElementById("naam");
    const form = document.getElementById('persoonlijkeGegevensForm');
    console.log("geladen");
    
    form.addEventListener('submit', callbackFunction); // draai callback functie als form submit wordt. 
                        
    function callbackFunction(event) {
        console.log("draait callback")
    event.preventDefault(); // prevent default om te zorgen dat het de form data niet direct verdwijnt. 
    const myFormData = new FormData(event.target);
            // *NOTE:  zodra onderstaande formDataObj weg is. doet hij het wel.. alleen is myFormData leeg.... 
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value)); // alle values sorteren. 
    console.log(formDataObj); // weergeven van de value en keys in een object zodat dit later doorgezet kan worden naar een Json of database met behulp van PHP of API. 
             // *NOTE:  zodra bovenstaande formDataObj er is. doet hij het niet.. komt niets in het console zelfs geen foutmelding

    };



    // EVENT
    gegevensSubmit.addEventListener('click', function(e){
        console.log("submit gedrukt");
    e.preventDefault();
    

   


    }); // einde gegevensSubmit


}); // einde document ready check