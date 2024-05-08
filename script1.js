let count = 0;  

d3.select('#clickButton').on('click', function() {
    count++;  
    d3.select('#counterDisplay').text(count); 
});

