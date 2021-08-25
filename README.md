# NodeJS test setup

A minimal setup to make that demonstrates unit testing in NodeJS

# Stack

* NodeJS 16 and above
* ESM
* Typescript
* Mocha
* nyc

# Approach

The current robust approach that is guaranteed to work is transpiling `src` and `test` and running
tests on them

# Other approaches tried

* Use `ts-node` to do on the fly transpilation
* This did not work for the NodeJS + ESM combination
* An invocation like this also failed with an error - 'INVALID_MODULE_SPECIFIER' - `node --experimental-loader ts-node/esm.mjs --require ts-node/register --experimental-specifier-resolution=node node_modules/.bin/mocha  --extension ts`