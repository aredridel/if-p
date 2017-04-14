const P = require('any-promise');

module.exports = ifP;

function ifP(val, ifTrue, ifFalse) {
    return P.resolve(val).then(val => val ? ifTrue && ifTrue(val) : ifFalse && ifFalse(val));
}
