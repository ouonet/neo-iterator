# neo-lang
##Target:
>this is a javascript library for Iterator.
>provide Abstract Iterator and ArrayIterator.
>This library can be used in nodejs and web navigator.
##Requiremnt:
We want get elements of a collection one by one ,but we don't know its internal structure.We hope something can provide 
such functionality as simple as possible.So, Iterator is such thing.The usage should like this:
    
    var iterator=new SomeIterator(someCollection);
    while(iterator.hasNext()){
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
    var iterator=new Iterators.ArrayIterator();
    while(iterator.hasNext()){
       console.log(iterator.next()); //'a','b','c' will be printed one by one;
    }
    
##API

Constructor:

> Iterator(collection)

Field

> data:which is the collection data ,

> current:

> eof:

Method

> hasNext():

> next():

> inquiryEnd(element):

##Extention

Since this library only provides an abstract Iterator and an array Iterator, if you want to implement an iterator for other data model,e.g. a Tree,
you can extend abstract Iterator.two method should be overrided: 

1. next() :get next element
2. inquiryEnd(element):query whether this element is the end element.


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

      
