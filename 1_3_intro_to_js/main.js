let count = 0;  // Initialize the counter

// This function runs when the document is fully loaded to ensure all elements are available
document.addEventListener('DOMContentLoaded', function() {
    d3.select('#clickButton').on('click', function() {
        count++;  // Increment the counter
        d3.select('#counterDisplay').text(count);  // Update the display with the new count
        console.log("Counter updated to:", count);  // Log to console for debugging
    });
});

