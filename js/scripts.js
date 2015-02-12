var orderify = function(words) {
  var orderedWords = [];

  var splitWords = words.split(" ");
  splitWords.sort();

  var wordsWithCount = [];
  var previousWord = "";
  splitWords.forEach(function(word) {
    if (word !== previousWord) { // if new word
      previousWord = word;
      wordsWithCount.push([1, word]);
    } else { // if is another occurence of previous word
      var indexOfLastElement = wordsWithCount.length - 1;
      wordsWithCount[indexOfLastElement][0]++;
    }
  });

  // each element in wordsWithCount IS an array [count, word]

  // array now looks like this:
  // [ [1, apple] [2, candy] [1, donut] ]

  wordsWithCount.sort().reverse();

  // array now looks like this:
  // [ [2, candy] [1, donut] [1, apple] ]

  wordsWithCount.forEach(function(wordAndCount) {
    orderedWords.push(wordAndCount[1]);
  });

  // array now looks like this:
  // ["candy", "donut", "apple"]

  return orderedWords;
};
