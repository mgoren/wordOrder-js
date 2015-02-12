describe('orderify', function() {

  it("returns word in array", function() {
    expect(orderify("coffee")).to.eql(["coffee"]);
  });

  it("returns a phrase in an array in original order", function() {
    expect(orderify("coffee now plz")).to.eql(["coffee", "now", "plz"]);
  });

  it("returns an array with words arranged by order of frequency and appearance", function() {
    expect(orderify("boats full of candy apples candy")).to.eql(["candy", "boats", "full", "of", "apples"]);
  });

});
