'use strict';

const multiply = require('../lib/multiply.js')

let total = 0

for (let i = 0; i < 1000000; i++) {
	total += multiply.multiply32(total, i)
}

console.log('many: %s', total)

