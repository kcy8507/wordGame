let word = "채연";
while (true) {
  let newWord = prompt("word");
  if (word[word.length - 1] === newWord[0]) {
    word = newWord;
  } else {
    alert("멍청아");
    break;
  }
}
