import test from 'node:test'
import assert from 'node:assert/strict'
import { upstreams } from '../src/upstreams.js'

test('every upstream is an http url', () => {
  for (const u of Object.values(upstreams)) assert.match(u, /^http:\/\//)
})
