//Choose a random color

// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length)
// body.style.backgroundColor = colors[colorIndex]
// }



// //Choose a random color 

// //define our variables 

// //returns the first element that matches the specified item of the function.
// // button is equal to the first button of the document 
// // const: value cant be changed, cant be redeclared
// const button = document.querySelector('button');

// //same like above, getting the first element that is equal to body
// const body = document.querySelector("body");

// //creating an array with the following colors. Why are they strings. Difference between variable, and the string, which might be like a css thing
// const colors = ["red", "green", "blue", "yellow", "pink", "purple"]


// //JS script or "body part"

// //setting the background color of "body" to violet
// body.style.backgroundColor = "violet";

// //add listener to our button, on click, execute function changebackground
// button.addEventListener('click', changeBackground);

// //JS function 

// //define our function ChangeBackground, no parameters to pass 
// function changeBackground() {
    
//     //index var is equal to a random math number (0-.9) times the lenth of the color array. Then parseInt tures the string into an int
//     const colorIndex= parseInt(Math.random()*colors.length);

//     //set background to the color which is the position of the array of color. Color [n].
//     body.style.backgroundColor = colors[colorIndex];
// }


const button = document.getElementById("button");
const body = document.getElementById("body");
const colors = ["red", "green", "blue", "yellow", "pink", "purple"]

body.style.backgroundColor = "violet";
button.addEventListener('click', changeBackground);

function changeBackground() {

    const colorIndexNumber = Math.random()*colors.length;
    console.log (colorIndexNumber);
    const colorIndex = Math.floor(colorIndexNumber);
    console.log (colorIndex);
    body.style.backgroundColor = colors[colorIndex];
}

