var orderify = function(words) {
  var orderedWords = [];
  var wordsWithCount = [];
  var previousWords = [];
  var splitWords = words.split(" ");
  var indexOfWord = 0;

  splitWords.forEach(function(word) {
    if ( previousWords.indexOf(word) === -1 ) { // if new word
      previousWords.push(word);
      wordsWithCount.push([1, word]);
    } else { // if is another occurence of previous word
      wordsWithCount.forEach(function(wordAndCount, index) {
        if (wordAndCount[1] === word) {
          indexOfWord = index;
        }
      });
      wordsWithCount[indexOfWord][0]++;
    }
  });

  // each element in wordsWithCount IS an array [count, word]

  // array now looks like this:
  // [ [1, "apple"], [2, "candy"], [1, "abnut"] ]

  wordsWithCount.sort(function(a, b) {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    // a[0] === b[0]
    return 0;
  });

  // array now looks like this:
  // [ [2, "candy"], [1, "apple"], [1, "abnut"] ]

  wordsWithCount.forEach(function(wordAndCount) {
    orderedWords.push(wordAndCount[1]);
  });

  // array now looks like this:
  // ["candy", "apple", "abnut"]

  return orderedWords;
};
