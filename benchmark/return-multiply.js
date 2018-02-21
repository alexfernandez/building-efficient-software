'use strict'

const Suite = require('benchmark').Benchmark.Suite
const multiply = require('../lib/multiply.js')

const N = 1000
const a = 1824892867 | 0
const b = 2838497487 | 0


Suite()
	.add('constant loop', function() {
		let result = 0
		for (let i = 0; i < N; i++) {
			result = i
		}
		return result
	})
	.add('regular multiplication', function() {
		let result = 0
		for (let i = 0; i < N; i++) {
			result = a * b | 0
		}
		return result
	})
	.add('multiply UINT32', function() {
		let result = 0
		for (let i = 0; i < N; i++) {
			result = multiply.multiplyUint32(a, b)
		}
		return result
	})
	.add('multiply trivial 32', function() {
		let result = 0
		for (let i = 0; i < N; i++) {
			result = multiply.multiplyTrivial32(a, b)
		}
		return result
	})
	.add('multiply magic 32', function() {
		let result = 0
		for (let i = 0; i < N; i++) {
			result = multiply.multiplyMagic32(a, b)
		}
		return result
	})
	.add('imul', function() {
		let result = 0
		for (let i = 0; i < N; i++) {
			result = Math.imul(a, b)
		}
		return result
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('Fastest: %j', this.filter('fastest').map('name'));
	})
	.run({async: true});

