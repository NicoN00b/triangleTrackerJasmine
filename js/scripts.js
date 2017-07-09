$(document).ready(function() {

  $("form#triangles").submit(function(event) {
    var side1Input = parseInt($("input#side1").val());
    var side2Input = parseInt($("input#side2").val());
    var side3Input = parseInt($("input#side3").val());

    if ((side1Input + side2Input <= side3Input) || (side3Input + side2Input <= side1Input) || (side1Input + side3Input <= side2Input)) {
      $(".result").text("Not a triangle!");
      $("#result").fadeIn();
    } else if (side1Input === side2Input && side1Input === side3Input) {
      $(".result").text("Equilateral");
      $("#result").fadeIn();
    } else if ((side1Input === side2Input) || (side1Input === side3Input) || (side3Input === side2Input)) {
      $(".result").text("Isoseles");
      $("#result").fadeIn();
    } else if (side1Input != side2Input && side1Input != side3Input && side2Input != side3Input) {
      $(".result").text("Scalene");
      $("#result").fadeIn();
    }
    event.preventDefault();
  });
});
