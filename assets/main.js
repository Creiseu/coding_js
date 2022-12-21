// let angka=5;
// do{
//     console.log(angka);
//     angka++;
//     sampai= angka*5
// }while(angka>=30);


// // for(let angka=1; angka<=10; angka++){
// //     if(angka %2==0){

// //     }
// //     document.write("Bilangan Genap :"+angka);
// // }


let menu=["Kalkulator", "Pertandingan Bola", "Pendaftaran", "Setting"];
let jumlah=menu.length;
for(let i=0; i<jumlah; i++){
    console.log(menu[i]);
}

function Kalkulator(){
    let nilai1,nilai2,operator,hasilAkhir;
    nilai1 = document.getElementById("nilai1").value;
    nilai2 = document.getElementById("nilai2").value;
    operator = document.getElementById("operator").value;
    if(nilai1==""|| nilai1==null){
        alert("Isi Nilai 1 Terlebih Dahulu");
    }else if(nilai2==null|| nilai2==null){
        alert("Isi Nilai 2 Terlebih Dahulu");
    }else if(operator==null|| operator==null){
        alert("Pilih Operator");
    }else{
        hasilAkhir = hasil(nilai1,nilai2,operator);
        document.getElementById("hasilkalkulator").innerHTML="Hasil Perhitungan : " + hasilAkhir;
        document.getElementById("hasilkalkulator").style.display="inline";
        document.getElementById("btnbtn").innerHTML='<i class="spinner-border text-danger"></i> Proses '
    }
}
function hilangkan(){
    document.getElementById("hasilkalkulator").style.display="none";
    document.getElementById("btnbtn").innerHTML='<i class="bi bi-save"></i>';
}


function hasil(nil1, nil2,oper){
    let hasil_hitung=0
    if(oper=="+"){
        hasil_hitung = parseInt(nil1) + parseInt(nil2);
    }else if(oper=="-"){
        hasil_hitung = nil1 - nil2;
    }else if(oper=="/"){
        hasil_hitung = nil1 / nil2;
    }else if(oper=="*"){
        hasil_hitung = nil1 * nil2;
    }
    return hasil_hitung;
}


// let nilai;
// nilai=80;
// if(nilai>=85){
//     document.write("Nilai dina "+ nilai+", dan grade A" );
// }
// else if(nilai >=75){
//     document.write("Nilai dina "+nilai+", dan grade X" );
// }
// else if(nilai >=60){
//     document.write("Nilai dina "+nilai+", dan grade C" );
// }
// else{
//     document.write("Nilai dina "+nilai+", dan grade E" );
// }

// var i;
// for (i=1; i<=100 ;i++) {
// if(i%3==0)
// document.write("angka = " + i + "<br>");
// }