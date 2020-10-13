'use strict';

/**
 * Export
 */
module.exports = getFormData

/**
 * Convert a jQuery object to JS object. 
 * It operates on a jQuery collection of forms and/or form controls.
 * 
 * @param {Object} a - jQuery collection of forms and/or form controls
 * @returns {Object} JS Object
 * 
 * @version 1.0.0  
 * See the {@link https://github.com/raedmiranda/js-getFormdata Documentation}
 */
function getFormData(a) {
    //First: Encode a set of form elements as an array of names and values.
    var r = a.serializeArray(), e = {};
    //Then: Convert the name-value array to an object
    return jQuery.map(r, function (a, r) { e[a.name] = a.value }), e
}
