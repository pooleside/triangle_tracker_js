describe('isatriangle', function() {
  it("is true if one side is equal to or less than the sum of the remaining two sides", function() {
    expect(isatriangle(6,4,4)).to.equal(true);
  });
});
