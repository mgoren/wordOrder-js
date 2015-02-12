var orderify = function(words) {
  var orderedWords = [];
  var splitWords = words.split(" ");
  var wordsAry = [];
  var countAry = [];
  var objectAry = [];

  // splitWords: ["apple", "candy", "abnut", "candy"]

  splitWords.forEach(function(word) {
    if ( wordsAry.indexOf(word) === -1 ) { // if new word
      wordsAry.push(word);
      countAry.push(1);
    } else { // if is another occurence of previous word
      countAry[wordsAry.indexOf(word)]++;
    }
  });

  // now we have 2 separate arrays, with matching indexes
  // wordsAry: ["apple", "candy", "abnut"]
  // countAry: [1, 2, 1]

  // now create array of objects by looping thru one array and combining with other
  // note: objectAry (populated below) will be an array of objects
  // note: each object being created below matches one word with its corresponding count
  wordsAry.forEach(function(word, index) {
    objectAry.push({ "word": word, "count": countAry[index] })
  })

  // array of objects now looks like this:
  // [ {1, apple} {2, candy} {1, abnut} ]

  objectAry.sort(function(a, b) {
    return b["count"] - a["count"]; // return positive if b is bigger, negative if a is bigger, 0 if equal
  });

  // array of objects now looks like this:
  // [ {2, candy}, {1, apple}, {1, abnut} ]

  // now make array of words so that we can return just that
  objectAry.forEach(function(wordAndCountObj) {
    orderedWords.push(wordAndCountObj["word"]);
  });

  // array now looks like this:
  // ["candy", "apple", "abnut"]

  return orderedWords;
};

// ------------------------------------------------------------------

$(document).ready(function() {
  $("form#user-phrase").submit(function(event) {
    $("#order-result").text("");
    $("#result").hide();
    $("#error").hide();

    var phrase = $("input#phrase").val();
    var words = orderify(phrase);

    $("#order-result").append("<ul>");
    words.forEach(function(word) {
      $("#order-result").append("<li>" + word + "</li>");
    });
    $("#order-result").append("</ul>");

    if (phrase) {
      $("#result").show();
    } else {
      $("#error").show();
    }

    event.preventDefault();

  });
});
