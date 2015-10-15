(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var Iterator=require('./lib/Iterator');
var ArrayIterator=require('./lib/ArrayIterator');
module.exports={
    Iterator:Iterator,
    ArrayIterator:ArrayIterator
};
},{"./lib/ArrayIterator":2,"./lib/Iterator":3}],2:[function(require,module,exports){
/**
 * Created by neo on 2015/10/7.
 */
'use strict';
var Iterator = require('./Iterator');
var neo = require('neo-lang');
/*
 Array 的iterator
 */
function ArrayIterator(data) {
    Iterator.apply(this, arguments);
    this._idx = -1;
    return this;
}
neo.extend(ArrayIterator, Iterator, {
    next: function () {
        if (this.eof)
            return null;
        this._idx = this._idx == -1 ? 0 : this._idx + 1;
        this.eof = this._idx >= this.data.length-1;
        this.current = this.data[this._idx];
        return this.current;
    },
    inquiryEnd: function (element) {
        if (this.data == undefined) {
            return true;
        }
        if (this.data.length == 0) {
            return true;
        }
        if (typeof element == 'undefined') {
            this._idx = -1;
            return false;
        }
        if (element == null) {
            this._idx = -1;
            return false;
        }
        this._idx = this.data.indexOf(element);
        return this._idx + 1 >= this.data.length;
    }
});

module.exports = ArrayIterator;
},{"./Iterator":3,"neo-lang":4}],3:[function(require,module,exports){
/**
 * Created by neo on 2015/10/7.
 */
/**
 * Created by neo on 2015/10/7.
 */
'use strict';
function Iterator(data) {
    this.data = data;
    this.current = null;
    this.eof = false;
    this.reset();
    return this;
}
var proto = Iterator.prototype;
proto.reset = function () {
    this.setCurrent(null);
    return this;
};
proto.getCurrent = function () {
    return this.current;
};
proto.setCurrent = function (current) {
    this.current = current;
    this.eof = this.inquiryEnd(this.current);
};
proto.hasNext = function () {
    return !this.eof;
};
proto.inquiryEnd = function (element) {
    return true;
};
proto.next = function () {
    this.eof = true;
    return null;
};
module.exports = Iterator;
},{}],4:[function(require,module,exports){
/**
 * Created by neo on 2015/10/7.
 */
'use strict';
module.exports.extend = (function () {
    // inline overrides
    var ua = typeof navigator == "object" && (typeof navigator.userAgent == 'string' )
            ? navigator.userAgent.toLowerCase() : "",
        check = function (r) {
            return r.test(ua);
        },
        isOpera = check(/opera/),
        isIE = !isOpera && check(/msie/),
        apply = function (o, c, defaults) {
            // no "this" reference for friendly out of scope calls
            if (defaults) {
                apply(o, defaults);
            }
            if (o && c && typeof c == 'object') {
                for (var p in c) {
                    o[p] = c[p];
                }
            }
            return o;
        },
        io = function (o) {
            for (var m in o) {
                this[m] = o[m];
            }
        },
        override = function (origclass, overrides) {
            if (overrides) {
                var p = origclass.prototype;
                apply(p, overrides);
                if (isIE && overrides.hasOwnProperty('toString')) {
                    p.toString = overrides.toString;
                }
            }
        },
        oc = Object.prototype.constructor;

    return function (sb, sp, overrides) {
        if (typeof sp == 'object') {
            overrides = sp;
            sp = sb;
            sb = overrides.constructor != oc ? overrides.constructor : function () {
                sp.apply(this, arguments);
            };
        }
        var F = function () {
            },
            sbp,
            spp = sp.prototype;

        F.prototype = spp;
        sbp = sb.prototype = new F();
        sbp.constructor = sb;
        sb.superclass = spp;
        if (spp.constructor == oc) {
            spp.constructor = sp;
        }
        sb.override = function (o) {
            override(sb, o);
        };
        sbp.superclass = sbp.supr = (function () {
            return spp;
        });
        sbp.override = io;
        override(sb, overrides);
        sb.extend = function (o) {
            return extend(sb, o);
        };
        return sb;
    };
})();

},{}]},{},[1]);
