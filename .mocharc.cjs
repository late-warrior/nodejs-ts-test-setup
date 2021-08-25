module.exports = {
     // Specify "require" for CommonJS
  // "require": "ts-node/register",
  // Specify "loader" for native ESM
     "loader": "ts-node/esm",
     "extensions": ["ts"],
//   "spec": [
//     "dist/test/**/*.*"
//   ],
  "spec": [
    "test/**/*.*"
  ],
  // "watchFiles": ["dist/src/**/*.*"]
}