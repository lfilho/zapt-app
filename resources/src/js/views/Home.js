'use strict';

var Backbone = require('backbone'),
    $ = require('jquery'),
    template = require("../../templates/Home.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function () {
        console.log("alert home initialize");
        this.render();
    },

    render: function () {
        this.$el.html(template());
        console.log('render');
        return this;
    },

    // events: {
    //     "keyup .search-key": "search",
    //     "keypress .search-key": "onkeypress"
    // },
    //
    // search: function (event) {
    //     var key = $('.search-key').val();
    //     this.employeeList.fetch({reset: true, data: {name: key}});
    // },
    //
    // onkeypress: function (event) {
    //     if (event.keyCode === 13) { // enter key pressed
    //         event.preventDefault();
    //     }
    // }
});
