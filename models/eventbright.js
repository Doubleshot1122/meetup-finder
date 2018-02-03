const rp = require('request-promise');
const BASE_URL = "https://www.eventbriteapi.com/v3/";
const token = process.env.eb_personal_oauth_token;
const Resource = require('./resource')('eventbright');

class EventBright extends Resource {
  constructor() {}

  static simpleQuery (){
    return rp({
      method: 'GET',
      uri: `${BASE_URL}/events/search`,
      auth: { 'bearer': token },
      json: true
    }).then(results => {
      console.log(results);
    })
  }
}


module.exports = EventBright;
