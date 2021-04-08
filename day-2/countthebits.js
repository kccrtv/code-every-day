// ## Challenge 1: countTheBits 🌶️🌶️

// ![](https://media.giphy.com/media/f74WQIhbzBKAusL2v1/giphy-downsized.gif)

// ### Prompt:
// - Write a function called countTheBits that accepts a single numeric argument that will be an integer.
// - The function should return the number of bits set to 1 in the number's binary representation.

// ### Hints:
// - We typically work with "decimal" numbers daily. Decimal is "base 10", where there are 10 digits available - 0 thru 9. However, it's binary that computers understand - 1's and 0's. The 1's and 0's are called bits.
// - As an example, the decimal value of 13 is represented in binary as 1101. There are 3 one bits and 1 zero bit in the decimal number of 13.
// - Carefully read the documentation for the Number.prototype.toString method.

// Examples:
// ```js
// countTheBits( 0 ) // => 0
// countTheBits( 13 ) // => 3
// countTheBits( 256 ) // => 1
// countTheBits( 255 ) //=> 8
// countTheBits( 65535 ) //=> 16
