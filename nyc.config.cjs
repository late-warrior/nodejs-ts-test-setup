module.exports = {
    "extends": "@istanbuljs/nyc-config-typescript",
    // OPTIONAL if you want coverage reported on every file, including those that aren't tested:
    "all": true,
    "reporter": ["text-summary", "html"],
    "report-dir": "./coverage",
}