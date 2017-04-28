var express = require ( 'express' ), 
  load = require ( 'express-load' ),
  app = express (),
  mongoose = require ( 'mongoose' );

global.db = mongoose.connect ( 'mongodb://localhost:27017/tvestore' );

app.set ( 'views', __dirname + '/views' );
app.set ( 'view engine', 'ejs' );
app.use ( express.static ( __dirname + '/public' ) );

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

load( 'models' )
  .then ( 'controllers' )
  .then ( 'routes' )
  .into ( app );

app.listen ( 3000, function () {
  console.log ( 'TVeStore no ar!!' );
} );