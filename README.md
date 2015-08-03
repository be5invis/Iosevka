Iosevka
======================================================
A programmer's typeface.

![preview](http://ww2.sinaimg.cn/large/798f7769gw1euq8czfv1aj21kw1f3nck.jpg)

Building
-----------------------------------------------------
To build Iosevka you should prepare:

1. `node`, `FontForge` and `make`. Make sure that you can run them in your terminal.
2. patel-c (via `npm install patel-c -g`)
3. Necessary libs :
       npm install node-sfnt
       npm install bezier-js
       npm install yargs
4. Once environments are prepared, `make`. You will find ttfs in the `build/` directory.