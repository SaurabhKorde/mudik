function longWord(str) {
  let strSplit = str.split(" ");

  let longestWord = strSplit[0];
  for (let i = 0; i < strSplit.length; i++) {
    if (longestWord.length < strSplit[i].length) {
      longestWord = strSplit[i];
    }
  }
  console.log(`Longest Word is:${longestWord}`);
}
longWord("Hii,I am Saurabh");
