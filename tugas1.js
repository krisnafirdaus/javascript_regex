function myFunction1() {
  let input = prompt("Masukkan Kalimat");

  let hurufBesar = /[A-Z]/;

  if (hurufBesar.test(input.charAt(0))) {
    alert("Huruf pertama adalah huruf besar");
  } else {
    alert("Huruf pertama adalah huruf kecil");
  }
}
