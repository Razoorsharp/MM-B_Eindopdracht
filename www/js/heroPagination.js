window.addEventListener('load', function(){
var d = document;
if(!d.getElementById("homeHeroBackImage"))return false;
    
var image = d.getElementById("homeHeroBackImage");
var leftRightField = d.getElementsByClassName("homeHeroMid") // eventlistener needed to check oif the left or right button was clicked. 
var buttonLeft = d.getElementById("homePaginationLeft"); // button for leftscroll
var buttonRight = d.getElementById("homePaginationRight"); //button for right scroll
var heroText = d.getElementsByClassName("heroPaginationIntro"); // general text 
var heroHead = d.getElementsByClassName("heroPaginationHead");// header within text
var heroButton = d.getElementsByClassName("heroPaginaButton");// text within the button for the link. 
var page1 = d.getElementById("homePagination1"); // pagination input radio button
var page2 = d.getElementById("homePagination2"); // pagination input radio button
var page3 = d.getElementById("homePagination3"); // pagination input radio button

var indicator = 1; // indicator needed for image id  and pagination radiobutton to check. 

// __________________________________________________-
//         Events
// ---------------------------------------------------

leftRightField.addEventListener('click', function(e){
console.log('waarom?')
});
}); // end of script. 