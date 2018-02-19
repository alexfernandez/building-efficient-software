'use strict';

let total = 0

for (let i = 0; i < 1000000000; i++) {
	total += Math.imul(i, i)
}

console.log('total: %s', total)

