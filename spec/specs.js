describe('piglatin', function() {
  it("will add 'ay' to the end if the word starts with a vowel", function() {
    expect(piglatin("ugly")).to.equal("uglyay");
  });

  it("will test to see if the first vowel is a u with a q in front of, take the U and everything proceeding it and concatinate it to the end of the string", function() {
    expect(piglatin("squeal")).to.equal("ealsquay");
  });

  it("will move all of the first consecutive consonants to the end and add 'ay' for words that start with one or more consonants, including y", function() {
    expect(piglatin("stable")).to.equal("ablestay");
  });

});
