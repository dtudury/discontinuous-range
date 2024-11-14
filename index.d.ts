class _SubRange {
  constructor(low: number, high: number);

  low: number;
  high: number;
  length: number;

  overlaps(subrange: _SubRange): boolean;

  touches(subrange: _SubRange): boolean;

  add(subrange: _SubRange): Array<_SubRange> | false;

  subtract(subrange: _SubRange): Array<_SubRange> | false;

  toString(): string;

  clone(): _SubRange;
}

export = class DiscontinuousRange {
  constructor();
  constructor(i: number);
  constructor(start: number, end: number);

  ranges: Array<_SubRange>
  length: number;

  add(i: number): this;
  add(start: number, end: number): this;
  add(range: DiscontinuousRange): this;

  subtract(i: number): this;
  subtract(start: number, end: number): this;
  subtract(range: DiscontinuousRange): this;

  intersect(i: number): this;
  intersect(start: number, end: number): this;
  intersect(range: DiscontinuousRange): this;

  index(i: number): number | null;

  toString(): string;

  clone(): DiscontinuousRange;
}