var player_hand=["ぐー","ちょき","ぱー"];
var result=["CONTINUE","YOU LOSE","YOU WIN"]
var hand_path=["./image/janken_gu.png","./image/janken_choki.png","./image/janken_pa.png"]


function janken(hand){
    var aite = Math.floor( Math.random()*3);
    var a=hand-aite+3;
    
    document.getElementById("your_hand").src=hand_path[hand];
    document.getElementById("enemy_hand").src=hand_path[aite];
    document.getElementById("result").innerHTML=result[a%3];
}