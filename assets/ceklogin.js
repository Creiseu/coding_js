document.getElementById("judul").innerText="Login Form";
// document.getElementById("judul").innerHTML="Form Login";
// document.getElementsByTagName("h1")[0].innerText="HAIL FUHRER";
// document.getElementsByClassName("title")[0].innerText="Blitzkrieg";
// document.getElementById("Username").value= "daud";
// document.getElementById("Password").value= "123";
// document.getElemetnById("btnlogin").click();

const userlog = "1234";
const passlog = "1234";

function ceklogin(){
    let Usernamex, Passwordx;
    Usernamex = document.getElementById("Username").value;
    Passwordx = document.getElementById("Password").value;
    if(Usernamex==userlog){
        alert("Username anda benar");
    }
    else{
        alert("Username anda salah!");
        document.getElementById("Username").value= "";
    }
    if(Passwordx==passlog){
        alert(" Password anda Benar");
    }
    else{
        alert("Password anda salah!");
        document.getElementById("Password").value= "";
    }
}


// function pesan(msg, user){
//     alert(msg + user);
// }

// function clear(){
//     document.getElementById("Username").value= "";
//     document.getElementById("Password").value= "";
// }


