'use strict'

const uint32 = require('cuint').UINT32

module.exports = {
	multiply32,
	multiplyUint32,
	multiplyTrivial32,
	multiplyMagic32,
}

function multiply32(a, b) {
	return a * b | 0
}

function multiplyUint32(a, b) {
	const first = uint32(a)
	const second = uint32(b)
	return first.multiply(second).toNumber()
}

function multiplyTrivial32(a, b) {
	const a0 = a & 0xffff
	const a1 = a >> 16
	const b0 = b & 0xffff
	const b1 = b << 16
	const c = (a1 * b0 + a0 * b1) >>> 16
	return (a0 * b0 + c) | 0
}

function multiplyMagic32(a, b) {
	const a0 = a & 0xffff
	const a1 = a & 0xffff0000
	const b0 = b & 0xffff
	const c1 = (a0 * b) | 0
	const c2 = (a1 * b0) | 0
	return c1 + c2 | 0
}

