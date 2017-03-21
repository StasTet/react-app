import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const diarySchema   = new Schema({
    name     :   String,
    text     :   String,
    mark     :   String
});

module.exports = mongoose.model('Diary', diarySchema);
