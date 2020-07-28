var a=0;

function henkou(){
    if(a==0){
        a=1;
    $('#henkou').text("yosiko.eits.jp");
    }else{
        a=0;
    $('#henkou').text("yamadatarou.eits.jp");
    }
}

function sousin(){
    if(a==1){
        location.href='./mail_ok.html';
    }else{
        location.href='./mail_no.html';
    }
}