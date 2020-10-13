var should = require('should'),
    assert = require('assert');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

/**
 * Cases
 */

var getData = require('..')

describe('getData', function () {
    // create some jsdom magic to allow jQuery to work
    var document = new JSDOM('<!doctype html><html><body><form><input type=text name=user value=Lorem/><input type=email name=mail value="q@w.co"/></form></body></html>'),
        window = document.window,
        $ = global.jQuery = require('jquery')(window);

    it('get data', function () {
        let oData = getData($("form"));
        oData.should.be.a.Object();
    })
})


var $form = $("#form_data");
var data = getFormData($form);
var beautified = JSON.stringify(data, null, 2)