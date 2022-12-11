# Boyer–Moore–Horspool Search

An naive implementation of [Boyer–Moore–Horspool algorithm][wikipedia_link] that works with [Array][mdn_array_link] & [TypedArray][mdn_typed_array_link]

[wikipedia_link]: https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm
[mdn_array_link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[mdn_typed_array_link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

### Installation
```shell
npm install git+https://github.com/Chocobo1/bmhs.git
```

### Usage example
```javascript
const Bmh = require('bmhs');  // import this module, CommonJS style
//import * as Bmh from 'bmhs';  // import this module, ES module style

// working with TypedArray
{
    const pattern = Uint32Array.from([0xFFFF, 0x3000]);
    const corpus = Uint32Array.from([0xFFFF, 0xFFFF, 0x3000, 0x1000]);

    // setup `bmh` for later reuse
    const bmh = Bmh.BoyerMooreHorspool(pattern);
    // returns the first index of the exact match in `corpus`; -1 if not found
    const idx = bmh.match(corpus);
    if (idx !== 1)
        throw (new Error('Please file an issue'));
}

// also working with String
{
    const pattern = "pattern";
    const corpus = "some pattern !@#$%";

    const bmh = Bmh.BoyerMooreHorspool(pattern);
    const idx = bmh.match(corpus);
    if (idx !== corpus.indexOf(pattern))
        throw (new Error('Please file an issue'));
}

// you can specify offset!
{
    const pattern = "123";
    const corpus = "123abc123";
    const corpusOffset = 1;

    const idx = Bmh.BoyerMooreHorspool(pattern).match(corpus, corpusOffset);
    if (idx !== corpus.indexOf(pattern, corpusOffset))
        throw (new Error('Please file an issue'));
}
```

### Run tests
```shell
npm install -D  # install dev dependencies
npm test        # run tests
```

### References
* https://www.inf.hs-flensburg.de/lang/algorithmen/pattern/horsen.htm
* https://computing.dcu.ie/~humphrys/Notes/String/bm.html

### See also
You might be interested to [Knuth–Morris–Pratt algorithm][kmp_link]

[kmp_link]: https://github.com/Chocobo1/kmps

### License
See [LICENSE](./LICENSE) file
