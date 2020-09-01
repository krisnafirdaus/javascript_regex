function myFunction3() {
  let input = prompt("Searching");

  let searching1 = /^Bagaimana cara memulai usaha bisnis/;
  let searching2 = /^Bootcamp impact byte/;
  let searching3 = /^Status covid hari ini/;

  alert("searching 1 " + searching1.test(input));
  alert("searching 2 " + searching2.test(input));
  alert("searching 3 " + searching3.test(input));
}
