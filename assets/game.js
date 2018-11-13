$(document).ready(function(){
    var targetNum = '';
    var wins = 0;
    var losses = 0;
    var total = 0;
    var counter = 0;
    var crystalValues = {};
    totalReset();
    updateHtml();
    $(".crystalBtn").click(clickCrystal);
});

function randomTargetNum() {
    targetNum = Math.floor(Math.random() * 102) + 19;
}

function randCrystal(){
    crystalValues = {
        "red": Math.floor(Math.random()*12) + 1,
        "blue": Math.floor(Math.random()*12) + 1,
        "green": Math.floor(Math.random()*12) + 1,
        "purple": Math.floor(Math.random()*12) + 1
    }
}

function clickCrystal () {
    counter += crystalValues[$(this).attr("id")];    
    if (counter == targetNum) {
        wins++;
        interReset();
    }
    else if (counter > targetNum) {
        losses++;
        interReset();
    };
    updateHtml();
};

function interReset () {
    randomTargetNum ();
    counter = 0;
    randCrystal ();
}

function totalReset () {
    targetNum = '';
    wins = 0;
    losses = 0;
    total = 0;
    counter = 0;
    interReset ();
}

function updateHtml () {
    $("#loss-counting").html(losses);
    $("#win-counting").html(wins);
    $("#currentscore-counting").html(counter);
    $("#rnum").html(targetNum);
}


