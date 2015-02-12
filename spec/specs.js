describe('orderify', function() {

  it("returns word in array", function() {
    expect(orderify("coffee")).to.eql(["coffee"]);
  });

  it("returns a phrase in an array", function() {
    expect(orderify("coffee now plz")).to.eql(["plz", "now", "coffee"]);
  });

  it("returns an array in reverse sorted order", function() {
    expect(orderify("boats full of candy apples")).to.eql(["of", "full", "candy", "boats", "apples"]);
  });

  it("returns an array with words arranged by order of frequency", function() {
    expect(orderify("candy boats full of candy apples")).to.eql(["candy", "of", "full", "boats", "apples"]);
  });


});
