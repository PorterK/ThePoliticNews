"use strict";
module.exports = {
  connect(key, secret, token, tokenSecret){
    const Twitter = require('twitter-node-client').Twitter;
    return new Twitter({
      'consumerKey': key,
      'consumerSecret': secret,
      'accessToken': token,
      'accessTokenSecret': tokenSecret
    });
  }
}
