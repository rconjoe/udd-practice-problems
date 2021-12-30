// Interview question: rot solver
// Part I

// (If you’ve heard of a rot13 letter substitution cipher, this question is a generalization of that cipher)

// Write a function `rot` that:

// - takes as arguments: an input string and an amount by which to shift the letters in the string
// - returns: the input string, shifted by the shift amount

// The function should preserve case — it should be able to handle both upper and lowercase letters — and it should not alter punctuation. The function should support negative numbers. The function should support large shift numbers.

// Sample inputs and outputs:

//     rot("HELLO", 1) -> "IFMMP" # shift right by 1
//     rot("HELLO", 2) -> "JGNNQ" # shift right by 2
//     rot("HELLO", -1) -> "GDKKN" # shift left by 1
//     rot("HELLO", 27) -> "IFMMP" # shift right by 27, wrapping back to the beginning
//     rot("Hello, Rick", 1) -> "Ifmmp, Sjdl" # Preserve case and punctuation
//     rot(rot("Hello, Rick", 1), -1) -> "Hello, Rick"

// Writing this function will require familiarity with converting between character and ordinals. For example, Python has the `ord` and `chr` functions, and JavaScript has the `charCodeAt` and `fromCharCode` String methods.
// You may also find reviewing modular arithmetic (using `%`) to be helpful.
















// Part II

// Using your `rot` function, write a function `decrypt` that takes a text encrypted using a shift substitution cipher of an unknown shift amount, and returns a tuple containing `(the shift used to encrypt the original string, the original string)`.

// You will need a dictionary or word list. An input string needs to be long enough to unambiguously determine the the shift used, or there could be multiple valid shifts.

// Sample inputs and outputs:

//     decrypt("Ju xbt uif cftu pg ujnft, ju xbt uif xpstu pg ujnft") -> ("It was the best of times, it was the worst of times", 1)