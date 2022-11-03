// code for the main page 
d = Document;

$(document).ready(function(){

$(".no-JS").remove();   // removes warning div for the site if JS is disabled. 



// boeken card creator. 
$.getJSON("./json/boeken.json", function(data){
    var boekenMarkup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        boekenMarkup += '<div id="boekenCardHolder"><div class="card">';        
        boekenMarkup += '<img src="'+ value.image +'" alt="">'; 
        boekenMarkup += '<p class="boekPrijs">'+ value.prijs +'</p>';
        boekenMarkup += '<div class="cardContent">';		
        boekenMarkup += '<p>'+ value.description +'</p><br><hr>';
        boekenMarkup += '<h2>'+ value.title +'</h2>';
        boekenMarkup += '<button>'+ value.buttonName +'</button>';
        boekenMarkup += '</div></div></div>';    
    });
    $('.homeBoeken').append(boekenMarkup);
});

// Artikellen Card ceator
$.getJSON("./json/artikellen.json", function(data){
    var artikellenMarkup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        artikellenMarkup += '<div class="artikelCard"><div class="cardSpacer"><div class="cardContent">';        
        artikellenMarkup += '<h2>'+ value.title +'</h2>';
        artikellenMarkup += '<p>'+ value.tekstPreview +'</p>';		
        artikellenMarkup += '<img src="'+ value.image +'" alt="'+ value.title +'">';
        artikellenMarkup += '<button>Volledig Artikel</button>';
        artikellenMarkup += '</div></div></div>';    
    });
    $('.artikelCardHolder').append(artikellenMarkup);
});

// recepten Card ceator @note: nog afmaken
$.getJSON("./json/recepten.json", function(data){
    var receptenMarkup = '';
    console.log("gedraaid?");
    $.each(data, function(key, value){
        console.log(value);
        receptenMarkup += ' <div class="receptCard"><div class="cardSpacer"><div class="receptHead">';        
        receptenMarkup += '<h2>'+ value.title +'</h2>';
        receptenMarkup += '<ul><li id="receptHoofdIngr">.</li><li id="receptGerei">.</li><li id="receptTijd">.</li></ul>'; // Maak icons aan en run daarna en functie
        // icons function
        receptIconPlacement();
        receptenMarkup += '</div>';
        receptenMarkup += '<div class="receptText">';
        receptenMarkup += '<ul>';
            $.each(value.ingredienten, function(id, ingredient){
                console.log(ingredient)
                receptenMarkup += '<li>'+ ingredient+ '</li>';
            });
        receptenMarkup += '</ul>';	
        receptenMarkup += '<img src="'+ value.image +'" alt="'+ value.title +'">';
        receptenMarkup += ' <button>'+ value.title +'</button>';
        receptenMarkup += '</div></div></div></div>';    
    });
    $('.receptCardHolder').append(receptenMarkup);
});

 function receptIconPlacement(){
     
     $.getJSON("./json/recepten.json", function(data){
         // data[1].hoofdIngredient
         

         if(data[1].hoofdIngredient == "gevolgelte"){
            $( "#receptHoofdIngr" ).html('<img src="images/icons/32px/61.png"');
         }
     });
    //  if (this.value.ingredienten)
 }

}); // end/closing of script
 

