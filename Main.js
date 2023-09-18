// 1. getVariable(a, b)
let variableResult = getVariable("x", "y");
// variableResult now holds the value "x = "y""

// 2. getConstant(c, d)
let constantResult = getConstant("alpha", "beta");
// constantResult now holds the value "alpha = "beta""

// 3. getStringValue(e)
let stringResult = getStringValue("Hello");
// stringResult now holds the value "Hello"

// 4. getNumberValue(f)
let numberResult = getNumberValue(123);
// numberResult now holds the value "123"

// 5. getBooleanValue(g)
let booleanResult = getBooleanValue(true);
// booleanResult now holds the value "true"

// 6. getObjectValue(h, i)
let objectResult = getObjectValue("name", "John");
// objectResult now holds the value "{name: "John"}"

// 7. getArrayValue(arrayItem)
let arrayResult = getArrayValue("apple");
// arrayResult now holds the value ["apple"]
