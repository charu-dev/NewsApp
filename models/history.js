// import mongoose from "mongoose";
import {Schema, model, models} from 'mongoose'

const historySchema = new Schema({

    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      query: {
        type: String,
        required: [true, 'query is required.'],
      },
      fromd: {
        type: String,
        required: [true, 'from date is required.'],
      }, 
      tilld: {
        type: String,
        required: [true, 'till date is required.'],
      }

});

const Suit = models.Suit || model('Suit', historySchema);

export default Suit