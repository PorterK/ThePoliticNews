"use strict";

const express = require('express');
const bot = require('./bot');

let app = express();

let port = 2016;

app.listen(port, function(e){
  if (e){
    console.error('failed to bind', e);
    process.exit(1);
  }
  console.log(`==> 🌍 listening on ${port}`);
});

bot.start(process.env.KEY,
          process.env.SECRET,
          process.env.TOKEN,
          process.env.SECRET_TOKEN);
