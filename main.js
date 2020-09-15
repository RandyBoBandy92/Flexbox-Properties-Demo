// Setup initial variables
let flexParent = document.getElementById("flexy")
let buttons = document.getElementsByTagName("button")
let boxSeven = document.getElementById("seven")

// Function for changing CSS styles
function changeCss(buttonElem) {
    // Search the parent element of the button for the text inside h3
    // Use this for property
    let rawProperty = buttonElem.parentElement.firstChild.nextElementSibling.innerHTML
    // remove additional text
    let property = rawProperty.split(":")[0]
    // Grab the text inside the button for value, and clean it up
    let rawValue = buttonElem.innerHTML
    let value = rawValue.split(" ")[0]
    // Determine which element to style based on property
    if (property == "flex-grow" || property == "flex-shrink") {
        boxSeven.style[property] = value
    } else {
        flexParent.style[property] = value
    }
    // Update the color of the button text currently applying styling to green
    // and change the colors of all other buttons in that div to black
    updateButtonColors(buttonElem, property, value)
}

function updateButtonColors(buttonElem, property, value) {
    // if the CSS value matches the value of the button
    if (flexParent.style[property] == value || boxSeven.style[property] == value) {
        // Grab the parent container and iterate over all buttons inside
        let parentContainerButtons = buttonElem.parentElement.getElementsByTagName('button')
        console.log(parentContainerButtons)
        for (let index = 0; index < parentContainerButtons.length; index++) {
            const button = parentContainerButtons[index];
            // Make all the buttons have black text
            button.style.color = "black"
        }
        // Make the active button text green
        buttonElem.style.color = "green"
    }
}

// Setting up event listeners on all the buttons
for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener("click", ev => changeCss(button))
}