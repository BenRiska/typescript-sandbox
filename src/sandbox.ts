interface Todo {
name: string;
age: number;
completed: boolean;
}

const stuff = {
    name: "ben",
    age: 24,
    completed: true
}

const testFunc: (data: Todo) => void = (data: Todo) => {
 console.log(data);
}

testFunc(stuff);


const today: Date = new Date();

const apples: number = 5;
const checkThisOut: undefined = undefined;
const nowCheckThisOut: null = null;

const collection1: string[] = [""];


class Car {}

const car1: Car = new Car();

const object1: {x: number; y: number} = {
    x: 1,
    y: 5
};

const json = '{"x": 10, "y": 5}';
const coordinates: {x:number; y: number} = JSON.parse(json);
console.log(coordinates);

let randomVal: number | string = "hi";
randomVal = 5;

const add = (a: number, b: number): number => {
    return a + b;
}

const multiDimArr: (string | number)[][] = [];

const pepsi: [number, boolean, string] = [40, false, "brown"];

interface Vehicle{
    brand: string;
    releaseDate: number;
    broken: boolean;
    seats: number;
    onSale?: boolean;
    changeListing(): null;
}

const printAnything = <T>(val: T): void => {
console.log(val);
}

printAnything<string>("hello");
printAnything<number>(5);

export {}