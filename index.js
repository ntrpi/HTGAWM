// npm install dotenv --save
// echo "   YOUR DATABASE URL   " > .env
// Assuming this creates an object called process that has
// whatever vars are in your .env file as properties.
require( 'dotenv' ).config();
//const nodemailer = require('nodemailer');// sends our emails
const url = process.env.ATLAS_URL;

//-----------------------------------------------------------------
// https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2/
// Tutorial code

// for Nodemailer to send mails, it needs to have a SMTP 
// const transporter = nodemailer.createTransport({
//     host: "Google", //https://git.heroku.com/serene-island-58904.git
//     PORT: 587,
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD
//     }
//   });
//   // verify connection configuration
// transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

// Create an Express server to run on port 4000.
const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 4000;

// Attach the middleware
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
app.use( cors() );
app.use( bodyParser.json() );

// Use Mongoose to connect to the database.
const mongoose = require( 'mongoose' );
mongoose.connect( url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
} );
const connection = mongoose.connection;
connection.once( 'open', function()
{
    var today = new Date();
    var date = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    console.log( dateTime );
    console.log( "MongoDB database connection established successfully" );
} );

// https://riptutorial.com/express/example/16315/multiple-routes
const userRouter = require( './routes/users' );
app.use( '/api/users', userRouter );

const roleRouter = require( './routes/roles' );
app.use( '/api/roles', roleRouter );

const userRoleRouter = require( './routes/userRoles' );
app.use( '/api/userRoles', userRoleRouter );

const listingRouter = require( './routes/listings' );
app.use( '/api/listings', listingRouter );

// const messageRouter = require( './routes/messages' );
// app.use( '/api/messages', messageRouter );

const imageRouter = require( './routes/images' );
app.use( '/api/images', imageRouter );

const listingImageRouter = require( './routes/listingImages' );
app.use( '/api/listingImages', listingImageRouter );

const path = require( 'path' ); // Serve static files from the React frontend app
app.use( express.static( path.join( __dirname, 'client/build' ) ) ); // Anything that doesn't match the above, send back index.html
app.get( '*', ( req, res ) =>
{
    res.sendFile( path.join( __dirname + '/client/build/index.html' ) );
} )

app.listen( PORT, function()
{
    console.log( "Server is running on Port: " + PORT );
} );