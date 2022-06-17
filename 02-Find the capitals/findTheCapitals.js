'use strict'

//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

/**
 * Small Function to print out the Index Positions of all Capitalized Letters in a String
 * @param {string} word
 * @returns {array}
 */
const capitals = function (word) {
  let capital = []

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      capital.push(i)
    }
  }
  return capital
}

