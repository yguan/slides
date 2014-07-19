/*jslint nomen: true*/
/*global define,require*/

define(function (require, exports) {
    'use strict';

    var templateMap = {
        'browser-automation': 'browser-automation'
    };

    exports.getTemplateFileName = function (name) {
        return (templateMap[name] || 'default') + '.tpl';
    };
});

