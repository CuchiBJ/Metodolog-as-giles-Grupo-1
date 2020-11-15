const express = require('express');
const path = require('path');
const multer = require('multer');
const methodOverride = require('method-override');
const passport = require('passport');
//Inicializaciones
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('views engine', 'ejs');

// Middlewares
const AuthToken = require('./middlewares/AuthToken');
app.use(AuthToken);

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, file.originalname );
    }
});
app.use(multer({storage: storage}).single('image'));
app.use(passport.initialize());
app.use(passport.session());

// Global Variables

// Routes
app.use(require('./routes'))


//Static Files

app.use(express.static(path.join(__dirname, 'public')));

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});