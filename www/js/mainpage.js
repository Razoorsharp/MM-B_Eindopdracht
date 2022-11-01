// code for the main page 
d = Document;

$(document).ready(function(){

$(".no-JS").remove();   // removes warning div for the site if JS is disabled. 

$.getJSON("../json/boeken.json", function(data){
    var boeken_markup = '';
    $.each(data, function(key, value){
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
});
