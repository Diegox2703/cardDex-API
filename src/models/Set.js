import mongoose from "mongoose";

export const setSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    series: String,
    printedTotal: Number,
    total: Number,
    releaseDate: String,
    symbol: String,
    logo: String
}, {
    _id: false
})

export default mongoose.model('Set', setSchema)