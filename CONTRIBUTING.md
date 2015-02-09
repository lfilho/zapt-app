Contributing
============

## Development environment

You'll need: `git`, `node`, `npm` (comes with node) and the according SDK for the desired platform you're going to develop to (see below).

  1. Clone this repo
  2. Run `npm i`
  3. Install Browserify client for convenience: `npm i -g browserify`
  4. For Android development, follow [these instructions](http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide).
  5. For iOS development, follow [these instructions](http://docs.phonegap.com/en/edge/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide).

## Cordova development path

Cordova allows you to choose from two diferent paths while developing. I have chosen the `command line interface` one.
See [here](http://docs.phonegap.com/en/edge/guide_overview_index.md.html#Overview) for an overview over the two.

## Developing

I've set some commands inside `scripts` section in [package.json](package.json). Those will give you an rough idea on how to build / start things up.
It will also show some basic cordova commands. You can learn more by reading the [docs](http://docs.phonegap.com/en/edge/index.html).

All the task automations will be using merely npm scripts. No gulp, grunt, etc this time.

## Code style / conventions

Please follow the following conventions while contributing to this repo:

  * **Code Language**: English
  * **Line endings**: Unix Style (LF)
  * **Whitespaces**:
    * Spaces for tabs
    * No trailing whitespaces
  * **Indentation**: 4 spaces
  * UTF-8 for everything possible

*Note: (there's an [`.editorconfig`](.editorconfig) file for you)*

Much appreciated!
