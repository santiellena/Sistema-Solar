const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');

const server = express();

server.set('port', process.env.PORT || 80);
server.set('views', path.join(__dirname, 'views'));
server.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(server.get('views'), 'layouts'),
    partialsDir: path.join(server.get('views'), 'partials'),
    extname: '.hbs'
    // handlebars: allowInsecurePrototypeAccess(Handlebars);
}));
server.set('view engine', '.hbs');

server.use(require('./routes/main'));

server.use(express.static(path.join(__dirname, 'public')));

server.listen(server.get('port'), () => {
    console.log(`SERVER ON PORT ${server.get('port')}`);
});
