// to check the property exists in object there is "in " operator
// the syntax: "key" in object;

// for (key in object) checks over keys of objects

let user = {
    name: 'aziza',
    age: 23,

}
for (let name in object) {
    console.log(name)
};
//     in objects integers are sorted ascendingly, others in creation order

//  object is constant ,properties are free to change!

// Object.assign method to copy one objects's data to another 
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// ^^^^ Object.assign() Shallow copy
// *************************************************

// Deep copy 
// structuredClone object clone object's all nested properties
let obj = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = structuredClone(obj);

// But structuredClone doesn't support function properties, instead use custom clone _.cloneDeep(obj).

// 8********************************************************

// Calling this alone without object in strict mode return undefined==this = true,
//  non strict mode this will be global window

// Arrow function doesnt have this

// for ..in, Object.keys() cannot iterate over symbols, there are not shown
// Object.getOwnPropertySymbols(obj)  Reflect.ownKeys(obj)  returns symbols


