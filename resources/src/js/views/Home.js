'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require("../../templates/Home.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    el: '.app',

    initialize: function () {
        window.alert("alert home initialize");
        this.render();
    },

    render: function () {
        this.$el.html(template());
        window.alert('render');
        return this;
    },

    events: {
        // "keyup .search-key": "search",
        // "keypress .search-key": "onkeypress"
    }
});
