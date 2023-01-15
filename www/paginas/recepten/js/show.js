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
            
            for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('='); // splitsen na de =
                if (urlparam[0] == param) { // ingegeven parameter moet gelijk zijn
                
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
   
            $.each(data, function(key, value){
                if(value.id == receptId){
                    document.title = value.title;

                      // plaats correct background image in de hero. 
                      var backgroundimageUrl = "../../" + value.image;
                
                    $("#receptHeroBackground").css("background-image", "url(" + backgroundimageUrl + ")"); // voeg juiste image in de hero toe
                    $(".receptHero").html('<h1 class="receptHeroTitle">'+ value.title +'</h1>') // voeg juiste tietel in de hero toe. 
                    var v = value; // verkort van telkens value schrijven
                    var receptMarkup = ''; // begin met maken van markup voor recept data

                    receptMarkup += '<div class="contentSpacer"><div class="receptHeader"> <ul>'; // maak dedivs aan als  de spacer heading en ingredienten titel, opent ook UL
                    receptMarkup += '<li class="receptHoofdIngr"><img src="../../images/icons/32px/'+ value.hoofdIngredient +'.png"></li>'; // vul hoofdingredient icon in
                    receptMarkup += ' <li class="receptGerei"><img src="../../images/icons/32px/'+ value.benodigdheden +'.png"></li>'; // vul benodigheden icon in
                    receptMarkup += '<li class="receptTime receptTime'+ value.tijd +'"><img src="../../images/icons/32px/163.png"></li>'; // zorg dat tijd en tijdicon goed staan
                    receptMarkup += '</ul></div>';// sluit bovendte deel van de heading
                    receptMarkup += '<div class="receptList"><h2>Ingredienten</h2>'// maak div met class voor ingredientenlijst
;                   receptMarkup += '<ul>'; // open UL voor ingredientenlijst
                        $.each(value.ingredienten, function(id, ingredient){ // ga door de lijst van ingredienten en zet daar voor een LI neer in de UL
                        
                            receptMarkup += '<li>'+ ingredient +'</li>';
                        });
                    receptMarkup += '</ul></div>';// sluit UL en bijhorende DIV
                    receptMarkup += '<div class="receptTekst"><h2>Bereidingswijze</h2>'; // open receptTekst div met titel bereidingswijze
                    receptMarkup += '<p>'+ value.tekstComplete +'</p>' // voeg complete tekst toe. 
                    receptMarkup += '</div></div></div>'; // sluit alle divs

                    $('#receptData').append(receptMarkup);

                }
                
        });
       
        // $('.boekenCardHolder').append(boekenMarkup);
    });
    

});