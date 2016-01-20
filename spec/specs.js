describe('piglatin', function() {
  it("will add 'ay' to the end if the word starts with a vowel", function() {
    expect(piglatin("ugly")).to.equal("uglyay");
  });


});
