var d = document;





var naam = d.getElementById("naam");
var email = d.getElementById("email");
var bericht = d.getElementById("bericht");
var contactSubmit = d.getElementById("contactSubmit")



function valideerForm (welkVeld){
    var userInput = welkVeld.value;
    var valid = false;
   
    if (welkVeld.id == "naam"){
        var pattern = /^[a-z0-9\s]{4,50}$/i;
        valid = pattern.test(naam.value); // test waarde van het veld, dit is standaard functie van Js. 
        console.log("ik check naam");
    } else if (welkVeld.id == "email"){
        var pattern = /^[a-z0-9-_]{2,50}@[a-z]{2,50}.[a-z]{2,50}$/i;
        valid = pattern.test(email.value); // test waarde van het veld, dit is standaard functie van Js. 
        console.log("ik ben email");
        
    }
    createFeedback(welkVeld, valid);

    return valid;
}

function createFeedback(welkVeld, status){
    let veld = d.getElementById("error"+ welkVeld.name);
    if(status){
        welkVeld.style.backgroundColor = 'rgba(0,255,0,0.2)';
        welkVeld.style.borderColor = 'rgb(0,255,0)';
        veld.style.display = 'none';
      
    }else{
        welkVeld.style.backgroundColor = 'rgba(255,0,0,0.2)';
        welkVeld.style.borderColor = 'rgb(255,0,0)';
       console.log("error"+ welkVeld.name);
        veld.style.display = 'block';        
        }
}


// EVENT
contactSubmit.addEventListener('click', function(e){
    var naamCorrect = valideerForm(naam);
    var mailCorrect = valideerForm(email);
    if(!mailCorrect || !naamCorrect){
        e.preventDefault();
    }else{  // Pas als allebei true zijn, dan werkt de submit pas. 
        // form data conversie als hij submit.  
            const form = document.getElementById('contactForm');

            form.addEventListener('submit', callbackFunction); // draai callback functie als form submit wordt. 
                                
            function callbackFunction(event) {
            event.preventDefault(); // prevent default om te zorgen dat het de form data niet direct verdwijnt. 
            const myFormData = new FormData(event.target);

            const formDataObj = {};
            myFormData.forEach((value, key) => (formDataObj[key] = value)); // alle values sorteren. 
            console.log(formDataObj); // weergeven van de value en keys in een object zodat dit later doorgezet kan worden naar een Json of database met behulp van PHP of API. 
            };
    };
    
    
});



   
