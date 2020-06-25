const mongoose = require('mongoose')
const Schema = mongoose.Schema

var BotSchema = new Schema({
    response: { type: String, required: true },
    reply: { type: String, required: true },
});

module.exports = mongoose.model('Bot', BotSchema );
