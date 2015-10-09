/**
 * Created by neo on 2015/10/9.
 */
var should = require("should");

var Iterators = require('../index');
var ArrayIterator = Iterators.ArrayIterator;
describe('ArrayIterator behavior', function () {
    it('initial ArrayIterator with Empty Array', function () {
        var arrIt = new ArrayIterator([]);
        should.equal(arrIt.hasNext(), false);
        should.equal(arrIt.next(), null);
    });
    it('initial ArrayIterator with Not Empty Array', function () {
        var arr = ["a", "b", "c"];
        var arrIt = new ArrayIterator(arr);
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.next(), "a");
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.next(), "b");
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.next(), "c");
        should.equal(arrIt.hasNext(), false);
        should.equal(arrIt.getCurrent(), "c");
        should.equal(arrIt.next(), null);
        should.equal(arrIt.getCurrent(), "c");
        arrIt.reset();
        should.equal(arrIt.getCurrent(), null);
    });
    it('initial ArrayIterator with String', function () {
        var arr = "abcde";
        var arrIt = new ArrayIterator(arr);
        should.equal(arrIt.eof, false);
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.getCurrent(), null);
        should.equal(arrIt.next(), "a");
        should.equal(arrIt.next(), "b");
        should.equal(arrIt.next(), "c");
        should.equal(arrIt.next(), "d");
        should.equal(arrIt.next(), "e");
        should.equal(arrIt.hasNext(), false);
        should.equal(arrIt.next(), null);
    });
    it('next', function () {
        var arr = ["a", "b", "c"];
        var arrIt = new ArrayIterator(arr);
        should.equal(arrIt.next(), arr[0]);
        should.equal(arrIt.next(), arr[1]);
        should.equal(arrIt.next(), arr[2]);
        should.equal(arrIt.hasNext(), false);
        should.equal(arrIt.eof, true);
        arrIt.reset();
        should.equal(arrIt.eof, false);
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.next(), arr[0]);
        should.equal(arrIt.next(), arr[1]);
        should.equal(arrIt.next(), arr[2]);
        should.equal(arrIt.next(), null);
        should.equal(arrIt.eof, true);
    });
    it('setCurrent', function () {
        var arr = ["a", "b", "c"];
        var arrIt = new ArrayIterator(arr);
        arrIt.setCurrent(null);
        should.equal(arrIt.eof, false);
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.getCurrent(), null);
        should.equal(arrIt.next(), "a");
        should.equal(arrIt.next(), "b");
        should.equal(arrIt.next(), "c");
        arrIt.setCurrent(arr[1]);
        should.equal(arrIt.eof, false);
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.getCurrent(), "b");
        should.equal(arrIt.next(), "c");
        should.equal(arrIt.next(), null);
        arrIt.setCurrent(arr[0]);
        should.equal(arrIt.eof, false);
        should.equal(arrIt.hasNext(), true);
        should.equal(arrIt.getCurrent(), "a");
        should.equal(arrIt.next(), "b");
        should.equal(arrIt.next(), "c");
        should.equal(arrIt.next(), null);

    });
});