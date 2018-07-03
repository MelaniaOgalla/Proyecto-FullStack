const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
    },{
        toObject: {virtual:true},
        toJSON: {virtual:true}
    }
);

// Virtual for author's full name
AuthorSchema
    .virtual('name')
    .get(function () {
        return `${this.family_name}, ${this.first_name}`;
    });

// Virtual for author's URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

AuthorSchema
.virtual('date_of_birth_formated')
    .get(function () {
        return moment(this.date_of_birth).format('L');
    });
AuthorSchema
    .virtual('date_of_death_formated')
    .get(function () {
        return moment(this.date_of_death).format('L');
    });


//Export model
module.exports = mongoose.model('Author', AuthorSchema);