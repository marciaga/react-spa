import express from 'express';
import hbs from 'express-handlebars';

const app = express();
app.use(express.static('public'));
app.engine('.hbs', hbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.locals.settings['x-powered-by'] = false; // don't advertise powered by express

app.get('/*', (req, res, next) => {
    res.render('index', {});
});

export default app;
