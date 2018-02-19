'use strict';

const multiply = require('../lib/multiply.js')

let total = 0

for (let i = 0; i < 1000000000; i++) {
	total += multiply.multiply32(i, i)
}

console.log('total: %s', total)

