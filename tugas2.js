function myFunction2() {
  let input = parseInt(prompt("Masukkan Nomor Telepon (10 - 12 digit)"));

  let numberCheck = /^.{10,12}$/;

  if (isNaN(input)) {
    alert("Masukkan Angka");
  } else {
    alert(numberCheck.test(input));
  }
}
