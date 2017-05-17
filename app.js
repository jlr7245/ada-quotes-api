/* setting up express */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();

/* importing routes */
const quoteRoutes = require('./routes/quotes');
const categoriesRoutes = require('./routes/categoriesRoutes');

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting up views */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cors());
/* setting up logger */
app.use(logger('dev'));
/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

/* setting routes */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.use('/api/quotes', quoteRoutes);
app.use('/api/categories', categoriesRoutes);

/* handling 404 */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});
