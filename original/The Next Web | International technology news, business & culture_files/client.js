"use strict";

/*jslint browser: true*/

var TNWBI = function (args) {

    // var self = this;

    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (XDomainRequest !== undefined) {
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            xhr = null;
        }
        return xhr;
    }

    this.initialize = function (args) {
        this.config = args || {};
    };

    this.storePersona = function (token) {
        var xhr = createCORSRequest('POST', "http://lilbro.thenextweb.com/socialhoney/persona/store");
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({ token: token }));
    };

    this.initialize(args);
};
