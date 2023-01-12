// *NOTE: hint om te gebruiken
// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value); 

var d = document;
$(document).ready(function(){


    var gegevensSubmit = d.getElementById("gegevensSubmit")
    var inputNaam= d.getElementById("naam");
    // var form = document.getElementById('persoonlijkeGegevensForm');
    console.log("geladen");
 
    // };



    // EVENT
    gegevensSubmit.addEventListener('click', function(e){
        console.log("submit gedrukt");
        
   
        const form = document.getElementById('persoonlijkeGegevensForm');

        form.addEventListener('submit', callbackFunction); // draai callback functie als form submit wordt. 
                            
        function callbackFunction(event) {
            console.log("draait callback")
        event.preventDefault(); // prevent default om te zorgen dat het de form data niet direct verdwijnt. 
        const myFormData = new FormData(event.target);


        const formDataObj = {};
        //myFormData.forEach((value, key) => (formDataObj[key] = value)); // alle values sorteren. 
        myFormData.forEach((value, key) => {
            console.log(value, key);
            localStorage.setItem(key, value);
        });
        console.log(formDataObj); // weergeven van de value en keys in een object zodat dit later doorgezet kan worden naar een Json of database met behulp van PHP of API. 

    };
   


    }); // einde gegevensSubmit


}); // einde document ready check