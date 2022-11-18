window.addEventListener('load', function(){
var d = document;
if(!d.getElementById("homeHeroBackImage"))return false;
    
var image = d.getElementById("homeHeroBackImage");
var leftRightField = d.getElementById("homeHeroMid") // eventlistener needed to check oif the left or right button was clicked. 
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
console.log(e.target.id)
    if( e.target.id == "homePaginationLeft"){
        console.log("links")
        // check if indicator is at minimum
        if(indicator == 1){     
            console.log("gaat niet");
            return false;
        }else{
            console.log("gaat wel")
            indicator--;
            console.log(indicator);
            switchImg(indicator);
        }
        // check if indicator is correct and at maximum
    }else if(e.target.id == "homePaginationRight"){
        console.log("rechts");
        if(indicator ==3){
            console.log(indicator);
            console.log("gaat niet rechts")
            return false;
        }else if(indicator =>1){
            console.log("rechts gaat")
            indicator++;
            console.log(indicator);
            switchImg(indicator);

        }
    }
});

            // ----------------------------------
            //         Functions
            // -----------------------------------

    function switchImg(i){
        $.getJSON("./json/heropages.json", function(data){
            $.each(data, function(key, value){
                if(i == value.id){
                    console.log("yes id matched up "+ i);
                }
                else{
                    return false;
                }
            });
        });

    }
}); // end of script. 