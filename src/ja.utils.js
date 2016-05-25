/**
 * Created by along on 16/4/25.
 */
(function(ja){
    'use strict';


    ja.utils.parseUrlQuery = function(){


    }

    ja.utils.urlParser = function() {
        var url = location.href;
        var pattern = /[&\?#](\w+?)=([^&#]+)/g;
        var fragment = {};
        var match;
        while ((match = pattern.exec(url))) fragment[match[1]] = match[2];
        return fragment;
    }
})(JA);