const tombol = document.getElementById("login");
tombol.onclick = masuk

function masuk(e){
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const pass = document.getElementById("pass").value;
    console.log(nama);
    if(nama == "aidanrjnnh" && pass== "123"){
        alert("selamat datang")
        window.location.href = "beranda.html"
    }else{
        alert("gagal")
    }
}