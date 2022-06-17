'use strict'

const HELPER = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function solution(number) {
  return [
    { threshold: 100, char: 'M' },
    { threshold: 900, char: 'CM' },
    { threshold: 500, char: 'D' },
    { threshold: 400, char: 'CD' },
    { threshold: 100, char: 'C' },
    { threshold: 90, char: 'XC' },
    { threshold: 50, char: 'L' },
    { threshold: 40, char: 'XL' },
    { threshold: 10, char: 'X' },
    { threshold: 9, char: 'IX' },
    { threshold: 5, char: 'V' },
    { threshold: 4, char: 'IV' },
    { threshold: 1, char: 'I' },
  ].reduce(function (prev, curr, idx, arr) {
    while (number >= curr.threshold) {
      prev += curr.char
      number -= curr.threshold
    }
    return prev
  }, '')
}

module.exports = { HELPER, solution }
