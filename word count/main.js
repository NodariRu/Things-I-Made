const wordsTextArea = document.querySelector(".word");
const countBtn = document.querySelector(".count-btn");
const wordCount = document.querySelector("span");

const countWords = () => {
  let words = wordsTextArea.value;
  words = words.trim();
  let splitWords = words.split(" ");
  let numberOfWords = splitWords.length;

  wordCount.innerHTML = numberOfWords;
};
countBtn.addEventListener("click", countWords);
