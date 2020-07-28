function getTextFile(encd) {
    var myFile = document.getElementById("targetTextFiles").files[0];
    if (myFile.type.indexOf("text") == 0) {
        var reader = new FileReader();
        reader.onload = function(evt){
            var txt = evt.target.result; //ファイル内容を読み出し
            txt = txt.replace(/</g, "&lt;"); //置き換え
            txt = txt.replace(/>/g, "&gt;"); //置き換え
//            alert(txt);
            if(txt=="232jij4j2j4o2"){
                location.href='./clear.html';
                
            }
            else{
                alert("その内容じゃあ，点数は上げられないなあ");
            }
        }
        reader.readAsText(myFile, encd);
    }
}
