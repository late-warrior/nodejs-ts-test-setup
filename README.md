# NodeJS ESM Typescript Ttest setup

A minimal setup to make that demonstrates unit testing in NodeJS and coverage information.  Since there are so 
many moving parts in this ecosystem, this is an attempt to help debug tests better

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

# Features

* Run tests
* Coverage (number not generated correctly)
* Watch tests (not working) - ESM watching is not supported in mochajs yet
* Coverage works using c8 - this worked magically out of the box on first attempt - hurray !
# Errors

* TypeError [ERR_INVALID_MODULE_SPECIFIER]: Invalid module "file:///home/sriram/projects/test-setup/test/add_test.ts" - if it cannot load typescript esm (the "loader": "ts-node/esm" in .mocharc.cjs)
* ReferenceError: exports is not defined in ES module scope - without the "module": "ES2020" flag in tsconfig.json - this is because typescript
is transpiling it into a different module format which is not understood while running tests
* `module is not defined in ES module scope` - fix is to rename nyc.config.js to nyc.config.cjs
* Coverage - /bin/sh: 1: @istanbuljs/esm-loader-hook: not found
* Issues - [ERR_INVALID_MODULE_SPECIFIER] - it looks like NODE_OPTIONS specified for nyc to work correctly (@istanbuljs/esm-loader-hook)
does not merge correctly with the nodejs options specified for mocha
