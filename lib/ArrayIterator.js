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
    Iterator.apply(this,arguments);
    this._idx = -1;
    return this;
}
neo.extend(ArrayIterator, Iterator, {
    next: function () {
        if (this.eof)
            return null;
        var idx = this._idx == -1 ? 0 : this._idx + 1;
        if (idx >= this.data.length) {
            this.eof = true;
            this._idx = -1;
            this.current = null;
        } else {
            this._idx = idx;
            this.current = this.data[idx];
        }
        return this.current;
    },
    inquiryEnd: function (current) {
        if (typeof current == 'undefined') {
            this._idx = -1;
            return false;
        }
        if (current == null) {
            this._idx = -1;
            return false;
        }
        this._idx = this.data.indexOf(current);
        return this._idx+1 >= this.data.length;
    }
});

module.exports = ArrayIterator;