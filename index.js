

var drumNumber = document.querySelectorAll(".drum").length;

for(var i = i = 0; i<drumNumber; i++) {
    
        
    

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var bTH = this.innerHTML;

        keySound(buttonInnerHTML);

        

});

function keySound(key){

    switch (key) {
        case"w":
    
        var tom1 = new Audio('tom-1.mp3');
              tom1.play();
    
        break;
    
        case"a":
    
        var tom2 = new Audio('tom-2.mp3');
        tom2.play();
    
        break;
    
        case"s":
        var tom3 = new Audio('tom-3.mp3');
        tom3.play();
        break;
    
        case"d":
        var tom4 = new Audio('tom-4.mp3');
        tom4.play();
    
        break;
    
        case"j":
        var snare = new Audio('snare.mp3');
        snare.play();
    
        break;
    
        case"k":
        var kickBass = new Audio('kick-bass.mp3');
        kickBass.play();
    
        break;
    
        case"l":
        var crash = new Audio('crash.mp3');
        crash.play();
    
        break;
        defult;
    }}};
    
    document.addEventListener("keypress", function (event) {
         keySound(event.key);

});