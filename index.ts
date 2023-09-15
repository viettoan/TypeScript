/**
 * TYPE ANNOTATIONS ON VARIABLES
 */
let age: number;
let username = "Viet Toan";
age = 10;
username = 'asd';

/**
 * FUNCTIONS
 */

// Parameter Type Annotations
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// Return Type Annotations
function getFavoriteNumber(): number {
    return 26;
}

/**
 * OBJECT TYPES
 */
function printCoord(pt: { x: number; y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 3, y: 7});

// Optional Properties
function printName(obj: { first: string; last?: string }) {
    console.log(obj);
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

/**
 * UNION TYPES
 */
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });

/**
 * TYPE ALIAS
 */
type Point = {
    x: number;
    y: number;
};

function typeAlias(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

typeAlias({ x: 100, y: 100 });

/**
 * INTERFACE
 */
interface Point1 {
    x: number;
    y: number;
}

function printCoord1(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord1({ x: 100, y: 100 });