var d = document;





var naam = d.getElementById("naam");
var email = d.getElementById("email");
var bericht = d.getElementById("bericht");
var contactSubmit = d.getElementById("contactSubmit")



function valideerForm (welkveld){
    var userInput = welkveld.value;
    var valid = false;
   
    if (welkveld.id == naam){
        var pattern = /^[a-z0-9\s]{4,50}$/i;
        valid = pattern.test(naam.value); // test waarde van het veld, dit is standaard functie van Js. 
        console.log("ik check naam");
    } else if (welkveld.id == email){
        var pattern = /^[a-z0-9-_]{2,50}@[a-z]{2,50}.[a-z]{2,50}$/i;
        valid = pattern.test(email.value); // test waarde van het veld, dit is standaard functie van Js. 
        console.log("ik ben email");
        
    }
    createFeedback(welkveld, valid);

    return valid;
}

function createFeedback(welkVeld, status, melding = 'Controleer door veld'){
    if(status){
        welkVeld.style.backgroundColor = 'rgba(0,255,0,0.2)';
        welkVeld.style.borderColor = 'rgb(0,255,0)';
      
    }else{
        welkVeld.style.backgroundColor = 'rgba(255,0,0,0.2)';
        welkVeld.style.borderColor = 'rgb(255,0,0)';
        
        }
}


// EVENT
contactSubmit.addEventListener('click', function(e){
    var naamCorrect = valideerForm(naam);
    var naamCorrect = valideerForm(email);
    e.preventDefault();
});

  

   
