//fnal output to dome
const output = document.querySelector("output")

//fragment to hold all the stuff so we inject into the dom once
const fragment = document.createDocumentFragment()

// create factory function for comonents
//create input component
const inputFieldFactory = (classList, defaultPlaceholderText) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.type = type
    inputField.placeholder = defaultPlaceholderText
    return inputField

}

const createInputField =  inputFieldFactory("input--text", "Enter card text here", "text")

createInputField.addEventListener()

//create button component

const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("buton")
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return theButton

}

const createCardButton = buttonFactory("button--submit", "Create Card")

createCardButton.addEventListener("click", function (){


        const userEntry = cardTextInput.textContent


})

fragment.appendChild()
fragment.appendChild()

//create card component

const cardFactory = (classList, textContent) => {
    const theSection = document.createElement("buton")
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return theSection

}

const createCardButton = buttonFactory("button--submit", "Create Card")

createCardButton.addEventListener("click", function (){


        const userEntry = cardTextInput.textContent


})

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)



/*attach event listener to button
    1. get value of input field
    */const userEntry = cardTextInput.value
    //2. create card component with text inside 
    cardFactory("card", userEntry)


//create card component

output.appendChild(fragment)


