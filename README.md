EventMixin.js
=============

Add events behaviour to javascript objects

Usage
-----

As **EventMixin** is a **mixin**, it must be used as a **mixin**.

Example using the `$.extend` of jQuery, but ther is a lot of alternative :

```javascript
var Simpson = function( name ){
  this.name = name;
  
  this.createEvent('updateName');
}

MyClass.prototype = $.extend( {} , EventMixin, {
  setName : function( name ){
    this.name = name;
    this.trigger('updateName');
  }
});

var bart = new Simpson( 'Bart' );

bart.on('updateName', function(){
  alert( this.name );
});

bart.setName( 'Lisa' ); // alert --> Lisa

```

Methods
-------

Name                                        | Description
--------------------------------------------|-------------
createEvent( event:STRING )                 | Create a new event on the classe.
on( event:STRING , handler:FUNCTION )       | Attach a new event listener on an object
off( event:STRING [, handler:FUNCTION ] )   | Detach a specific listener or all the listener of an event
trigger( event:STRING )                     | Trigger an event

