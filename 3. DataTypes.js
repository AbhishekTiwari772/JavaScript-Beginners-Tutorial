/*
Now we will talk about Data types in JavaScript.
Data types are one of the core concepts of any programming language. The data types in JavaScript are mainly categorised into 2 types: Primitive and Non-Primitive.

Primitive data types include:
  1. String
  2. Numbers (Integers and floating point numbers)
  3. Boolean (true - 1, false - 0)
  4. Undefined (No value given to a variable)
  5. Null (empty or unknown value)
  5. BigInt (A new data type representing a very big integer)
  6. Symbol (A new data type, imutable and unique)
  
The only Non-Primitive data types is Object. It contains key-value pairs, similar to python dictionaries.
*/
var a = "Abhishek"; // A string value Abhishek assigned to variable a
var b = 54; // An Integer(Number) value 54 assigned to variable b
var c = true; // A boolean value true(1) assigned to variable c
var d; // The variable d is declared but no value is assigned, so it is Undefined
var e = null; // An unknown value assigned to e, so e is assigned a null
var f = 12345678909876543210; // A very big integer value, f is assigned a BigInt

/*
To know the type of value assigned to a variable, we use the typeof function.
*/
console.log(typeof(a)); // Output = string
console.log(typeof(b)); // Output = number
console.log(typeof(c)); // Output = boolean
console.log(typeof(d)); // Output = undefined
console.log(typeof(e)); // Output = null
console.log(typeof(f)); // Output = BigInt
