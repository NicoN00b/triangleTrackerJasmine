$(document).ready(function() {

  $("form#triangles").submit(function(event) {
    var side1Input = parseInt($("input#side1").val());
    var side2Input = parseInt($("input#side2").val());
    var side3Input = parseInt($("input#side3").val());

    if ((side1Input + side2Input <= side3Input) || (side3Input + side2Input <= side1Input) || (side1Input + side3Input <= side2Input)) {
      // return not a triangle message
    } else if (side1Input === side2Input && side1Input === side3Input) {
      // return equilateral
    } else if ((side1Input === side2Input) || (side1Input === side3Input) || (side3Input === side2Input)) {
      // return isoseles
    } else if (side1Input != side2Input && side1Input != side3Input && side2Input != side3Input) {
      // return scalene
    }


  });
});
