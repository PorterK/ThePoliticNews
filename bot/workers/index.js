"use strict";

module.exports = {
  beingWork(twitter){
    const Job  =  require('cron').CronJob;
    const colors = require('colors');

    let message = colors.green;

    let error = function (err, response, body) {
      console.log(`An error has occurred, this is all we could gather... \n ${body}`);
    };
    let success = function (json) {
        let data = JSON.parse(json);

        let getRandomTweet = function(){
          let tweet = data.statuses[Math.floor(Math.random() * data.statuses.length)];

          let tweetText = tweet.text + ' via @' + tweet.user.screen_name;

          return tweetText;
        }

        let tweetText = getRandomTweet();

        if(tweetText.length > 140){
            getRandomTweet();
        }

        twitter.postTweet({status: tweetText}, error, function(){});

        console.log(message('Tweet posted: \n %s'), tweetText);

    };

    let work = new Job('0 */40 * * * *',
      function(){
        console.log(message('Job started on %s'), new Date());

        twitter.getSearch({
          q:'donald trump hillary clinton',
          count:50,
          result_type:'popular'
        }, error, success)
      },
      null,
      true,
      'America/Los_Angeles'
    )

  }
}
