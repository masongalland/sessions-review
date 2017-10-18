module.exports = function( req, res, next ) {
    
  
    if ( !req.session.favorites ) {
      req.session.favorites = ["pizza"];
    } 
    next();
  };