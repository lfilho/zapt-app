'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Router = require('./router');

Backbone.$ = $;

window.app = {
    router: new Router()
};

document.addEventListener('deviceready', function() {
    Backbone.history.start();
    window.alert('device is ready');
}, false);
