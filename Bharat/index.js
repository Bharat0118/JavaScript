function validateuser()
{
    let user = document.getElementById("username").value;
    let pass = document.getElementById("pwd").value;

    if(user==""){
        alert("Fields can't be empty");
        return false;

    }   
    if(pass==""){
        alert("Fields can,t be empty"); 
        return false;

    }   
    if(user=="admin" && pass=="admin")
    {
        window.location.assign("list.html");
    }
    else
    {
        alert( "validation failed" );

    }
}

