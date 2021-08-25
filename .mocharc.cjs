module.exports = {
    // Specify "loader" for ESM support
    "loader": "ts-node/esm",
    "spec": [
      "test/**/*.*"
    ],
    // nodejs flag to enable imports without having to specify extension (../src/add instead of ../src/add.ts in ESM)
    "experimental-specifier-resolution": "node",
    // require hook for instrumenting code while transpiling with typescript
    "require": "source-map-support/register",
    // below syntax is not working
    //"node-option": ['experimental-specifier-resolution=node'],
  // "watchFiles": ["dist/src/**/*.*"]
}