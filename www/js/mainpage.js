// code for the main page 
d = Document;

$(document).ready(function(){

$(".no-JS").remove();   // removes warning div for the site if JS is disabled. 


// boeken card creator. 
$.getJSON("./json/boeken.json", function(data){
    var boeken_markup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        boeken_markup += '<<div id="boekenCardHolder"><div class="card">';        
        boeken_markup += '<img src="'+ value.image +'" alt="">'; 
        boeken_markup += '<p class="boekPrijs">'+ value.prijs +'</p>';
        boeken_markup += '<div class="cardContent">';		
        boeken_markup += '<p>'+ value.description +'</p><br><hr>';
        boeken_markup += '<h2>'+ value.title +'</h2>';
        boeken_markup += '<button>'+ value.buttonName +'</button>';
        boeken_markup += '</div></div></div>';    
    });
    $('.homeBoeken').append(boeken_markup);
});

// Artikellen Card ceator
$.getJSON("./json/artikellen.json", function(data){
    var artikellen_markup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        artikellen_markup += '<div class="artikelCard"><div class="cardSpacer"><div class="cardContent">';        
        artikellen_markup += '<h2>'+ value.title +'</h2>';
        artikellen_markup += '<p>'+ value.tekstPreview +'</p>';		
        artikellen_markup += '<img src="'+ value.image +'" alt="'+ value.title +'">';
        artikellen_markup += ' <button>Volledig Artikel</button>';
        artikellen_markup += '</div></div></div>';    
    });
    $('.artikelCardHolder').append(artikellen_markup);
});

}); // end/closing of script
 

