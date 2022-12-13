document.getElementById("judul").innerText="Login Form";
// document.getElementById("judul").innerHTML="Form Login";
// document.getElementsByTagName("h1")[0].innerText="HAIL FUHRER";
// document.getElementsByClassName("title")[0].innerText="Blitzkrieg";
// document.getElementById("Username").value= "daud";
// document.getElementById("Password").value= "123";
// document.getElemetnById("btnlogin").click();

let userlog = "1234";
let passlog = "1234";

function ceklogin(){
    let Usernamex, Passwordx;
    Usernamex = document.getElementById("Username").value;
    Passwordx = document.getElementById("Password").value;
    alert("proses cek login"+ Usernamex + Passwordx );
    console.log("Test" + userlog + passlog);
    pesan("Login Berhasil ", Usernamex);
}
function pesan(msg, user){
    alert(msg + user);
}

function clear(){
    document.getElementById("Username").value= "";
    document.getElementById("Password").value= "";
}