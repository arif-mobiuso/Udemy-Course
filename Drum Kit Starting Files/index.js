const totalButtons = document.querySelectorAll(".drum").length;

console.log(totalButtons);

for (var i = 0; i < totalButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
      makeSound( this.innerHTML);
      buttonAnimation(this.innerHTML);
      
    });
    
}

document.addEventListener("keypress" , function(event){
  makeSound(event.key) ;
  buttonAnimation(event.key);

})


function makeSound(key){
    
    switch (key) {
        case 'w':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case 'k':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(buttonInnerHTML + "is not valid");
            break;
    }
  
};


function buttonAnimation(currentKey){
        var activeButtton = document.querySelector("."+currentKey) ;
        activeButtton.classList.add("pressed");

        setTimeout(function(){
            activeButtton.classList.remove("pressed") ;
        }, 100);
};
