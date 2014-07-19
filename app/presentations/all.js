/*jslint nomen: true*/
/*global define,require*/

define(function (require, exports) {
    'use strict';

    var templateMap = require('presentations/template-map');
    var util = require('lib/util');
    var templateFileName = templateMap.getTemplateFileName(util.getQueryParameter('name'));

    exports.render = function (container) {
        require(['lib/text!presentations/' + templateFileName], function (template) {
            var $container = $(container);
            $container.append(template);
            require(['reveal-init']);
        });
    };
});