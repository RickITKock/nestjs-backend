import { fillEmptySlots } from './fillEmptySlots';

class SomeString extends String {}

type StringType = {};

interface StringInterface {
  getMe(): string;
}

function printString(obj: any) {
  if (typeof obj === 'object' || 'string') {
    console.log('Is string or object', obj);
  } else {
    console.log('Not an object');
  }
}

function instanceOfTest(obj: any) {
  if (obj instanceof SomeString) {
    console.log(obj);
  } else {
    console.log('Not an object');
  }
}

function interfaceTest(obj: StringInterface) {
  if ('getMe' in obj) {
    console.log(obj.getMe());
  } else {
    console.log('Not an object');
  }
}

function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

enum ID {
  L1 = 'L1',
  L2 = 'L2',
  L3 = 'L3',
}

interface IPrimary {
  id: { id: ID };
  name: string;
}

interface ISecondary {
  id: { id: ID };
  age: number;
}

const prim: IPrimary[] = [{ id: { id: ID.L2 }, name: 'Rick' }];
const sec: ISecondary[] = [
  { id: { id: ID.L3 }, age: 29 },
  { id: { id: ID.L1 }, age: 27 },
  { id: { id: ID.L2 }, age: 31 },
];

const emptySlots: IPrimary[] = fillEmptySlots<IPrimary, ISecondary>(
  'id',
  prim,
  sec,
  {
    id: { id: ID.L1 },
    name: '',
  },
);

interface IdLabel {
  id: number /* some fields */;
}

interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  if (typeof idOrName === 'number') {
    return { id: idOrName } as NameOrId<T>;
  } else {
    return { name: idOrName } as NameOrId<T>;
  }
}

console.log(emptySlots);
