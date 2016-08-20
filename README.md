# ThePoliticNews Bot

A bot showcasing the current political buffoonery in the United States
You can find it on Twitter, [@ThePoliticNews](https://twitter.com/ThePoliticNews)

>A typical vice of American politics is the avoidance of saying anything real on real issues.

(quote by Theodore Roosevelt)

### Installation/Usage

I am running [Node.js](https://nodejs.org/) v5.5.0

Create a [twitter app](http://apps.twitter.com) (leave the callback url blank)

Rename `.envrc.example` to `.envrc` and fill in your data

Then run

```sh
$ direnv allow
```

(find direnv [here](http://direnv.net/))

Next run

```sh
$ npm install && node index.js
```

after the first time, you can just run

```sh
$ node index.js
```

That's it!

### Notes

The app runs on port 2016 by default, you can change this by editing this line in the `index.js`

```js
    let port = 2016;
```

### Contributing
Feel free to contribute as much as you'd like! I'll review PRs

### Production

While this app will run on your local machine, if you want a fully functioning bot you should grab a good VPS. I recommend [this one](https://www.ovh.com/us/vps/vps-ssd.xml)

### License
This work is licensed under the [CC v4](https://creativecommons.org/licenses/by/4.0/)
