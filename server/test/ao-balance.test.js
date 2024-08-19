import { test } from 'node:test'
import * as assert from 'assert'
import { aoBalance } from '../lib/ao-balance.js'

const testAddress = "0cQJ5Hd4oCaL57CWP-Pqe5_e0D4_ZDWuxKBgR9ke1SI"

test('calculate the balance of a user', async () => {
  const balance = await aoBalance({ address: testAddress });
  assert.ok(balance > 0);
});