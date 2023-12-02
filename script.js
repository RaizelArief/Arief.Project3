let konfirmasi = confirm("Mau main tebak angka?")
konfirmasi = confirm("Sebelum Itu saya akan kasih tahu bahwa tebak angka dari 1-15")

while(konfirmasi == true) {
  let angkaRandom = Math.floor(Math.random () * 15 + 1);
  console.log(angkaRandom);
  let masukkanUser = parseInt(prompt("Masukkan Angka Tebakan !!"));
  if(angkaRandom == masukkanUser) {
    //  alert("Benar");
     konfirmasi = confirm("Selamat Anda Benar.")
     konfirmasi = confirm("Apakah ingin Bermain lagi?")
   }
  else if (masukkanUser < angkaRandom) {
      alert("Tebakan anda terlalu rendah")
      konfirmasi = confirm("Mau lanjut bermain?")
    }
  else if (masukkanUser > angkaRandom) {
      alert("Tebakan anda terlalu tinggi")
      konfirmasi = confirm("Mau lanjut bermain?")
   } 
   else{
     konfirmasi = false;
   }
    // console.log(konfirmasi);
    // console.log(masukkanUser);

   while(masukkanUser != angkaRandom && konfirmasi == true) {
     masukkanUser = parseInt(prompt("Masukkan Angka Tebakan !!"));
     if(angkaRandom == masukkanUser) {
        // alert("Benar");
        konfirmasi = confirm("Selamat Anda Benar.")
        konfirmasi = confirm("Apakah ingin Bermain lagi?")
      }
     else if (masukkanUser < angkaRandom) {
         alert("Tebakan anda terlalu rendah")
         konfirmasi = confirm("Mau lanjut bermain?")
         konfirmasi = confirm("Semangat pasti bisa nebak")
      }
    else if (masukkanUser > angkaRandom) {
         alert("Tebakan anda terlalu tinggi")
         konfirmasi = confirm("Mau lanjut bermain?")
         konfirmasi = confirm("Jangan terlalu tinggi angka nya kecilkan lagi yaaa..")
     }
     else{
        konfirmasi = false;
       }
    //  konfirmasi = confirm("Mau Lanjut?")
    } 
}

