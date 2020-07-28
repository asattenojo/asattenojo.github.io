//document.getElementById("today").innerHTML = getNow();
$('#today').text(getNow());

//alert(window.localStorage.getItem("clear")=="ok");


if(window.localStorage.getItem("clear")=="ok"){
    $("#teishutu").attr('href',"./teishutu.html");
}
function getNow() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth()+1; //１を足すこと
    var day = now.getDate();
    //出力用
    var s = year + "年" + mon + "月" + day + "日" ;
    return s;
}