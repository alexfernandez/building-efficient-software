'use strict'

const Suite = require('benchmark').Benchmark.Suite
const multiply = require('../lib/multiply.js')

const N = 1000


Suite()
	.add('bare loop', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			found += N
		}
		return found
	})
	.add('regular multiplication', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			found += i * found
		}
		return found
	})
	.add('multiply UINT32', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			found += multiply.multiplyUint32(i, found)
		}
		return found
	})
	.add('multiply trivial 32', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			found += multiply.multiplyTrivial32(i, found)
		}
		return found
	})
	.add('multiply magic 32', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			found += multiply.multiplyMagic32(i, found)
		}
		return found
	})
	.add('imul', function() {
		let found = 0
		for (let i = 0; i < N; i++) {
			found += Math.imul(i, found)
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



