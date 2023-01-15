window.addEventListener('load', function(){
var d = document;
// if(!d.getElementById("homeHeroBackImage"))return false;
    
var leftRightField = d.getElementById("homeHeroMid") // eventlistener needed to check oif the left or right button was clicked. 

var heroText = d.getElementsByClassName("heroPaginationIntro"); // general text 
var heroHead = d.getElementsByClassName("heroPaginationHead");// header within text
var heroButton = d.getElementById("heroPaginaButton");// text within the button for the link. 
var page1 = d.getElementById("homePagination1"); // pagination input radio button
var page2 = d.getElementById("homePagination2"); // pagination input radio button
var page3 = d.getElementById("homePagination3"); // pagination input radio button
var image1 = d.getElementById("homeHeroBackImage1");
var image2 = d.getElementById("homeHeroBackImage2");
var image3 = d.getElementById("homeHeroBackImage3");

var indicator = 1; // indicator needed for image id  and pagination radiobutton to check. 
switchImg(indicator); // initial run for hero
$("#homePagination"+ indicator).prop("checked", true); // initial checkbox checked.  


// __________________________________________________-
//         Events
// ---------------------------------------------------

// leftRightField event checks which button is pressed and sets indicator accordingly for the hero element to show. 
// function switchimage is also run to set the radio buttons which in turn run an animation
leftRightField.addEventListener('click', function(e){
    if( e.target.id == "homePaginationLeft"){
        // check if indicator is at minimum
        if(indicator == 1){     
            return false;
        }else{
            
            indicator--;
            switchImg(indicator);
        }
        // check if indicator is correct and at maximum
    }else if(e.target.id == "homePaginationRight"){
        if(indicator ==3){
            
            return false;
        }else if(indicator =>1){            
            indicator++;           
            switchImg(indicator);
        }
    }
});
    // Radio button triggering the animations, switchimg function
    page1.addEventListener('click', function(e){
        indicator = 1;
        switchImg(indicator)
    });
    page2.addEventListener('click', function(e){
        indicator = 2;
        switchImg(indicator)
    });
    page3.addEventListener('click', function(e){
        indicator = 3;
        switchImg(indicator)
    });
            // ----------------------------------
            //         Functions
            // -----------------------------------
    // switching function switches the pagination which in turn switch to an animaton in earlier eventlisteners
    function switchImg(i){
        $.getJSON("/json/heropages.json", function(data){
            $.each(data, function(key, value){
                if(i == value.id){ // if the buttons were used, checkboxes need to change.                   
                    $("#homePagination"+ i).prop("checked", true); // with the indicator set, the pagination buttons need to be checked.            
                    $(heroText).html(value.intro);
                    $(heroHead).html(value.head);
                    $(heroButton).html(value.buttonText);
                    heroButton.addEventListener("click", function(e){
                        window.open(value.url,"_self");
                    });
                } 
                if(page1.checked){
                    // fun animation for first image
                    CarrouselTo1();
                }else if(page2.checked){
                    // run animation for page 2
                    CarrouselTo2();
                }else if(page3.checked){
                    //run animation for image 3
                    CarrouselTo3();
                }


            });
        });
    }

    function CarrouselTo1(){
        width = screen.width;
        gsap.to(image1, {
            css:{left:"0vw"}
        })
        gsap.to(image2, {
            css:{left:"100vw"}
        })
        gsap.to(image3, {
            css:{left:"200vw"}
        })

        
    };
    function CarrouselTo2(){
        width = screen.width;
        gsap.to(image1, {
            css:{left:"-100vw"}
        })
        gsap.to(image2, {
            css:{left:"0vw"}
        })
        gsap.to(image3, {
            css:{left:"100vw"}
        })
    };
    function CarrouselTo3(){
        width = screen.width;
        gsap.to(image1, {
            css:{left:"-200vw"}
        })
        gsap.to(image2, {
            css:{left:"-100vw"}
        })
        gsap.to(image3, {
            css:{left:"0vw"}
        })
    };
}); // end of script. 