// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollars to Yen
    let valueInYen = valueInDollar * 144.64;
    // return the Yen value
    return valueInYen;
}
const fromYenToPound = function(yenconversion) {
    // Convert the given valueInDollars to Pounds
    let valueInPound = yenconversion * 0.0054;
    // return the Pound value
    return valueInPound;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound }