"use strict";

module.exports = {
  beingWork(twitter){
    const Job  =  require('cron').CronJob;
    const colors = require('colors');

    let message = colors.green;

    let success = function (json) {
        let data = JSON.parse(json);

        let error = function (err, response, body) {
          console.log(`An error has occurred, this is all we could gather... \n ${body}`);

          let error = JSON.parse(body);

          if(error.errors[0].code == 187){
            postTweet(getRandomTweet()); //if a duplicate arrises, just look for another tweet
          }
        };

        let success = function(tweetText){
          console.log(message('Tweet posted: \n %s'), tweetText);
        }

        let getRandomTweet = function(){
          let tweet = data.statuses[Math.floor(Math.random() * data.statuses.length)];

          let tweetText = tweet.text + ' via @' + tweet.user.screen_name;

          return tweetText;
        }

        let postTweet = function(tweetText){

          if(tweetText.length > 140){
              tweetText = getRandomTweet();
          }

          twitter.postTweet({status: tweetText}, error, function(){success(tweetText)});
        }

        let tweetText = getRandomTweet();

        postTweet(getRandomTweet());
    };

    let work = new Job('0 */1 * * * *',
      function(){
        console.log(message('Job started on %s'), new Date());

        twitter.getSearch({
          q:'donald trump hillary clinton',
          count:50,
          result_type:'popular'
        }, function(err, body, response){}, success);
      },
      null,
      true,
      'America/Los_Angeles'
    )

  }
}
