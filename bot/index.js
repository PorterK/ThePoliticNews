"use strict";

const connect = require('./connect');
const colors = require('colors');

module.exports = {
  start(key, secret, token, tokenSecret){
      let important = colors.red

      console.log(important('Starting Twitter bot...'));

      let bot = connect.connect(key, secret, token, tokenSecret);

      let error = function (err, response, body) {
        console.log(`An error has occurred, this is all we could gather... \n ${body}`);
      };
      let successFindUser = function (json) {
          let data = JSON.parse(json);
          let parsedData = {
            id: data.id,
            username: data.name,
            location: data.location,
            description: data.description
          }

          console.log(colors.green('Successfully found user, here\'s the data... \n'), parsedData);
      };

      bot.getUser({
        screen_name: process.env.USERNAME
      }, error, successFindUser);
  }
}
