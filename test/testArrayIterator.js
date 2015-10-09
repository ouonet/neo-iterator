/**
 * Created by neo on 2015/10/9.
 */
var should=require("should");

var Iterators = require('../index');
var ArrayIterator=Iterators.ArrayIterator;
describe('ArrayIterator should be able to walk through array',function(){
    it('initial',function(){
        var arr=["a","b","c"];
        var arrIt=new ArrayIterator(arr);
        should.equal(arrIt.eof,false);
        should.equal(arrIt.hasNext(),true);
        should.equal(arrIt.getCurrent(),null);
    });
    it('next',function(){
        var arr=["a","b","c"];
        var arrIt=new ArrayIterator(arr);
        should.equal(arrIt.next(),arr[0]);
        should.equal(arrIt.next(),arr[1]);
        should.equal(arrIt.next(),arr[2]);
        should.equal(arrIt.next(),null);
        should.equal(arrIt.hasNext(),false);
        should.equal(arrIt.eof,true);
        arrIt.reset();
        should.equal(arrIt.eof,false);
        should.equal(arrIt.hasNext(),true);
        should.equal(arrIt.next(),arr[0]);
        should.equal(arrIt.next(),arr[1]);
        should.equal(arrIt.next(),arr[2]);
        should.equal(arrIt.next(),null);
        should.equal(arrIt.eof,true);
    });
    it('setCurrent',function(){
        var arr=["a","b","c"];
        var arrIt=new ArrayIterator(arr);
        arrIt.setCurrent(null);
        should.equal(arrIt.eof,false);
        should.equal(arrIt.hasNext(),true);
        should.equal(arrIt.getCurrent(),null);
        should.equal(arrIt.next(),"a");
        should.equal(arrIt.next(),"b");
        should.equal(arrIt.next(),"c");
        arrIt.setCurrent(arr[1]);
        should.equal(arrIt.eof,false);
        should.equal(arrIt.hasNext(),true);
        should.equal(arrIt.getCurrent(),"b");
        should.equal(arrIt.next(),"c");
        should.equal(arrIt.next(),null);
        arrIt.setCurrent(arr[0]);
        should.equal(arrIt.eof,false);
        should.equal(arrIt.hasNext(),true);
        should.equal(arrIt.getCurrent(),"a");
        should.equal(arrIt.next(),"b");
        should.equal(arrIt.next(),"c");
        should.equal(arrIt.next(),null);

    });
});