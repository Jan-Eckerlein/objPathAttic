const jsonData = {};

type Keys = (string | number)[];
function setJsonMapFromPath(path: string, value: any) {
  const keys = getPathKeys(path);
  // console.log(keys);

  populateJsonData(keys, value);
}

function populateJsonData(keys: Keys, value: any, ref: any = jsonData) {
  console.log(keys);
  const key = keys[0];
  if (keys.length > 1) {
    const nextKey = keys[1];

    if (typeof nextKey === "number" && !Array.isArray(ref[key])) {
      ref[key] = new Array();
    } else if (typeof nextKey === "string" && !isObject(ref[key])) {
      ref[key] = {};
    }
    const newKeys = keys.slice(1);
    populateJsonData(newKeys, value, ref[key]);
  } else {
    ref[key] = value;
  }
}

function isObject(x: any) {
  return typeof x === "object" && !Array.isArray(x) && x !== null;
}

// Function to set a value in jsonData, creating nested objects/arrays as needed
function getPathKeys(path: string): Keys {
  const keys: Keys = [];
  let currentKey = "";

  // Parse path to separate keys and indices
  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === ".") {
      if (currentKey) {
        keys.push(currentKey);
        currentKey = "";
      }
    } else if (char === "[") {
      if (currentKey) {
        keys.push(currentKey);
        currentKey = "";
      }
      let j = i + 1;
      let index = "";
      while (path[j] !== "]" && j < path.length) {
        index += path[j];
        j++;
      }
      keys.push(Number(index)); // Add the array index as a number
      i = j; // Skip past the closing bracket
    } else {
      currentKey += char;
    }
  }
  if (currentKey) keys.push(currentKey);
  return keys;
}

// Examples
setJsonMapFromPath("nest[0].t[0]", "bar");
setJsonMapFromPath("nest[1].t[0]", "bar");
console.log("jsonData: ", jsonData);
