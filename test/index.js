var should = require('should'),
    assert = require('assert').strict;
const jsdom = require('jsdom');
const { beforeEach } = require('mocha');
const { JSDOM } = jsdom;
var getData = require('..')

/**
 * Cases
 */

describe('getData test', function () {
    beforeEach(function () {
        // create some jsdom magic to allow jQuery to work
        this.document = new JSDOM('<!doctype html><html><body><form><input type=text name=user value=Lorem/><input type=email name=mail value="q@w.co"/></form></body></html>');
        this.window = this.document.window;
        this.$ = global.jQuery = require('jquery')(this.window);
    })

    it('get data as object', function () {
        let oData = getData(this.$("form"));
        oData.should.be.a.Object();
        //var beautified = JSON.stringify(data, null, 2)
    })
})
