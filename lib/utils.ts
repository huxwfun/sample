import _times from 'lodash/times'

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const charsLen = chars.length

function generateRandomString(length: number): string {
  return _times(length, () => chars.charAt(Math.floor(Math.random() * charsLen))).join('')
}

export function generateDynamicKey(): string {
  return generateRandomString(18)
}

export function generateDynamicPassword(): string {
  return generateRandomString(4)
}
