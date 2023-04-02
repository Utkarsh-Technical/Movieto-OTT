// Get all the div elements by class name
var divs = document.getElementsByClassName("card");

// Add an event listener to each div
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function(event) {
    // Get the ID of the button that was clicked
    var buttonId = event.currentTarget.id;
    console.log("Button clicked in div with ID: " + event.currentTarget.id);

    //redirect to the new screen.
    window.location.href = "Screen4.html";
  });
}