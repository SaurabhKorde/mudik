function palindromeString(str) {
  let = str.length;
  for (let i = 0; i < str.len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      document.write("This String is not Palindrom.");
    }
  }
  document.write("This String is Palindrom.");
}
const string = prompt("Enter String here");

const value = palindromeString(string);
