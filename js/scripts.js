var isatriangle = function(side1, side2, side3) {
  if (((side1 + side3) > side2) && ((side1 + side2) > side3) && ((side2 + side3) > side1)) {
    return true;
  }
}
