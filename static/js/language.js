/*
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (document, undefined) {

    var _C = {};
    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return unRfc2068(decodeURIComponent(s.replace(pluses, ' ')));
    }

    function unRfc2068(value) {
        if (value.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape
            value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        return value;
    }

    function fromJSON(value) {
        return config.json ? JSON.parse(value) : value;
    }

    var config = _C.set = function (key, value, options) {

        // write
        if (value !== undefined) {
            options = options || {};

            if (value === null) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        var result = key ? null : {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = decode(parts.join('='));

            if (key && key === name) {
                result = fromJSON(cookie);
                break;
            }

            if (!key) {
                result[name] = fromJSON(cookie);
            }
        }

        return result;
    };

    config.defaults = {};

    _C.unset = function (key, options) {
        if ($.cookie(key) !== null) {
            $.cookie(key, null, options);
            return true;
        }
        return false;
    };

    window.Cookies = _C;

})(document);

(function() {
    'use strict';

    var Getup = {};

    Getup.language = {};
    Getup.language.cookieName = 'getup_site_language';
    Getup.language.current = '';
    Getup.language._default = 'pt-br';

    Getup.language.init = function() {
        var language = Cookies.set(Getup.language.cookieName) || navigator.language.toLowerCase();
        Getup.language.set(language);

        Getup.language.verifyAndRedirect();
    };

    Getup.language.set = function(language) {
        Getup.language.current = language;
        Cookies.set(Getup.language.cookieName, Getup.language.current);
    };

    Getup.language.get = function() {
        return Getup.language.current;
    };

    Getup.language.verifyAndRedirect = function() {
        if (Getup.language._default == Getup.language.current) return;

        location.href = U.base + '/' + Getup.language.current.slice(0, 2);
    };

    Getup.language.init();
}());