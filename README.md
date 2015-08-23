Iosevka
======================================================
A programmer's typeface.

![preview](https://ooo.0o0.ooo/2015/08/23/55d9200750fcf.png)

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