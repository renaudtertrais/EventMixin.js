EventMixin.js
=============

Add events behaviour to javascript objects

Usage
-----

As **EventMixin** is a **mixin**, it must be used as a **mixin**.

Example using the `$.extend` of jQuery, but there is a lot of alternative :

```javascript
// Create a class and we want to add event to this class
var Simpson = function( name ){
  this.name = name;
  // create an event
  this.createEvent('updateName');
}

Simpson.prototype = $.extend( {} , EventMixin, {
  setName : function( name ){
    this.name = name;
    // trigger the event
    this.trigger('updateName');
  }
});

var bart = new Simpson( 'Bart' );

// add an event listener
bart.on('updateName', function(){
  alert( this.name );
});

bart.setName( 'Lisa' ); // alert --> Lisa

```

Methods
-------

Name                                          | Description
----------------------------------------------|-------------
`createEvent( event:STRING )`                 | Create a new event on the classe.
`on( event:STRING , handler:FUNCTION )`       | Attach a new event listener on an object
`off( event:STRING [, handler:FUNCTION ] )`   | Detach a specific listener or all the listener of an event
`trigger( event:STRING )`                     | Trigger an event

