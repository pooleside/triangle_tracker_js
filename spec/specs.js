describe('isatriangle', function() {
  it("is true if one side is equal to or less than the sum of the remaining two sides", function() {
    expect(isatriangle(6,4,4)).to.equal(true);
  });
});

describe('triangletype', function() {
  it("all sides of triangle are equal in length, it is equilateral", function() {
    expect(triangletype(8,8,8)).to.equal('equilateral');
  });

  it("two sides of triangle are equal in length, it is isosceles", function() {
    expect(triangletype(8,8,6)).to.equal('isosceles');
  });

  it("no sides of triangle are equal in length, it is scalene", function() {
    expect(triangletype(7,8,6)).to.equal('scalene');
  });

});
