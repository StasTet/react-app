import express from 'express';
import favicon from 'serve-favicon'
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import methodOverride from 'method-override';
import config from './config/config.json';
import * as db from './config/db.js';
import Diary from './app/models/model.js';

const app = express();
const router = express.Router();

db.setUpConnection();

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(methodOverride('X-HTTP-Method-Override'));

// middleware to use for all requests
router.use( (req, res, next) => {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

app.get('/', (req,res) =>{
	res.sendFile(__dirname + '/public/index.html');
	// res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/diary')
    // create a diary (accessed at POST http://localhost:8080/api/diarys)
    .post( (req, res) => {

        let diary = new Diary();      // create a new instance of the Diary model
        diary.name = req.body.name;  // set the diary name
				diary.text = req.body.text;
				diary.mark = req.body.mark;

        // save the diary and check for errors
        diary.save( (err) => {
            if (err)
                res.send(err);

            res.json({ message: 'Diary created!' });
        });

    })

    // get all the diarys (accessed at GET http://localhost:8080/api/diarys)
    .get( (req, res) => {
        Diary.find( (err, diary) => {
            if (err)
                res.send(err);

            res.json(diary);
        });
    })

// ----------------------------------------------------

router.route('/diary/:diary_id')

    // get the diary with that id (accessed at GET http://localhost:8080/api/diary/:diary_id)
    .get( (req, res) => {
        Diary.findById(req.params.diary_id, (err, diary) => {
            if (err)
                res.send(err);
            res.json(diary);
        });
    })

		.put( (req, res) => {
        // use our diary model to find the diary we want
        Diary.findById(req.params.diary_id, (err, diary) => {

            if (err)
                res.send(err);

            diary.name = req.body.name;  // update the diarys info
						diary.text = req.body.text;
						diary.mark = req.body.mark;

            // save the diary
            diary.save( (err) => {
                if (err)
                    res.send(err);

                res.json({ message: 'Diary updated!' });
            });
        })
		})

		.delete( (req, res) => {
				Diary.remove({
						_id: req.params.diary_id
				}, (err, diary) => {
						if (err)
								res.send(err);

						res.json({ message: 'Successfully deleted' });
				});
		})


app.use('/api', router);

// app.get('/api', (req,res) =>{
// 	res.json({
//         status: "My API is alive!"
//     });
// });

app.listen(config.port);
console.log(`Server is up and running on port ${config.port}`);
