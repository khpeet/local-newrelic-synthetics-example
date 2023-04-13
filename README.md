# Local Synthetics Environment

## Pre-Reqs
* Nodejs >= 16.10.0
* NPM
* Chrome 100+
* Your favorite IDE

## Installation
 1. Create a directory and run `npm init` to generate a `package.json`
 2. Install `selenium-webdriver` and any additional node modules support via Synthetics [mentioned here](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#Node16)

 ```
 npm install --save selenium-webdriver@4.1.0
 ```
 3. Install `chromedriver` either via [Homebrew](https://formulae.brew.sh/cask/chromedriver) or [direct download](https://sites.google.com/chromium.org/driver/)
 4. Start writing scripts!


## Local Script Development

### Scripted Browser
* Import the following config into any js file:

```
/** Local Dev Config **/
const $selenium = require('selenium-webdriver');
let $webDriver = new $selenium.Builder().forBrowser('chrome').build();
/** Local Dev Config **/
```

This will allow for the same functions/syntax to be used compared to the New Relic Synthetics runtime.

### Scripted API
Most of the time you will want to import additional modules, such as `got`, which replaces the deprecated `request` module to make http/API requests. In some cases, this requires importing the module instead of requiring it. For example:

```
import got from 'got';
```

instead of:

```
var got = require('got');
```

The import syntax also requires adding `"type": "module"` to your `package.json`.

New Relic allows the `require` syntax, but locally, you usually have to import. Once local dev is completed, typically `import` will be removed and `require` will  be used on the New Relic runtime.


## Troubleshooting
* `"chromedriver" cannot be opened because the developer cannot be verified` - this can be fixed by trusting the `chromedriver` binary, by running the command:

```
xattr -d com.apple.quarantine /usr/local/bin/chromedriver
```
