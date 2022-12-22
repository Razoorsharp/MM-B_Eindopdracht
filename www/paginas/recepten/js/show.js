var d = document;

$(document).ready(function () {

    
    var tijd;

    // -----------------------------
    // Determine receptId
    // ------------------------------
    var receptId = GetParameterValues('receptId'); //zet receptId door functie te draaien
    // 
        function GetParameterValues(param) { // functie om te bepalen welk ID er in de URL meegegeven wordt
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); // splits na vraagteken
            console.log(url);
            for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('='); // splitsen na de =
                if (urlparam[0] == param) { // ingegeven parameter moet gelijk zijn
                console.log(urlparam[0]); // kijken wat eerste deel is 
                console.log(urlparam[1]); // kijken wat het 2e deel is en direct de ID
                return urlparam[1]; // return de ID naar var receptId
                
                }
            }
        }
       
        
        /*------------------------------ 
            Json data collecton
        --------------------------------*/
        $.getJSON("../../json/recepten.json",{
           // zoals aangegeven door docent, is dit het ophalen van de Json. 
           
            }).done(function(data){
                // de rest in de done gedaan zodat hij niet meer streamed begreep ik van Harald, of verkeerd begrepen. 
            console.log(data);
            $.each(data, function(key, value){
                if(value.id == receptId){
                    console.log("ik ben recept "+ value.title);
                    console.log(value);
                    var v = value; // verkort van telkens value schrijven
                    

                }
           
        });
  
        // $('.boekenCardHolder').append(boekenMarkup);
    });
    

});