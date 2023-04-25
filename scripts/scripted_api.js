/** Local Dev Config - REMOVE when adding to NR **/
import got from 'got'; // Requires adding "type": "module" to package.json
/** Local Dev Config - REMOVE when adding to NR **/

//use this instead when importing to New Relic Synthetics
//var got = require('got');

//monitorType: SCRIPT_API

let urls = ['https://google.com', 'https://newrelic.com'];


async function main() {
  let proms = [];

  await urls.map(url => proms.push(checkUri(url)));

  let results = await Promise.all(proms);
  console.log(results);
}

async function checkUri(uri) {
  var opts = {
    url: uri,
    headers: {}
  };
  let resp = await got.get(opts);

  return resp.statusCode
}

main();
