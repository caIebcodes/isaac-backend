import crypto from 'node:crypto'

export default function genString(length: number): string {
	return crypto
		.randomBytes(length)
		.toString('hex')
		.split('')
		.slice(0, length)
		.join('')
}
