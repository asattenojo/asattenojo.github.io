var id=setInterval(function(){
    var count=window.localStorage.getItem("time");
    count--;
    window.localStorage.setItem("time",count);
    var min=Math.floor(count/60);
    var sec=count%60;
    
    document.getElementById("time").innerHTML="残り時間："+min+"分"+sec+"秒";
    if(count<=0){
        location.href='./zannen.html';
    }
},1000);