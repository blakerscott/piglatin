describe('piglatin', function() {
  it("will add 'ay' to the end if the word starts with a vowel", function() {
    expect(piglatin("igloo")).to.equal("iglooay");
  });

  it("will move all of the first consecutive consonants to the end and add 'ay' ", function() {
    expect(piglatin("change")).to.equal("angechay");
  });

});
