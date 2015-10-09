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
    return this;
}
var proto = Iterator.prototype;
proto.reset = function () {
    this.current = null;
    this.eof = false;
    return this;
};
proto.getCurrent = function () {
    return this.current;
};
proto.setCurrent = function (current) {
    this.current = current;
    this.eof = this.inquiryEnd(this.current);
};
proto.inquiryEnd = function (data) {
    return true;
};
proto.hasNext = function () {
    return !this.eof;
};
proto.next = function () {
    this.eof = true;
    return null;
};
module.exports = Iterator;