const { Schema, model, Types} = require('mongoose');

const discussionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    creator_id: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
})

module.exports = model('Discussion', discussionSchema);
