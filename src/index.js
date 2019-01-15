'use strict';

function generateSkipTable(pattern)
{
    let table = {};
    for (let i = 0, iMax = (pattern.length - 1); i < iMax; ++i)
        table[pattern[i]] = pattern.length - 1 - i;

    return table;
}

function search(pattern, skipTable, corpus, corpusOffset)
{
    // returns first match index in `corpus`
    // returns -1 if not found

    // compare from the right side
    //   if match -> next until fulfill
    //   if not   -> look into table
    //         if found shift table value
    //         if not shift pattern.length

    if (pattern.length <= 0)
        return 0;

    if (corpusOffset >= corpus.length)
        return -1;

    if (corpusOffset < 0)
    {
        corpusOffset += corpus.length;
        corpusOffset = Math.max(0, corpusOffset);
    }

    for (let i = corpusOffset; i < corpus.length;)
    {
        for (let j = pattern.length - 1;; --j)
        {
            if (pattern[j] !== corpus[i + j])
            {
                const cSymbol = corpus[i + pattern.length - 1];
                const skipValue = (cSymbol in skipTable) ? skipTable[cSymbol] : pattern.length;
                i += skipValue;
                break;
            }

            if (j === 0)
                return i;
        }
    }

    return -1;
}

function BoyerMooreHorspool(pattern)
{
    if (!new.target)
        return (new BoyerMooreHorspool(pattern));

    this.pattern = pattern;
    this.skipTable = generateSkipTable(pattern);

    this.match = (corpus, corpusOffset = 0) => search(this.pattern, this.skipTable, corpus, corpusOffset);
}


module.exports = {
    BoyerMooreHorspool: BoyerMooreHorspool
};
