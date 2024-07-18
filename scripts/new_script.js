/** Local Dev Config - REMOVE when adding to NR **/
// const $selenium = require('selenium-webdriver');
// let $webDriver = new $selenium.Builder().forBrowser('chrome').build();
/** Local Dev Config - REMOVE when adding to NR **/

//monitorType: SCRIPT_BROWSER

async function main() {
  const url = 'http://google.com';

  await $webDriver.get(url);
  await $webDriver.takeScreenshot();
  console.log('done');
}

main();
