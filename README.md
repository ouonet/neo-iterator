# neo-Iterator
##Target:

This is a javascript library of Iterator.
provide Abstract Iterator and ArrayIterator.
This library can be used in nodejs and web navigator.

##Requiremnt:

We want get elements of a collection one by one ,but we don't know its internal structure.We hope something can provide 
such functionality as simple as possible.So, Iterator is such thing.The usage should like this:
    
    var iterator=new SomeIterator(someCollection);
    while(iterator.hasNext()){
       var next=iterator.next();
    }

    //or
    while(!iterator.eof){
       var next=iterator.next();
    }

essential behavior of iterator

1. client of iterator can get something from iterator ,i.e., by calling next() ,getting a result. 
2. if an instance of iterator will return  something(i.e. result of next() is not null),
    calling hasNext() should get *true,otherwise false should be got.
    
##install
    
npm install neo-iterator
    
##Usage

    var Iterators=require('neo-iterator');
    var oneArray=['a','b','c']
    var iterator=new Iterators.ArrayIterator(oneArray);
    while(iterator.hasNext()){
       console.log(iterator.next()); //'a','b','c' will be printed one by one;
    }
    
##API

### Constructor

1. **Iterator(data)**

### Field ###

1. **data:** &nbsp;which is a collection .
1. **current:** &nbsp;the element of current,which returned by next().
1. **eof:** &nbsp;if there is no more element , eof is true.

### Method ###

1. **reset():**&nbsp;reset will set state of Iterator to initial state.Internal,it will call setCurrent(null). 
2. **getCurrent():**&nbsp;return the element just have got.
3. **setCurrent(element):**&nbsp;set current element to specified element. if the element is last one, eof will be set to true.
2. **hasNext():**&nbsp;if has next element, it return true.
1. **next():**&nbsp;return next element if it existing.If last one is return ,the eof will be set to true.Normally ,subclass of iterator should override this method.
1. **inquiryEnd(element):**&nbsp;query whether this element is the last element. This method will not effect the state of Iterator. Normally ,subclass of iterator should override this method.

##Extention

Since this library only provides an abstract Iterator and an array Iterator, if you want to implement an iterator for other data model,e.g. a Tree,
you can extend abstract Iterator.two method should be overrided: 

1. next() :get next element
1. inquiryEnd(element):query whether this element is the end element.


        var Iterators=require('neo-iterator');
        var neo=require('neo-lang');
        var Iterator=Iterators.Iterator;
        function SomeIterator(data){
            Iterator.apply(this,arguments);
            //ToDo your code
            return this;
        }
        neo.extend(SomeIterator,Iterator,{
            next:function(){},
            inquiryEnd:function(element){}
        });

      
Live example please see [ArrayIterator](https://github.com/ouonet/neo-iterator/blob/master/lib/ArrayIterator.js)