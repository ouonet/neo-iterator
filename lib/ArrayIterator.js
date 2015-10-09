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