import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import methodOverride from 'method-override';
import config from './src/config.json';
import * as db from './config/db';

const app = express();

db.setUpConnection();

app.use(express.static(path.join(__dirname, "public")))
app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// app.use(methodOverride('X-HTTP-Method-Override'));


app.get('/', (req,res) =>{
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port);
console.log(`Server is up and running on port ${config.port}`);