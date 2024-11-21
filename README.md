# obj-path-attic

obj-path-attic is a work-in-progress utility for handling deeply nested object paths in JavaScript and TypeScript. It currently supports setting values on objects using a combination of dot and bracket notation. This library aims to provide a flexible and type-safe alternative to existing packages like object-path.

⚠️ This library is not production-ready yet. Use at your own risk.

## Features

- Set nested properties: Add or update deeply nested properties in objects with dot and bracket notation.

- Flexible handling of object and array paths: Supports mixed dot and bracket notation for accessing arrays and objects.


## Installation

```bash
npm install obj-path-attic
```

```bash
yarn add obj-path-attic
```

```bash
pnpm add obj-path-attic
```


## Current API

### setOnPath
```typescript
setOnPath(obj: Obj, path: string, value: unknown): void
```

Sets a value in a nested object, creating intermediate objects or arrays as needed.

```typescript
import { setOnPath } from "obj-path-attic";

const obj = {};
setOnPath(obj, "nested[0].key", "value");
console.log(obj);
// Output: { nested: [{ key: "value" }] }
```

## Known Issues

### 1. Setting values via array notation on objects

If a property is accessed with array notation ([]) but already exists as an object, the value will be added as a key instead of modifying the array.

Example:
```typescript
const obj = { nested: { foo: "bar" } };
setOnPath(obj, "nested[1]", "test");
console.log(obj);
// Output: { nested: { foo: "bar", 1: "test" } }
```

### 2. Setting values via object notation on arrays

Conversely, attempting to set an object property on an existing array will throw an error.


### Solutions in the future
TypeScript template literal types may be used to address these issues in the future.


## Planned Features
- Get: Retrieve values from objects using the same flexible path notation.
- Delete: Remove properties from nested objects or arrays.
- Empty: Clear specific nested paths.



## Comparison with object-path

Unlike object-path, this library:
- Supports mixed dot and bracket notation.
- Allows explicit handling of numeric keys for objects or arrays.

Example:
```typescript
import { setOnPath } from "obj-path-attic";

const obj = {};
setOnPath(obj, "foo.42[0]", "bar");
console.log(obj);
// Output: { foo: { 42: ["bar"] } }
```

object-path would treat 42 as an array index as it only uses the dot notation.
This way numerical keys for arrays are not supported.


## License

MIT © [@jan-eckerlein](https://github.com/Jan-Eckerlein/objPathAttic)
