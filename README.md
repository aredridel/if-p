# if-p

A functional conditional supporting asynchronous values

```
function ifP(cond: Promise<any>, ifTrue: function<any> -> Promise<any>, ifFalse: function<any> -> Promise<any>) -> Promise<any>
```

## Use

```
const ifP = require('if-p');

const success = ifP(aPromiseOfABoolean(), () => 'success', () => 'failure');
success.then(console.log);
```
