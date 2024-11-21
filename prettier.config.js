/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: true, // Add semicolons at the end of statements
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: 'es5', // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  tabWidth: 2,
  useTabs: false, // Indent with spaces instead of tabs
  printWidth: 80, // Wrap lines that exceed 80 characters
  bracketSpacing: true, // Add spaces inside object literal braces
};

export default config;
