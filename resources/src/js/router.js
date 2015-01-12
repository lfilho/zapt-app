'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

var HomeView = require('./views/Home');
var homeView = new HomeView();

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home'
    },

    home: function () {
        window.alert('home view' + homeView);
//        homeView.delegateEvents();
    }
});
