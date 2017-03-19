import mongoose from 'mongoose';

export function setUpConnection(){
	//let url = 'mongodb://admin:admin@tastbaar.mongo.xervo.io:27017/idedY4ru';
	mongoose.connect('mongodb://admin:admin@tastbaar.mongo.xervo.io:27017/idedY4ru');
}