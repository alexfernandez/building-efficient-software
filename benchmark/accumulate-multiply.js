'use strict'

const Suite = require('benchmark').Benchmark.Suite
const multiply = require('../lib/multiply.js')

const N = 1000
const a = 1824892867 | 0
const b = 2838497487 | 0


Suite()
	.add('regular multiplication', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			const c = a * b | 0
			found += c
		}
		return found
	})
	.add('multiply UINT32', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			const c = multiply.multiplyUint32(a, b)
			found += c
		}
		return found
	})
	.add('multiply trivial 32', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			const c = multiply.multiplyTrivial32(a, b)
			found += c
		}
		return found
	})
	.add('multiply magic 32', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			const c = multiply.multiplyMagic32(a, b)
			found += c
		}
		return found
	})
	.add('imul', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			const c = Math.imul(a, b)
			found += c
		}
		return found
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('Fastest: %j', this.filter('all'));
	})
	.run({async: true});

