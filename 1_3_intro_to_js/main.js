let count = 0;  

d3.select('#clickButton').on('click', function() {
    count++;  // increments the counter.
    d3.select('#counterDisplay').text(count);  //  update  display.
});


