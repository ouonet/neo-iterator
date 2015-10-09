/**
 * Created by neo on 2015/10/7.
 */
var should=require("should");

var Iterators = require('../index');
var Iterator=Iterators.Iterator;
describe("InstanceOf", function () {
    it("instance should be Iterator", function () {
        var it1=new Iterator();
        it1.should.be.an.instanceof(Iterator);
    });
});
describe("Property", function () {
    it("it1 should have property current,eof", function () {
        var it1=new Iterator();
        it1.should.have.property("current");
        it1.should.have.property("eof");
    });
});
describe("Behave",function(){
    it("reset ",function(){
        var it1=new Iterator();
        should.equal(it1.current,null);
        should.equal(it1.eof,true);
    })
    it("next ",function(){
        var it1=new Iterator();
        should.equal(it1.next(),null);
    })
    it("hasNext ",function(){
        var it1=new Iterator();
        should.equal(it1.hasNext(),false);
    })
})
