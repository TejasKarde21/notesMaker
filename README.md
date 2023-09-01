# notesMaker

It defines several constants to capture references to specific HTML elements:

button: Represents a button with the id "btn."
colorInput: Represents an input field with the id "color-input."
output: Represents an HTML element with the id "output."
It defines a function called get() which is likely intended to be triggered when a button is clicked (presumably the button with id "btn").

Inside the get() function:

It captures the value of an input field with the id "text-input" and stores it in the variable textInputValue.
It captures the value of another input field with the id "color-input" and stores it in the variable color.
It creates a new div element and sets its id attribute to "myNewElement."
It creates a new p (paragraph) element and sets its id attribute to "head."
It creates a new button element, sets its text content to 'X', and assigns it an id of "cross."
Depending on the value entered in the "color-input" field:
If the color is "#000000" (black), it sets the text color of the new paragraph to white (#FFFFFF), and it sets the background color of the new heading and div to the black color. It also sets the icon's color to white.
If the color is different from black, it sets the background color of the new heading and div to the selected color.
It sets the text content of the new heading (the paragraph) to the value entered in the "text-input" field.
It finds the last paragraph with the class "last" on the page using document.querySelector(".last").
It inserts the newly created div element before the last paragraph. This effectively adds the new content above the last paragraph on the page.
It appends the new heading and the icon button to the newly created div.
It clears the value of the "text-input" field and adds an event listener to the icon button. When the icon button is clicked, the associated div element is removed from the DOM.
