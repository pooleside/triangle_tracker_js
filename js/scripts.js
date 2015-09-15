var isatriangle = function(side1, side2, side3) {
  if (((side1 + side3) > side2) && ((side1 + side2) > side3) && ((side2 + side3) > side1)) {
    return true;
  }
}
var triangletype = function(side1, side2, side3) {
  if ((side1 === side2) && (side1 === side3) && (side2 === side3)) {
    return "equilateral";
  } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return "isosceles"
  } else  {
    return "scalene"
  }
}

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var side1= parseInt($("input#side1").val());
    var side2= parseInt($("input#side2").val());
    var side3= parseInt($("input#side3").val());
    var result1 = isatriangle(side1, side2, side3);
    var result2 = triangletype(side1, side2, side3);




    if(!result1) {
      $(".not").text("do not") &&  $("#result1").show() && $("#result2").hide();
    }
    else {
      $(".not").text("") && $(".type").text(result2) && $("#result1").show()  && $("#result2").show();
    }
    event.preventDefault();
  });
});
