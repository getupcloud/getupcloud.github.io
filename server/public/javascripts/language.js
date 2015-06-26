(function (document, undefined) { var _C = {}; var pluses = /\+/g; function raw(s) { return s; } function decoded(s) { return unRfc2068(decodeURIComponent(s.replace(pluses, ' '))); } function unRfc2068(value) { if (value.indexOf('"') === 0) { value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\'); } return value; } function fromJSON(value) { return config.json ? JSON.parse(value) : value; } var config = _C.set = function (key, value, options) { if (value !== undefined) { options = options || {}; if (value === null) { options.expires = -1; } if (typeof options.expires === 'number') { var days = options.expires, t = options.expires = new Date(); t.setDate(t.getDate() + days); } value = config.json ? JSON.stringify(value) : String(value); return (document.cookie = [ encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path    ? '; path=' + options.path : '', options.domain  ? '; domain=' + options.domain : '', options.secure  ? '; secure' : '' ].join('')); } var decode = config.raw ? raw : decoded; var cookies = document.cookie.split('; '); var result = key ? null : {}; for (var i = 0, l = cookies.length; i < l; i++) { var parts = cookies[i].split('='); var name = decode(parts.shift()); var cookie = decode(parts.join('=')); if (key && key === name) { result = fromJSON(cookie); break; } if (!key) { result[name] = fromJSON(cookie); } } return result; }; config.defaults = {}; _C.unset = function (key, options) { if ($.cookie(key) !== null) { $.cookie(key, null, options); return true; } return false; }; window.Cookies = _C; })(document);

(function() {
    'use strict';

    var Getup = {};

    Getup.language = {};
    Getup.language.cookieName = 'getup_site_language';
    Getup.language.current = '';
    Getup.language._default = 'pt-br';

    Getup.language.init = function() {
        if (U.debug) return;
        Getup.language.current = Cookies.set(Getup.language.cookieName);

        if (!Getup.language.current) {
            var language = navigator.language.toLowerCase().replace('_', '-');
            Getup.language.set(language);
        }

        //Getup.language.verifyAndRedirect();
    };

    Getup.language.set = function(language) {
        Getup.language.current = language;
        Cookies.set(Getup.language.cookieName, Getup.language.current, { path: '/' });
    };

    Getup.language.get = function() {
        return Getup.language.current;
    };

    Getup.language.verifyAndRedirect = function() {
        if (Getup.language.current == U.language) return;

        var language = Getup.language._default == Getup.language.current
            ? 'index.html'
            : 'index_' + Getup.language.current.slice(0, 2) + '.html';

        location.href = language;
    };

    Getup.language.init();

    window.Getup = Getup;
}());