// ===================Screen1========================
// Get all the box elements
const boxes = document.querySelectorAll('.card');

// Loop through the box elements and add an event listener to each one
boxes.forEach(function(box) {
  box.addEventListener('click', function(event) {
    // Get the ID of the clicked box element
    const genres = event.target.id;

    // Log the ID of the clicked box element to the console
    console.log("Genres Selected: "+genres);

    //redirect to the new screen.
    window.location.href = "Screen2.html";
  });
});


// ===================Language========================
// Get all the button elements by class name
var buttons = document.getElementsByClassName("custom-btn btn-1");

// Add an event listener to each button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    // Get the ID of the button that was clicked
    var language = event.target.id;
    console.log("Button clicked: " + language);

    //redirect to the new screen.
    window.location.href = "Screen3.html";
  });
}


// ===================OTT Platform========================
// Get all the div elements by class name
var divs = document.getElementsByClassName("box");

// Add an event listener to each div
for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function(event) {
    // Get the ID of the button that was clicked
    var buttonId = event.currentTarget.id;
    console.log("Button clicked in div with ID: " + event.currentTarget.id);
    console.log("Button clicked: " + language);
    });
}


