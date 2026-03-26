import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: String,
    supertype: String,
    hp: String,
    types: [String],
    evolvesFrom: String,
    number: String,
    artist: String,
    rarity: String,
    images: {
        small: String,
        large: String
    },
    set: {
        type: String,
        ref: 'Set'
    }
},{
    _id: false
})

export default mongoose.model('Card', cardSchema)