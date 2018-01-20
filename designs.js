function makeGrid() {
  var rows = $("#input_height").val();
  var cols = $("#input_width").val();
  var table = $("#pixel_canvas");
  table.children().remove();

  //Creating the grid
  //Creating the rows
  for (var i = 0; i < rows; i++) {
    table.append("<tr></tr>");
    //Creating the columns
    for (var j = 0; j < cols; j++) {
      table.children().last().append("<td></td>");
    }
  }

  //Listening for cell clicks
  table.on("click", "td", function() {
    //Get color from color picker
    var color = $("input[type='color']").val();
    //Apply color to cell
    $(this).attr("bgcolor", color);
  });
}

$("input[type='submit']").click(function(e) {
  e.preventDefault();
  makeGrid();
});
