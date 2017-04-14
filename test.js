const assert = require('assert');
const ifP = require('./');

(async function () {
    assert.equal(typeof ifP().then, 'function', 'returns thenable');

    assert.equal(await ifP(true, () => 'yes'), 'yes', 'returns yes if true');
    assert.equal(await ifP(false, () => 'yes'), null, 'does not return yes if false');
    assert.equal(await ifP(Promise.resolve(true), () => 'yes'), 'yes', 'returns yes if true');
    assert.equal(await ifP(Promise.resolve(false), () => 'yes'), null, 'does not return yes if false');
    assert.equal(await ifP(true, () => 'yes', () => 'no'), 'yes', 'returns yes if true');
    assert.equal(await ifP(false, () => 'yes', () => 'no'), 'no', 'returns no if false');
})().catch(err => {
    console.warn(err);
    process.exit(1);
});

