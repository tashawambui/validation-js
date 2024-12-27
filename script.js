function valid(){
    var text=document.forms["frame"]["res"].value;
    if(text==""){
        alert("name field can not be empty")
        return false;
    }
}