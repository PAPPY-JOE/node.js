// Create a function 10 squared - takes no input returns 10*10

function tenSquared() {
    return 10 * 10
}

// Create a function 9 squared - takes no input returns 9*9

function nineSquared() {
    return 9 * 9
}

// Create a function 8 squared - takes no input returns 8*8

function eightSquared() {
    return 8 * 8
}

// Array manipulation
const myArray = [1, 2, 3]

// Multiply array by 2
function copyArrayAndMultiplyBy2(array) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2)
    }
    return output
}

const result = copyArrayAndMultiplyBy2(myArray)

// Divide array by 2
function copyArrayAndDivideBy2(array) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2)
    }
    return output
}

const result2 = copyArrayAndDivideBy2(myArray)


// This codes aren't DRY - Don't Repeat Yourself

// Higher Order Functions - Reusable

function copyArrayAndManipulate(array, instructions) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]))
    }
    return output
}

function multiplyBy2(input) { return input * 2 }
const result3 = copyArrayAndManipulate(myArray, multiplyBy2)

// ARROW FUNCTIONS
// Since functions are objects, we can assign them to variables:
// from; function multiplyBy2(input) { return input * 2 }
// to; const multiplyBy2 = (input) => { return input * 2 }
// to; const multiplyBy2 = (input) => input * 2
// to;
const MultiplyBy2 = input => input * 2

const output = MultiplyBy2(3) //6

// to;
const result4 = copyArrayAndManipulate(myArray, input => input * 2)