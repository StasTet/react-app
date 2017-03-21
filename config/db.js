import mongoose from 'mongoose';
import config from './config.json';

export function setUpConnection(){
	const url = `mongodb://${config.db.user}:${config.db.pass}@olympia.modulusmongo.net:${config.db.port}/inemat4A`;
	mongoose.Promise = global.Promise;
	mongoose.connect(url);
}
