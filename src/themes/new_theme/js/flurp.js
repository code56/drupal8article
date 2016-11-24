(function ($) {

$(document).ready(function(){
    alert("Hello world added js in the theme, I am the flurp.js script being called!");  //here we can add our JS code
    $('<div id="bar_expression_viewer"></div>').insertAfter("#main-text h2:first");

    var container_div="bar_expression_viewer";
  var data_url = "http://interactive-figures.dev/themes/custom/new_theme/30839.json" ;
  var gene = "Traes_5BS_0AFC3F795.1" ;
  var eb =  new biovisexpressionbar.ExpressionBar({  //creating a class, and its running the expression bar method
    target: container_div,  //these are the values passed to the expression bar method 
    highlight: gene,   //this prepares the expression bar and it passes it to the div 
    data: data_url,
    renderProperty: 'tpm', 
    fontFamily:'Palatino Linotype, Book Antiqua, Palatino, serif', 
    groupBy: ["High level stress-disease", "High level age","High level tissue","High level variety"], 
    barHeight:10,
    width:1000,
    headerOffset:100
  });
});
}(jQuery));


//can insert a drop down. to select the data_url 
// this gets fired when the page loads
// set the logic that when i select from a drop down it generates it. 
// empty the div and then call it again with the values of the drop down. 

