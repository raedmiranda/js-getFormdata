'use strict';

import * as $ from 'jquery'

module.exports = {
    getFormData
}

function getFormData(a) {
    var r = a.serializeArray(), e = {};
    return $.map(r, function (a, r) { e[a.name] = a.value }), e
}
