// import mongoose from "mongoose";
import {Schema, model, models} from 'mongoose'

const feedSchema = new Schema({}, { strict: false });

const favFeed = models.favFeed || model('favFeed', feedSchema);

export default favFeed