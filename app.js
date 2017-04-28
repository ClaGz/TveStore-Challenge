var express = require ( 'express' ), 
  load = require ( 'express-load' ),
  app = express (),
  mongoose = require ( 'mongoose' );

const port = 3000;

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

app.listen ( port, function () {
  console.log ( `TVeStore está no ar! Acesse localhost:${port}/` );
} );