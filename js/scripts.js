$().ready(function(){
    $("button#start").click(function(event){
        player1 = new Player(false);
        player2 = new Player(false);
        $(".game-mode").show();
        $(".start-menu").hide();

        var player1Name = $(".player1Name").val();
        $("#player1Name").text(player1Name);

        var player2Name = $(".player2Name").val();
        $("#player2Name").text(player2Name);

        player1.playerName=player1Name;
        player2.playerName=player2Name;
    });
    $("#new-game").click(function(event){
        $(".game-mode").hide();
        clearValues();
        player1.newGame();
        player2.newGame();
        $("#round-total-1").empty();
        $("#total-score-1").empty();
        $("#die-roll-1").empty();
        $("#round-total-2").empty();
        $("#total-score-2").empty();
        $("#die-roll-2").empty();

        $(".start-menu").show();
    })
});

var player1="";
var player2="";
var throwdice = function() {
    return Math.floor(6*Math.random())+1;
}

function Player(turn){
    this.roll=0;
    this.tempscore=0;
    this.totalscore=0;
    this.turn= turn;
    this.playerName;
}