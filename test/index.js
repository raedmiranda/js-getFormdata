var should = require('should'),
    assert = require('assert').strict;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

/**
 * Cases
 */

var getData = require('..')

describe('getData test', function () {
    // create some jsdom magic to allow jQuery to work
    var document = new JSDOM('<!doctype html><html><body><form><input type=text name=user value=Lorem/><input type=email name=mail value="q@w.co"/></form></body></html>'),
        window = document.window,
        $ = global.jQuery = require('jquery')(window);

    it('get data as object', function () {
        let oData = getData($("form"));
        oData.should.be.a.Object();
        //var beautified = JSON.stringify(data, null, 2)
    })
})
