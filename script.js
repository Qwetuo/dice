

function getRandom() {
    var input = document.getElementById("sides").value;
    if (input === '') {
        alert('Please enter a number of sides!');
    } else if (isNaN(input) || input <= 0) {
        alert('Please enter a valid number of sides!');
    } else {
    document.getElementById("dice").textContent = Math.ceil(Math.random()*input);
    }
}

// When roll button is clicked - 
    //go to html and input onclick with a function name
    //create a function in script.js
    //funtion

// Get User Input

// Generate a random number using user input

// Change content of large div to random number

