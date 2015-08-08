Iosevka
======================================================
A programmer's typeface.

![preview](http://ww2.sinaimg.cn/large/798f7769gw1euvzxiywngj21di154wx5.jpg)

Building
-----------------------------------------------------
To build Iosevka you should prepare:

1. `node`, `FontForge`, `ttfautohint` and `make`. Make sure that you can run them in your terminal.
2. patel-c (via `npm install patel -g`)
3. Necessary libs :
```bash
npm install node-sfnt
npm install bezier-js
npm install yargs
```

Once environments are prepared, `make`. You will find ttfs in the `build/` directory.