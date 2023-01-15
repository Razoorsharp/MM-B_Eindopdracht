// *NOTE: hint om te gebruiken
// var inputEmail= document.getElementById("email");
// localStorage.setItem("email", inputEmail.value); 

var d = document;
$(document).ready(function(){


    var gegevensSubmit = d.getElementById("gegevensSubmit")
    var inputNaam= d.getElementById("naam");
    // var form = document.getElementById('persoonlijkeGegevensForm');
    
 
    // };



    // EVENT
    gegevensSubmit.addEventListener('click', function(e){
     
        
   
        const form = document.getElementById('persoonlijkeGegevensForm');

        form.addEventListener('submit', callbackFunctionPG); // draai callback functie als form submit wordt. 
                            
        function callbackFunctionPG(event) {
           
        event.preventDefault(); // prevent default om te zorgen dat het de form data niet direct verdwijnt. 
        const myFormDataPG = new FormData(event.target);


        const formPGDataObj = {};
        //myFormData.forEach((value, key) => (formDataObj[key] = value)); // alle values sorteren. 
        myFormDataPG.forEach((value, key) => {
            console.log(value, key);
            localStorage.setItem(key, value);// sla de gegevens op in local storage (bij gebrek aan SQL en PHP voor DB, wat er mee te doen verder onduidelijk. )
        });
        

    };
   


    }); // einde gegevensSubmit
    gegevensSubmit.addEventListener('click', function(e){
     
        
        // *NOTE: iets werkt niet in dit stok van de local storage te setten. geen tijd meer helaas om te ondekken wat voor deadline
        const formWW = document.getElementById('inlogForm');

        formWW.addEventListener('submit', callbackFunctionWW); // draai callback functie als form submit wordt. 
                            
        function callbackFunctionWW(event) {
           
        event.preventDefault(); // prevent default om te zorgen dat het de form data niet direct verdwijnt. 
        const myWWFormData = new FormData(event.target);


        const formWWDataObj = {};
        //myFormData.forEach((value, key) => (formDataObj[key] = value)); // alle values sorteren. 
        myWWFormData.forEach((value, key) => {
            console.log(value, key);
            localStorage.setItem(key, value);// sla de gegevens op in local storage (bij gebrek aan SQL en PHP voor DB, wat er mee te doen verder onduidelijk. )
        });
        

    };

});
}); // einde document ready check