import mongoose from 'mongoose';
import config from './config.json';

const url = `mongodb://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.key}`;

export function setUpConnection() {
	mongoose.Promise = global.Promise;
	mongoose.connect(url);
}
