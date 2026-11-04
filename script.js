// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"
const today = new Date().toLocaleDateString("en-US",
    {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"

    }
);
document.querySelector('#dateOutput').textContent = today;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
var numericString1 = "24";
var numericString2 = "87";
//    - at least 1 decimal string (example: "19.75")
var decimalString = "19.99";
//    - at least 1 non-numeric string (example: "hello")
var string = "hello, world!";


// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
const convertedNumeric1 = Number(numericString1);
const convertedNumeric1IsNaN = Number.isNaN(convertedNumeric1);
const convertedNumeric1IsInteger = Number.isInteger(convertedNumeric1);

const convertedNumeric2 = Number(numericString2);
const convertedNumeric2IsNaN = Number.isNaN(convertedNumeric2);
const convertedNumeric2IsInteger = Number.isInteger(convertedNumeric2);

const convertedDecimal = Number(decimalString);
const convertedDecimalIsNaN = Number.isNaN(convertedDecimal);
const convertedDecimalIsInteger = Number.isInteger(convertedDecimal);

var convertedString = Number(string);
var finalConvertedString;

// ONE IF/ELSE BLOCK FOR PART 4
if (Number.isNaN(convertedString)){
    finalConvertedString = "This value is not a number";

}else{
    finalConvertedString = convertedString;
}

const convertedStringIsNaN = Number.isNaN(convertedString);
const convertedStringIsInteger = Number.isInteger(convertedString);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"


//* 1ST IF/ELSE BLOCK OF PART 4  (if converting string to Number results in NaN, replaced 'NaN' with 'This value is not a valid number'*/
if(convertedString === NaN){
    convertedString = 'This value is not a number';
}

const convertedNumeric1Sentence = `Original: '${numericString1}' -> Converted: ${convertedNumeric1} -> isNaN: ${convertedNumeric1IsNaN} -> isInteger: ${convertedNumeric1IsInteger}`;
const convertedNumeric2Sentence = `Original: '${numericString2}' -> Converted: ${convertedNumeric2} -> isNaN: ${convertedNumeric2IsNaN} -> isInteger: ${convertedNumeric2IsInteger}`;
const convertedDecimalSentence = `Original: '${decimalString}' -> Converted: ${convertedDecimal} -> isNaN: ${convertedDecimalIsNaN} -> isInteger: ${convertedDecimalIsInteger}`;
const convertedStringSentence = `Original: '${string}' -> Converted: ${finalConvertedString} -> isNaN: ${convertedStringIsNaN} -> isInteger: ${convertedStringIsInteger}`;   

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
const finalConversionResult = [
  convertedNumeric1Sentence,
  convertedNumeric2Sentence,
  convertedDecimalSentence,
  convertedStringSentence
].join("<br>");

document.querySelector("#numberConversionOutput").innerHTML = finalConversionResult;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.querySelector("#numberConversionOutput").innerHTML = finalConversionResult;
// ==========================
// Part 3: Math & Formatting [X]
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

const shippingCost = 7;
const numUnits = 29;
const pricePerUnit = 3.1415;
//
// 2. Perform calculations:
//    - at least one addition
const sum = shippingCost + numUnits;
//    - at least one other operation (subtract, multiply, or divide)
const product = numUnits * pricePerUnit;
//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
const fixedProduct = product.toFixed(2);

//2ND IF/ELSE FOR PART 4 (Checking if fixedProduct is within budget ($50))
const inBudget = fixedProduct < 50 ? "in budget" : "out of budget"


//
// 4. Build a string showing your results
const mathResults = `Sum of ${shippingCost} and ${numUnits} is: ${sum}. Product of ${numUnits} (number of units) and ${pricePerUnit} (price/unit) is: ${product} (fixed to 2 decimal points: $${fixedProduct}) which is ${inBudget} ($50).`;  


//
// 5. Display the results inside the element with id="mathOutput"
document.querySelector("#mathOutput").textContent = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)



