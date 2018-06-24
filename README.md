# Gulp+Browserify+Browser-sync

A simple project to show how useful gulp can be when used with a few simple plugins/modules.

# How To Get Started

1. Install ImageMagick or GraphicsMagick (use ```identify --version``` or ```gm --version``` to check if installed)
http://www.imagemagick.org/script/download.php
http://www.graphicsmagick.org/download.html

2. ```npm install``` if you don't have browser-sync installed already ```npm i -g browser-sync```

3. a. (do ```npm i -g gulp gulp-cli``` if you don't have it already globally thanks to https://github.com/flaura42)

   b. ```npm install gulp``` to install gulp locally.

4. build webp images with ```gulp webp``` (project should run without this step still, however)

5. build project and launch with ```gulp build```

6. ```gulp dev``` to restart watching/developement server

# How It Works

Browser-sync loads up a build folder via gulp that includes a bundled html package that uses javascript and responsive images.

```gulp webp``` goes inside of the src images folder and creates a webp image out of every image in the folder. ```gulp build`` goes through and builds the responsive images folder, bundles the js, and outputs the inlined-with-css html file(s).

Gulp then watches the original source files for any changes by you, which then triggers the events all over again and reloads the browser.

# How do I do more than one html file?

Simple, just copy how the ```browserify-main``` task runs, and make sure to add it to each run sequence the other task is involved in. A good idea if you have a lot of these would be to make a run task with an array of these tasks, so only that task would need to be called by the helper tasks that need it, like ```watch``` and ```build```.

# What are those strange marks in all of the files?

Those are called comments, and they are there to help you understand how the code works. It is an ancient practice not recognized by 99% of javascript developers.