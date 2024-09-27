/** Local Dev Config - REMOVE when adding to NR **/
import $http from 'got'; // Requires adding "type": "module" to package.json

/** Local Dev Config - REMOVE when adding to NR **/

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
  let resp = await $http.get(opts);

  return resp.statusCode
}

main();
