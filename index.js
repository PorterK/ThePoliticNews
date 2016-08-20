"use strict";

const express = require('express');

let app = express();

let port = 2016;

app.listen(port, function(e){
  if (e){
    console.error('failed to bind', e);
    process.exit(1);
  }
  console.log(`==> 🌍 listening on ${port}`);
});
