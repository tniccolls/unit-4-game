var targetNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var points = 0;
wins = 0;
losses = 0;

function startGame() {
    points=0;
    $("#pointSum").text(points);
    targetNumber = Math.floor(Math.random()*101+19);
    // console.log(targetNumber);
    $("#targetScore").text(targetNumber);

    crystal1 = Math.floor(Math.random()*12+1);
    // console.log(crystal1);
    crystal2 = Math.floor(Math.random()*12+1);
    crystal3 = Math.floor(Math.random()*12+1);
    crystal4 = Math.floor(Math.random()*12+1);
}

$("#c1").on("click", function() {
    points = points + crystal1;
    $("#pointSum").text(points);
    if(points>targetNumber) {
        losses++;
        $("#lossCount").text(losses);
        $("#victory").text("You Lose!");
        startGame();
    }else if(points === targetNumber) {
        wins++;
        $("#winCount").text(wins);
        $("#victory").text("You Win!");
        startGame();
    }

})

$("#c2").on("click", function() {
    points = points + crystal2;
    $("#pointSum").text(points);
    if(points>targetNumber) {
        losses++;
        $("#lossCount").text(losses);
        $("#victory").text("You Lose!");
        startGame();
    }else if(points === targetNumber) {
        wins++;
        $("#winCount").text(wins);
        $("#victory").text("You Win!");
        startGame();
    }

})

$("#c3").on("click", function() {
    points = points + crystal3;
    $("#pointSum").text(points);
    if(points>targetNumber) {
        losses++;
        $("#lossCount").text(losses);
        $("#victory").text("You Lose!");
        startGame();
    }else if(points === targetNumber) {
        wins++;
        $("#winCount").text(wins);
        $("#victory").text("You Win!");
        startGame();
    }


})

$("#c4").on("click", function() {
    points = points + crystal4;
    $("#pointSum").text(points);
    if(points>targetNumber) {
        losses++;
        $("#lossCount").text(losses);
        $("#victory").text("You Lose!");
        startGame();
    }else if(points === targetNumber) {
        wins++;
        $("#winCount").text(wins);
        $("#victory").text("You Win!");
        startGame();
    }

})

startGame();


