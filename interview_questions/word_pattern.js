// Interview question: Word Pattern

// This is a retired 60-minute coding question from Dropbox. A good goal would be to be able to finish Part 1 within the 60 minutes, and then to come up with a plan for Part 2 even if you don’t have time to implement it fully.

// Part 1

// Write a function that takes as arguments two strings: `pattern` and `input`. Return whether or not the words in `input` match the pattern of the characters in `pattern`.

// Example 1:

// | `pattern: 'abba'`            |
// | ---------------------------- |
// | `input: 'red blue blue red'` |
// | `result: True`               |

// Example 2:

// | `pattern: 'abcabc'`                      |
// | ---------------------------------------- |
// | `Input: 'red blue green red blue green'` |
// | `result: True`                           |

// Example 3:

// | `pattern: 'abba'`             |
// | ----------------------------- |
// | `Input: 'red blue green red'` |
// | `result: False`               |












// Part 2

// Write a function that takes as arguments two strings: `pattern` and `input`. Return whether or not `input` can be broken into words to match the pattern of the characters in `pattern`.

// (In other words, this is the same problem as part 1, but `input` doesn’t contain spaces, so you’ll need to determine if it is possible to split up the input into words in a way that matches `pattern`. You will likely want to use recursion.)

// Example 1:

// | `pattern: 'abcba'`             |
// | ------------------------------ |
// | `input: 'redbluegreenbluered'` |
// | `result: True`                 |

// Example 2:

// | `pattern: 'aba'`                                                               |
// | ------------------------------------------------------------------------------ |
// | `Input: 'xxyyyxx'`                                                             |
// | `result: True`, with multiple solutions:<br><br>- x, xyyyx, x<br>- xx, yyy, xx |

// Example 3:

// | `pattern: 'abba'`          |
// | -------------------------- |
// | `Input: 'redbluegreenred'` |
// | `result: False`            |










