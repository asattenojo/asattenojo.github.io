function henkou(){
    if($("#henkou").text()=="student"){
        $("#henkou").text("teacher");
    }else{
        $("#henkou").text("student");
    }
}

function login(){
    if($("#henkou").text()=="student"){
        location.href='./student.html';
    }else{
        location.href='./teacher.html';
    }
}