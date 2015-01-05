// * * * EVENT MIXIN * * *
var EventMixin =  {
  createEvent: function( name ){
    if( !this.events ){
      this.events = {};
    }
    if( this.events[ name ] ){
      return false;
    }
    this.events[name] = [];
  },
  
  on: function ( event , handler ){
    if(
      typeof(event)!== 'string' ||
      typeof(handler) !== 'function' ||
      ! this.events[event]
    ){
      return false;
    }
    this.events[event].push( handler );
    return true;
  },
  
  off: function( event , handler ){
    if( typeof(event) !== 'string' ){
      return false;
    }
    if( typeof(handler) === 'function' ){
      var handlers = this.events[event];
      
      for(var i=0; i< handlers.length ; i++ ){
        if(handlers[i] === handler){
          handlers.splice(i, 1);
        }
      }
    }else{
      delete this.events[event];
    }
    return true;
  },
  
  trigger: function( event ){
    if( typeof(event)!== 'string' || !this.events[event] ){
      return false;
    }
    var handlers = this.events[event];
    
    for(var i=0; i< handlers.length ; i++ ){
      handlers[i].call( this );
    }
  }
};
