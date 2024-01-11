let userClickedPattern = [];
let gamePattern = [];
let buttonColours  = ["red", "blue", "green", "yellow"]
let level  = 0 ;
let started = false ;


$(".btn").click(function(){
    var userChosenColour  = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

$(document).keypress(function () { 
    if(started === false){
        started = true ;
        nextSequence();
    }
});


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
}


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);$("h1").html("Level  "+ level);
    var randomNumber  = Math.floor(Math.random()* 4) ;
    var randomChosenColour  = buttonColours[randomNumber]; 
    
    gamePattern.push(randomChosenColour);
    
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    level++;
    
}


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
function animatePress(currentColour){
    $("#" + currentColour).addClass("presssed");

    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

