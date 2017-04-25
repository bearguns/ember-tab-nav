import { expect } from 'chai';
import { describe, it } from 'mocha';
import { safeHash } from 'tab-nav/helpers/safe-hash';

describe('Unit | Helper | safe hash', function() {
  it('creates a new object with the input', function() {
    let result = safeHash(null, { a: 1, b: 2 });
    expect(result.a).to.equal(1);
    expect(result.b).to.equal(2);
  });
});

