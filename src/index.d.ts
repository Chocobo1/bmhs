interface BoyerMooreHorspool<T>
{
    skipTable: number[];  // internal
    match: (corpus: T, corpusOffset?: number) => number;
}

export function BoyerMooreHorspool(pattern: any[]): BoyerMooreHorspool<any[]>;
export function BoyerMooreHorspool(pattern: ArrayBufferView): BoyerMooreHorspool<ArrayBufferView>;
export function BoyerMooreHorspool(pattern: string): BoyerMooreHorspool<string>;
